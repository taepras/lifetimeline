const YEARS_OFFSET = 5;
const SPACE_PER_YEAR = 70;
const YEAR_BE_OFFSET = 543;
const YEAR_ANIMATION_DELAY = 50;
const ANIMATION_START_DELAY = 1500;
// const MAX_PAGE_HEIGHT = 2000;

const SCROLL_OFFSET = 200;

let BIRTH_YEAR = 2497-543;
const CURRENT_YEAR = 2020;

let scaleY;

var eventTemplate = Handlebars.compile(document.getElementById('hb-template-event').innerHTML);


Promise.all([
    d3.csv("events.csv"),
    d3.csv("life.csv"),
    d3.csv("celebrities.csv"),
]).then(function(files) {
    let events = files[0];//.filter(d => d.type == 'thailand');
    let life = files[1];
    let celebrities = files[2];
    
    // preprocessing
    var eventsNested = d3.nest()
        .key(d => d.year)
        .entries(events)
        .map(d => ({
            year: d.key,
            events: d.values
        }));
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
    let yearRange = yearExtent[1] - yearExtent[0];
    scaleY = d3.scaleLinear()
        .domain([yearExtent[0] - YEARS_OFFSET, yearExtent[1] - YEARS_OFFSET])
        .range([0, (yearRange + 2 * YEARS_OFFSET) * SPACE_PER_YEAR]);

    console.log(yearRange);

    // main timeline
    d3.select('#timeline')
        .style('height', scaleY(+yearExtent[1] + YEARS_OFFSET + 240) + 'px')

    let appDiv = d3.select('#app');
    let eventsDiv = d3.select('#events');
    let lifeDiv = d3.select('#life');
    
    eventsDiv.call(updateEvents, eventsNested, yearExtent);
        // .style('transform', e => 'translateY(' + scaleY(+e.year) + 'px)')

    lifeDiv.style('top', e => scaleY(BIRTH_YEAR) + 'px');
    lifeDiv.call(updateLifeEvents, life, yearExtent);

    window.addEventListener('scroll', function () {
        let closestFound = false;
        let events = d3.selectAll('.event-container')
            .classed('future', function(d, i, e) {
                return +d3.select(this).style('top').replace("px", "") - SCROLL_OFFSET > scrollY;
            })
            .each(function (d, i) {
                let el = d3.select(this);
                if (closestFound) {
                    el.classed('active',false);
                } else if (+el.style('top').replace("px", "") - SCROLL_OFFSET < scrollY) {
                    el.classed('active', false);
                } else {
                    el.classed('active', true);
                    closestFound = true;
                }
            });
    
        let currentYear =  Math.round(scaleY.invert(scrollY + SCROLL_OFFSET))
        let currentAge = currentYear - BIRTH_YEAR;
        d3.select('#current-age')
            .text(currentAge >= 0 ? `อายุ ${currentAge} ปั` : `ก่อนเกิด ${-currentAge} ปั`);

        let currentLifeStage = 0;
        if (currentAge < 0) {
            d3.select('.life-status .stage').text('ยังไม่เกิด');
            d3.select('.life-status .image').style('background-image', '');
        } else {
            for (let i in life) {
                console.log(+life[i].age, currentAge)
                if (+life[i].age > currentAge) {
                    d3.select('.life-status .stage').text(life[i - 1].event);
                    d3.select('.life-status .image').style('background-image', `url(/img/life/${life[i - 1].image})`);
                    break;
                }
            }
        }
    });

    // d3.select('body').on('scroll', onScroll);
    // window.scrollTo(0, scaleY(BIRTH_YEAR) - SCROLL_OFFSET);

    // EVENTS
    d3.select("#button-start").on('click', function () {
        BIRTH_YEAR = +d3.select('#year-input').property('value');
        d3.select("#cover-page").classed('hidden', true);

        // console.log(BIRTH_YEAR, );
        window.scrollTo(0, scaleY(BIRTH_YEAR) - SCROLL_OFFSET);
        // d3.selectAll('.event')
        //     .filter(e => +e.year >= BIRTH_YEAR)
        //     .transition()
        //         .delay(e => ANIMATION_START_DELAY + (+e.year - BIRTH_YEAR) * YEAR_ANIMATION_DELAY)
        //         .style('opacity', '1');

        // d3.select('#life').style('top', e => scaleY(BIRTH_YEAR) + 'px');
        // d3.selectAll('.life-event')
        //     .transition()
        //         .delay(e => ANIMATION_START_DELAY + e.age * YEAR_ANIMATION_DELAY)
        //         .style('opacity', '1');
        
        // d3.selectAll('.life-event')
        //     .style('display', 'block')
        //     .filter(e => +e.age + BIRTH_YEAR > CURRENT_YEAR)
        //     .style('display', 'none')

        
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

    
    d3.select("#year-type-be").on('click', setYearType('be'));
    d3.select("#year-type-ad").on('click', setYearType('ad'));
    
    setYearType('ad')();

    function setYearType(type) {
        return function () {
            try {
                d3.event.preventDefault();
            } catch (e) {};
            // eventsDiv.selectAll('.event')
            //     .text(e => '- ' + (+e.year + (type == 'be' ? 543 : 0)) + ' ' + e.events[0].event);
            d3.select("#year-type-be").classed('active', type == 'be');
            d3.select("#year-type-ad").classed('active', type == 'ad');
        }
    }
}).catch(function(err) {
    console.log('error:', err);
    // handle error here
})



function updateEvents (selection, data, yearExtent) {
    selection.attr('height', scaleY(+yearExtent[1] + YEARS_OFFSET +240) + 'px');
    
    let eventG = selection.selectAll('.event')
        .data(data)
        .enter()
        .append('div')
        .attr('class', 'event-container')
        .style('top', e => `${scaleY(+e.year)}px`)
        .html(function (d, i) {
            return eventTemplate({
                year: d.year,
                event: d.events[0].event,
                celebrity: d.celebrity || {}
            })
        });

    eventG.filter(d => !('celebrity' in d))
        .select('.celebrity')
        .classed('hidden', true)
        // .attr('transform', e => `translate(0,${scaleY(+e.year)})`);
    
    // eventG.append('line')
    //     .attr('x1', 0)
    //     .attr('y1', 0)
    //     .attr('x2', 20)
    //     .attr('y2', 0)
    //     .attr('stroke', '#000')
    // eventG.append('text')
    //     .attr('alignment-baseline', 'middle')
    //     .text(e => e.year + ' ' + e.events[0].event)
    //     .attr('x', 25)
    //     // .style('opacity', '0.2')
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
    console.log('!')
}
    
function scrollTopTween(scrollTop) {
    return function() {
        var i = d3.interpolateNumber(this.scrollTop, scrollTop);
        return function(t) { this.scrollTop = i(t); };
    };
}

