const YEARS_OFFSET = 5;
const SPACE_PER_YEAR = 90;
const SPACE_PER_EVENT = 75;
const YEAR_BE_OFFSET = 543;
const YEAR_ANIMATION_DELAY = 50;
const ANIMATION_START_DELAY = 1500;
// const MAX_PAGE_HEIGHT = 2000;

const SCROLL_OFFSET = 250;

let BIRTH_YEAR = 1995;
// const CURRENT_YEAR = 2020;

let LEFT_SPACE = 150;
let YEAR_SPACE_PADDING = 25;
// let LEFT_SPACE + YEAR_SPACE_PADDING = LEFT_SPACE + YEAR_SPACE_PADDING;
let X_ANCHOR = 220;
let X_ANCHOR_LEFT = 80;
let IMPORTANCE_CUTOFF = 1;

let BLINK_TIME = 4000;

let YEAR_MODE = 'ad';


let events, life, celebrities;

let scaleY, scaleR, transformedScaleY;
// let simulation;
let currentTransform = d3.zoomIdentity;
let tempTransform = currentTransform;
let lastDy = 0, startDy = 0, lastYCenter = 0;

const ZOOM_EXTENT = [1, 4];


const eventTemplate = Handlebars.compile(document.getElementById('hb-template-event').innerHTML);
const eventPopupTemplate = Handlebars.compile(document.getElementById('hb-template-event-popup').innerHTML);
const celebPopupTemplate = Handlebars.compile(document.getElementById('hb-template-celeb-popup').innerHTML);
const aboutPopupTemplate = Handlebars.compile(document.getElementById('hb-template-about-popup').innerHTML);

Promise.all([
    d3.csv("events.csv"),
    d3.csv("life.csv"),
    d3.csv("celebrities.csv"),
]).then(function(files) {
    events = files[0];//.filter(d => d.type == 'thailand');
    life = files[1];
    celebrities = files[2];
    
    let svg = d3.select('#timeline');

    let initialK = 1;
    let lastY1 = 0, lastY2 = 0;
    let lastYCenterClient = 0;
    let isZooming = false;
    let tempTouches;

    window.addEventListener('scroll', onScroll);

    svg.node().addEventListener('touchstart', (e) => {
        if (e.touches.length > 1) {
            isZooming = true;
            e.preventDefault();
            e.stopImmediatePropagation();
            startDy = lastDy = e.touches[1].pageY - e.touches[0].pageY;
            lastYCenter = (e.touches[1].pageY + e.touches[0].pageY) / 2;
            lastYCenterClient = (e.touches[1].clientY + e.touches[0].clientY) / 2;
            lastY1 = e.touches[0].pageY;
            lastY2 = e.touches[1].pageY;
            initialK = currentTransform.k;
        }
    });

    svg.node().addEventListener('touchmove', (e) => {
        if (e.touches.length > 1) {
            e.preventDefault();
            e.stopImmediatePropagation();

            let dy = e.touches[1].pageY - e.touches[0].pageY;
            // let p = (e.touches[0].pageY - lastY1);
            // let q = (e.touches[1].pageY - lastY2);
            // let yCenter = (p * e.touches[1].pageY - q * e.touches[0].pageY) / (p - q)
            let yCenter = (e.touches[1].pageY + e.touches[0].pageY) / 2;
            let yCenterClient = (e.touches[1].clientY + e.touches[0].clientY) / 2;

            let k = Math.max(ZOOM_EXTENT[0], Math.min(ZOOM_EXTENT[1], initialK * dy / lastDy));
            let dyScroll = (k / initialK - 1) * lastYCenter - (yCenterClient - lastYCenterClient);

            currentTransform = d3.zoomIdentity
                .translate(0, -dyScroll)
                .scale(k)
            
            lastYCenter = yCenter;
            // lastDy = dy;
            
            // zoomed(currentTransform, scrollTargetY);
            transformedScaleY = currentTransform.rescaleY(scaleY);
            updateTimeline(svg, [], [], yearRange);
        }
        tempTouches = e.touches;
    });

    svg.node().addEventListener('touchend', (e) => {
        // console.log('xxx', xxx);
        if (tempTouches && tempTouches.length == 2) {
            e.stopPropagation();

            let newScrollY = scrollY - currentTransform.y;
            currentTransform = d3.zoomIdentity.translate(0, 0).scale(currentTransform.k);
            transformedScaleY = currentTransform.rescaleY(scaleY);
            svg.style('height', transformedScaleY(2020 + YEARS_OFFSET) + 'px')
            window.scrollTo(0, newScrollY);

            updateTimeline(svg, [], [], yearRange);

            setTimeout(function () {
                isZooming = false;
            }, 10); // FIXME hacky solution to force simulation fixing objects
        }
        tempTouches = e.touches;
    });


    // preprocessing
    var eventsNested = d3.nest()
        .key(d => d.year)
        .entries(events)
        .map(d => ({
            year: d.key,
            events: d.values
        }));

    var celebsNested = d3.nest()
        .key(d => d.year)
        .entries(celebrities)
        .map(d => ({
            year: d.key,
            celebs: d.values
        }));

    eventsNested.forEach(d => {
        // console.log(d)
        d.events.sort((x, y) => x.importance - y.importance)
    })
        // .rollup(d => d)

    for (let i in eventsNested) {
        let x = -1;
        for (let j in celebrities) {
            if (celebrities[j].birthyear == eventsNested[i].year) {
                x = j;
            }
        }
        if (x != -1) {
            eventsNested[i].celebrity = celebrities[x];
        }
    }

    
    console.log(eventsNested);

    let yearExtent = d3.extent(events, x => x.year);
    // let yearRange = yearExtent[1] - yearExtent[0];
    scaleY = d3.scaleLinear()
        .domain([yearExtent[0] - YEARS_OFFSET, yearExtent[1] - YEARS_OFFSET])
        .range([0, ((yearExtent[1] - yearExtent[0]) + 2 * YEARS_OFFSET) * SPACE_PER_YEAR]);
    transformedScaleY = d3.zoomIdentity.rescaleY(scaleY);

    scaleR = d3.scaleLinear()
        .domain([1, 5])
        .range([30, 30]);

    // console.log(yearRange);

    let yearRange = d3.range(yearExtent[0], +yearExtent[1] + 1);

    // Utils.startTypingEffect(d3.select('#typewriting').node());

    // main timeline
    
    let appDiv = d3.select('#app');
    let eventsDiv = d3.select('#events');
    let lifeDiv = d3.select('#life');

    d3.selectAll('.year-select')
        .selectAll('option')
        .data(yearRange.reverse())
        .enter()
        .append('option')
        .attr('value', d => d)
        .text(d => `ค.ศ. ${d} / พ.ศ. ${d + 543}`)
        .attr('selected', d => {
            // console.log(d, BIRTH_YEAR)
            return d == '' + BIRTH_YEAR ? 'selected' : null;
        })
        // .text(d => d)
    
    svg.style('height', scaleY(+yearExtent[1] + YEARS_OFFSET) + 'px')
    
    updateTimeline(svg, eventsNested, celebsNested, yearRange);
    

    // EVENTS
    d3.selectAll(".button-start").on('click', function () {
        let yearSelectSelector = d3.select(this).attr('data-target-select') || '.year-select';
        let selectedYear = d3.select(yearSelectSelector).node().value;
        setBirthYear(+selectedYear);
        d3.selectAll('.event-year-group').classed('hidden', true);
        if (this.closest('.fade-overlay'))
            d3.select(this.closest('.fade-overlay')).classed('hide', true);

        d3.selectAll('.year-select').property('value', selectedYear);

        d3.selectAll('.event-year-group').each(function (d, i, el) {
            setTimeout(function () {
                d3.select(el[i]).classed('hide', false);
            }, d.year >= BIRTH_YEAR ? (d.year - BIRTH_YEAR) * 300 + BLINK_TIME : 0);
        })
    });

    d3.select("#button-change-birth-year").on('click', function () {
        d3.select("#change-birthyear-popup").classed('hide', false);
        // d3.select("#cover-page").classed('hidden', false);
        // d3.selectAll("#intro-page").classed('blink', false);
    });

    d3.select("#home-button").on('click', function () {
        d3.select("#cover-page").classed('hidden', false);
        d3.selectAll("#intro-page").classed('blink', false);
    });

    d3.select("#year-change-toggle").on('click', function toggleYearChange () {
        let lifeDiv = d3.select('#life');
        let offsetTop = window.pageYOffset || document.documentElement.scrollTop;

        if (!lifeDiv.classed('lock')) {
            d3.transition()
                .on("end", function (e) {
                    lifeDiv.classed('lock', true)
                        .style('top', e => SCROLL_OFFSET + 'px');
                })
                .duration(200)
                .ease(d3.easeCubic)
                .tween("scroll", (offset => () => {
                    var i = d3.interpolateNumber(offsetTop, offset);
                    return t => scrollTo(0, i(t))
                })(scaleY(BIRTH_YEAR) - SCROLL_OFFSET));
        } else {
            let selectedYear = Math.round(scaleY.invert(offsetTop + SCROLL_OFFSET));
            BIRTH_YEAR = selectedYear;
            console.log(scaleY.invert(offsetTop), selectedYear);
            lifeDiv.classed('lock', false)
                .style('top', e => scaleY(BIRTH_YEAR) + 'px');
            window.scrollTo(0, scaleY(BIRTH_YEAR) - SCROLL_OFFSET);
        }
    });

    d3.selectAll('.popup-close').on('click', function () {
        console.log('close', this.closest('.fade-overlay'))
        d3.select(this.closest('.fade-overlay')).classed('hide', true)
    });

    d3.selectAll('.fade-overlay').on('click', function (e) {
        if (e.target == this)
            d3.select(this).classed('hide', true)
    });

    d3.select("#button-about").on('click', function (e) {
        e.preventDefault();
        d3.select('#shared-overlay .content').html(aboutPopupTemplate());
        d3.select('#shared-overlay').classed('hide', false);
    });

    
    
    d3.select("#year-type-be").on('click', e => setYearType('be', e));
    d3.select("#year-type-ad").on('click', e => setYearType('ad', e));
    
    setYearType('ad');

    function setYearType(type, event) {
        if (event)
            event.preventDefault();
        
        YEAR_MODE = type
            // d3.event.preventDefault();
        // } catch (e) {};
        d3.selectAll('.year-number').text(function (d) {
            return +d3.select(this).attr('data-year-ad') + (YEAR_MODE == 'be' ? 543 : 0);
        })
        // eventsDiv.selectAll('.event')
        //     .text(e => '- ' + (+e.year + (type == 'be' ? 543 : 0)) + ' ' + e.events[0].event);
        d3.select("#year-type-be").classed('active', YEAR_MODE == 'be');
        d3.select("#year-type-ad").classed('active', YEAR_MODE == 'ad');
    }
}).catch(function(err) {
    console.log('error:', err);
    // handle error here
})


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function setBirthYear (year) {
    console.log(year)
    if (year) {
        BIRTH_YEAR = year;
        d3.selectAll(".fill-birth-year").text(+BIRTH_YEAR + (YEAR_MODE == 'be' ? 543 : 0));
        d3.selectAll("#intro-page").classed('reset', true);
        setTimeout(function () {
            d3.selectAll("#intro-page").classed('reset', false);
        }, 100);
        d3.selectAll("#intro-page").classed('blink', false);
        d3.selectAll("#intro-page").classed('blink', true);
        d3.select("#cover-page").classed('hidden', true);
        window.scrollTo(0, scaleY(BIRTH_YEAR) - SCROLL_OFFSET);
    }
}


function updateTimeline (svg, eventsNested, celebsNested, yearRange) {
    IMPORTANCE_CUTOFF = Math.floor(currentTransform.k / 0.8 + 0.5);
    updateYearScale(svg, yearRange);
    updateEvents(svg, eventsNested);
    updateCelebrities(svg, celebsNested);
}


function updateYearScale (svg, yearRange, transform = d3.zoomIdentity) {
    
    let yearGroupEnter = svg.selectAll('.year')
    .data(yearRange)
    .enter()
    .append('g')
    .attr('class', 'year')
    
    yearGroupEnter.append('text')
    .text(d => d)
    .classed('year-number', true)
    .attr('data-year-ad', d => d)
    
    yearGroupEnter.append('line')
    .attr('stroke', '#000');
    
    let yearGroup = svg.selectAll('.year')
        .merge(yearGroupEnter)
        .attr('transform', d => `translate(${LEFT_SPACE}, ${transformedScaleY(d)})`);

    yearGroup.selectAll('line')
        .attr('x1', 0)
        .attr('y1', -SPACE_PER_YEAR * currentTransform.k + 10)
        .attr('x2', 0)
        .attr('y2', -10)
    
        // console.log(svg, yearGroup);
}

function updateEvents (svg, eventsNested = [], transform = d3.zoomIdentity) {
    // let transformedScaleY = transform.rescaleY(scaleY);
    
    let eventYearGroupEnter = null;
    let eventGroupEnter = null;
    let moreBadgeEnter = null;

    // eventsNested.forEach(d => {
    //     d.hiddenCount = d.events.filter(x => x.importance > IMPORTANCE_CUTOFF).length;
    // });

    if (eventsNested.length > 0) {

        eventYearGroupEnter = svg.selectAll('.event-year-group')
            .data(eventsNested)
            .enter()
            .append('g')
            .attr('class', 'event-year-group hide')
            // .attr('transform', d => `translate(${X_ANCHOR}, ${transformedScaleY(d.year)})`);
    
        eventGroupEnter = eventYearGroupEnter.selectAll('.event')
            .data(d => d.events)
            .enter()
            .append('g')
            .attr('class', 'event')
            .attr('transform', (d, i) => `translate(0, ${i * SPACE_PER_EVENT})`)
        
        var defs = eventGroupEnter.append('svg:defs');

        let R = 30;
        defs.append('svg:pattern')
            .attr('id', d => `image_id_${d.image.replace(/( |\.)/g, '_')}`)
            .attr("width", d => 2 * R)
            .attr("height", d => 2 * R)
            .attr("x", d => -R)
            .attr("y", d => -R)
            .attr("patternUnits", "userSpaceOnUse")
            .append("svg:image")
            // FIXME get album art once the api has been fixed
            .attr("xlink:href", d => '/img/events/' + d.image)
            .attr("width", d => 2 * R)
            .attr("height", d => 2 * R);

        // eventGroupEnter.append('defs')
        //     .append('pattern')
        //     .append('pattern')
            // <defs>
            //     <pattern id="image05evePUsIT1cmIURp1hgu6" patternUnits="userSpaceOnUse" width="6.5490453156328865" height="6.5490453156328865" x="-3.2745226578164432" y="-3.2745226578164432">
            //         <image xlink:href="https://i.scdn.co/image/ab67616d0000485122ca59e5c2d806439d5f08a2" width="6.5490453156328865" height="6.5490453156328865"></image>
            //     </pattern>
            // </defs>

        let eventBubbleG = eventGroupEnter.append('g')
            .attr('class', 'event-bubble')

        eventBubbleG.append('path')
            .attr('class', 'bubble-link-path')
            .attr('d', (d, i) => `
                M ${LEFT_SPACE + YEAR_SPACE_PADDING - X_ANCHOR}, ${-i * SPACE_PER_EVENT}
                L ${((LEFT_SPACE + YEAR_SPACE_PADDING - X_ANCHOR) - scaleR(d.importance)) / 2}, ${-i * SPACE_PER_EVENT}
                L ${((LEFT_SPACE + YEAR_SPACE_PADDING - X_ANCHOR) - scaleR(d.importance)) / 2}, ${0}
                L ${0}, ${0}
            `)

        eventBubbleG.append('circle')
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', d => scaleR(d.importance))
            // .attr('fill', '#fff')
            .style('fill', d => `url(#image_id_${d.image.replace(/( |\.)/g, '_')})`)
            .style('stroke', '#fff')
            .on('click', function (e, d) {
                let dataProcessed = {
                    ...d,
                    year: +d.year + (YEAR_MODE == 'be' ? 543 : 0),
                    yearMode: YEAR_MODE
                }
                d3.select('#shared-overlay .content').html(eventPopupTemplate(dataProcessed));
                d3.select('#shared-overlay').classed('hide', false);
            })
            
        eventBubbleG.append('foreignObject')
            .attr('x', d => scaleR(d.importance) + 10)
            .attr('y', -50)
            .attr('width', 120)
            .attr('height', d => scaleR(d.importance) * 2)
            .attr('alignment-baseline', 'middle')
            .attr('text-anchor', 'start')
            .append('xhtml:p')
            .attr('xmlns', 'http://www.w3.org/1999/xhtml')
            .style('line-height', '1.1')
            .attr('class', 'event-title')
            .text(d => d.event)
        
        // eventGroupEnter.append('line')
        // .attr('x1', 150)
        // .attr('y1', d => scaleY(d.year))
        // .attr('x2', X_ANCHOR)
        // .attr('y2', d => scaleY(d.year))
        // .attr('stroke', '#fff6');

        moreBadgeEnter = eventYearGroupEnter.append('g')
            .attr('class', 'more-badge')
        moreBadgeEnter.append('path')
            .attr('class', 'bubble-link-path')
        moreBadgeEnter.append('circle')
            .attr('r', 10)
            .attr('fill', '#ccc')
            
        // moreBadgeEnter.append('text')
        //     .attr('class', 'svg-text-center')
        //     .attr('fill', '#fff')
    }

    let eventGroup = eventGroupEnter  ? 
        eventGroupEnter.merge(svg.selectAll('.event')) : 
        svg.selectAll('.event');

    let eventYearGroup = eventYearGroupEnter ? 
        eventYearGroupEnter.merge(svg.selectAll('.event-year-group')) : 
        svg.selectAll('.event-year-group');

    let moreBadge = moreBadgeEnter ? 
        moreBadgeEnter.merge(svg.selectAll('.more-badge')) : 
        svg.selectAll('.more-badge');

    // console.log(IMPORTANCE_CUTOFF);
    let BADGE_OFFSET = 25;
    moreBadge
        .attr('transform', d => `translate(0, ${Math.max(countShownEvents(d) * SPACE_PER_EVENT - BADGE_OFFSET, 0)})`)
        .attr('opacity', d => (countHiddenEvents(d) > 0) ? 1 : 0)
    moreBadge.select('path')
        .attr('d', function (d) {
            let yOffset = -(countShownEvents(d) * SPACE_PER_EVENT - BADGE_OFFSET);
            yOffset = Math.min(yOffset, 0);
            return `
                M ${LEFT_SPACE + YEAR_SPACE_PADDING - X_ANCHOR}, ${yOffset}
                L ${((LEFT_SPACE + YEAR_SPACE_PADDING - X_ANCHOR) - 30) / 2}, ${yOffset}
                L ${((LEFT_SPACE + YEAR_SPACE_PADDING - X_ANCHOR) - 30) / 2}, ${0}
                L ${0}, ${0}
            `
        })
        // .attr('opacity', d => countShownEvents(d) == 0 ? 1 : 0)
    // moreBadge.select('text').text(d => `+${countHiddenEvents(d)}`)

    eventYearGroup.attr('transform', d => `translate(${X_ANCHOR}, ${transformedScaleY(d.year)})`);
    
    // console.log(eventGroup, eventGroupEnter, svg.selectAll('.event'));
    // eventGroup.each(d => { console.log(d.importance, IMPORTANCE_CUTOFF) });
    eventGroup.filter(d => d.importance > IMPORTANCE_CUTOFF)
        .attr('opacity', '0');
    eventGroup.filter(d => d.importance <= IMPORTANCE_CUTOFF)
        .attr('opacity', '1');
        
    
    // eventGroup.selectAll('g.event-bubble')
        
    
    // if (simulation) {
    //     simulation.force('x').x(X_ANCHOR).strength(0.15);
    //     simulation.force('y').y(d => transformedScaleY(d.year)).strength(0.1);
    //     simulation.force('collision').radius(d => {
    //         if (d.importance > IMPORTANCE_CUTOFF)
    //             return 0;
    //         else 
    //             return scaleR(d.importance) + 5;
    //     });
    // }
}

function updateCelebrities (svg, celebsNested = [], transform = d3.zoomIdentity) {
    // let transformedScaleY = transform.rescaleY(scaleY);
    
    let celebYearGroupEnter = null;
    let celebGroupEnter = null;
    
    // eventsNested.forEach(d => {
    //     d.hiddenCount = d.events.filter(x => x.importance > IMPORTANCE_CUTOFF).length;
    // });

    if (celebsNested.length > 0) {

        celebYearGroupEnter = svg.selectAll('.celeb-year-group')
            .data(celebsNested)
            .enter()
            .append('g')
            .attr('class', 'celeb-year-group')
            // .attr('transform', d => `translate(${X_ANCHOR}, ${transformedScaleY(d.year)})`);
    
        celebGroupEnter = celebYearGroupEnter.selectAll('.celeb')
            .data(d => d.celebs)
            .enter()
            .append('g')
            .attr('class', 'celeb')
            .attr('transform', (d, i) => `translate(0, ${i * SPACE_PER_EVENT})`)
        
        var defs = celebGroupEnter.append('svg:defs');

        let R = 20;
        defs.append('svg:pattern')
            .attr('id', d => `image_id_${d.image.replace(/( |\.)/g, '_')}`)
            .attr("width", d => 2 * R)
            .attr("height", d => 2 * R)
            .attr("x", d => -R)
            .attr("y", d => -R)
            .attr("patternUnits", "userSpaceOnUse")
            .append("svg:image")
            .attr("xlink:href", d => '/img/celebs/' + d.image)
            .attr("width", d => 2 * R)
            .attr("height", d => 2 * R);


        let celebBubbleG = celebGroupEnter.append('g')
            .attr('class', 'celeb-bubble')

        celebBubbleG.append('path')
            .attr('class', 'bubble-link-path')
            .attr('d', (d, i) => `
                M ${LEFT_SPACE - YEAR_SPACE_PADDING - X_ANCHOR_LEFT}, ${-i * SPACE_PER_EVENT}
                L ${((LEFT_SPACE - YEAR_SPACE_PADDING - X_ANCHOR_LEFT) - R) / 2}, ${-i * SPACE_PER_EVENT}
                L ${((LEFT_SPACE - YEAR_SPACE_PADDING - X_ANCHOR_LEFT) - R) / 2}, ${0}
                L ${0}, ${0}
            `)

        celebBubbleG.append('circle')
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', d => R)
            // .attr('fill', '#fff')
            .style('fill', d => `url(#image_id_${d.image.replace(/( |\.)/g, '_')})`)
            .style('stroke', '#fff')
            .on('click', function (e, d) {
                let dataProcessed = {
                    ...d,
                    year: +d.year + (YEAR_MODE == 'be' ? 543 : 0),
                    yearMode: YEAR_MODE
                }
                d3.select('#shared-overlay .content').html(celebPopupTemplate(dataProcessed));
                d3.select('#shared-overlay').classed('hide', false);
                d3.selectAll('.set-birthyear').on('click', function (e) {
                    setBirthYear(+d3.select(this).attr('data-target-year'));
                    d3.select('#shared-overlay').classed('hide', true);
                })
            })
            
        // celebBubbleG.append('foreignObject')
        //     .attr('x', d => R + 10)
        //     .attr('y', -50)
        //     .attr('width', 120)
        //     .attr('height', d => R * 2)
        //     .attr('alignment-baseline', 'middle')
        //     .attr('text-anchor', 'start')
        //     .append('xhtml:p')
        //     .attr('xmlns', 'http://www.w3.org/1999/xhtml')
        //     .style('line-height', '1.1')
        //     .attr('class', 'celeb-title')
        //     .text(d => d.name)
        
            
        // moreBadgeEnter.append('text')
        //     .attr('class', 'svg-text-center')
        //     .attr('fill', '#fff')
    }

    let celebGroup = celebGroupEnter  ? 
        celebGroupEnter.merge(svg.selectAll('.celeb')) : 
        svg.selectAll('.celeb');

    let celebYearGroup = celebYearGroupEnter ? 
        celebYearGroupEnter.merge(svg.selectAll('.celeb-year-group')) : 
        svg.selectAll('.celeb-year-group');

    celebYearGroup.attr('transform', d => `translate(${X_ANCHOR_LEFT}, ${transformedScaleY(d.year)})`);
}

function updateLifeEvents (selection, data, yearExtent) {
    selection.attr('height', scaleY(+yearExtent[1] + YEARS_OFFSET) + 'px');
    
    let eventG = selection.selectAll('.life-event')
        .data(data)
        .enter()
        .append('g')
        .attr('class', 'life-event')
        .text(e => e.event + ' ' + e.age)
        .style('opacity', '0.2')
        .style('top', e => scaleY(+e.age + BIRTH_YEAR) - scaleY(BIRTH_YEAR) + 'px')
    
    // eventG.append('line')
    //     .attr('x1', 0)
    //     .attr('y1', 0)
    //     .attr('x2', 20)
    //     .attr('y2', 0)
    //     .attr('stroke', '#000')
    // eventG.append('text')
    //     .attr('alignment-baseline', 'middle')
    //     .text(e => e.year + ' ' + e.events[0].age)
    //     .attr('x', 25)
        // .style('opacity', '0.2')
}

function onScroll () {
    let closestFound = false;

    let currentYear =  Math.round(transformedScaleY.invert(scrollY + SCROLL_OFFSET))
    let currentAge = currentYear - BIRTH_YEAR;
    d3.select('#current-age')
        .text(currentAge >= 0 ? `อายุ ${currentAge} ปี` : `ก่อนเกิด ${-currentAge} ปี`);

    let currentLifeStage = 0;

    d3.select('body').classed('not-born', currentAge < 0)
    if (currentAge < 0) {
        d3.select('.life-status .stage').text('ยังไม่เกิด');
        d3.select('.life-status .image').style('background-image', '');
    } else {
        for (let i in life) {
            // console.log(+life[i].age, currentAge)
            if (+life[i].age > currentAge) {
                d3.select('.life-status .stage').text(life[i - 1].event);
                d3.select('.life-status .image').style('background-image', `url(/img/life/${life[i - 1].image})`);
                break;
            }
        }
    }
}
    
function scrollTopTween(scrollTop) {
    return function() {
        var i = d3.interpolateNumber(this.scrollTop, scrollTop);
        return function(t) { this.scrollTop = i(t); };
    };
}

function wrap(text, width, x) {
    console.log(text, width);
    text.each(function() {
      var text = d3.select(this),
          words = text.text().split(/\s+/).reverse(),
          word,
          line = [],
          lineNumber = 0,
          lineHeight = 1.1, // ems
          y = text.attr("y"),
          dy = 0,//parseFloat(text.attr("dy")),
          tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");
      while (word = words.pop()) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
        }
      }
    });
  }



function countHiddenEvents (d) {
    return d.events.filter(x => x.importance > IMPORTANCE_CUTOFF).length
}

function countShownEvents (d) {
    return d.events.filter(x => x.importance <= IMPORTANCE_CUTOFF).length
}
