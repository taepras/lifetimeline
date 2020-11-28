import { useEffect, useState, useRef, useMemo } from "react";
import styled from "styled-components";
import Container from "../components/Container";
import Button from "../components/Button";
import EventBubble from "../components/EventBubble";
import EventDialog from "../components/EventDialog";
import YearSelector from "../components/YearSelector";
import Dialog from "../components/Dialog";
import YearGroup from "../components/YearGroup";

import Config, { Utils, useStateWithPromise } from "../config/Config";
import Theme from "../config/Theme";

import * as d3 from "d3";
import * as d3Collection from "d3-collection";
import * as d3Scale from "d3-scale";

import clone from "clone";

import eventsData from "../data/events.csv";
import celebsData from "../data/celebrities.csv";
import lifeData from "../data/life.csv";

import { zoom } from "d3";

const Banner = styled.div`
  position: fixed;
  top: 0;
  right: ${Theme.spacing.x2}px;
  padding: ${Theme.spacing.x2}px;

  text-align: right;
  background: #ece8e3;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 0px 0px 8px 8px;
  z-index: 100;

  h1 {
    margin: 0;
    line-height: 1.2;
    margin-bottom: ${Theme.spacing.x1}px;
  }
`;

const ZoomControls = styled.div`
  position: fixed;
  right: ${Theme.spacing.x2}px;
  bottom: 80px;
  display: flex;
  flex-direction: column;
  z-index: 1;

  ${Button} {
    font-size: 1.2em;
  }
`;

const RefLine = styled.div`
  width: 100%;
  height: 4px;
  background-color: #f005;
  position: fixed;
  top: 50vh;
`;

const zoomExtent = [1, 5];

const yearStartDisplay = Config.yearRangeMin - Config.yearsOffset;
const yearEndDisplay = Config.yearRangeMax + Config.yearsOffset;

const yearSpan = Config.yearRangeMax - Config.yearRangeMin;
const yearSpanToDisplay = yearSpan + 2 * Config.yearsOffset;
const timelineMinLength = yearSpanToDisplay * Config.yearHeight;
const timelineMaxLength = timelineMinLength * zoomExtent[1];

const maxZoomOffset = timelineMaxLength - timelineMinLength;
const maxContainerHeight = timelineMaxLength * 2 - timelineMinLength;

const scaleY = d3Scale
  .scaleLinear()
  .domain([yearStartDisplay, yearEndDisplay])
  .range([maxZoomOffset, maxZoomOffset + timelineMinLength]);

function Timeline({ birthYear, yearMode, onYearChange = (year) => {} }) {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [dialogData, setDialogData] = useState({});
  const [openYearChange, setOpenYearChange] = useState(false);
  const [eventsNested, _setEventsNested] = useStateWithPromise([]);

  const [transform, setTransform] = useStateWithPromise(d3.zoomIdentity);
  const [transformedScaleY, setTransformedScaleY] = useStateWithPromise(
    () => scaleY
  );
  // const transformedScaleY = useMemo(() => transform.rescaleY(scaleY), [transform]);
  const [smoothTransition, setSmoothTransition] = useStateWithPromise(true);
  const [isNormalizingTransform, setNormalizingTransform] = useStateWithPromise(
    false
  );

  const scrollRange = useMemo(() => {
    let x = [
      transformedScaleY(yearStartDisplay),
      transformedScaleY(yearEndDisplay),
    ];
    return x;
  }, [transformedScaleY]);

  const [currentScrollListener, setCurrentScrollListener] = useState(null);

  const refLineEl = useRef(null);

  const handleYearChange = (year) => {
    setOpenYearChange(false);
    onYearChange(year);
    scrollToYear(year);
  };

  const preprocessData = (events, celebrities) => {
    let eventsNestedTemp = d3Collection
      .nest()
      .key((d) => d.year)
      .entries(events)
      .map((d) => ({
        year: d.key,
        events: d.values,
      }));

    eventsNestedTemp.forEach((d) => {
      d.events.sort((x, y) => x.importance - y.importance);
      d.celebrities = [];
    });

    for (let i in eventsNestedTemp) {
      let x = -1;
      for (let j in celebrities) {
        if (+celebrities[j].year == +eventsNestedTemp[i].year) {
          celebrities[j].type = "birthyear";
          eventsNestedTemp[i].events.push(celebrities[j]);
        }
      }
    }

    console.log(eventsNestedTemp)

    return eventsNestedTemp;
  };

  useEffect(() => {
    if (currentScrollListener)
      window.removeEventListener("scroll", currentScrollListener);

    const handleScroll = (e) => {
      const scrollOffset =
        document.body.scrollTop || document.documentElement.scrollTop;
      // console.log(scrollRange, transform);
      if (scrollOffset < scrollRange[0]) {
        console.log("too low");
        e.preventDefault();
        window.scrollTo(0, scrollRange[0]);
      }
      if (scrollOffset > scrollRange[1]) {
        console.log("too high");
        e.preventDefault();
        window.scrollTo(0, scrollRange[1]);
      }
    };
    setCurrentScrollListener(() => handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: false });
  }, [scrollRange]);


  const setEventsNested = (newEventsNested) => {
    return new Promise(resolve => {
      let eventsNestedTemp = clone(newEventsNested);
      eventsNestedTemp.forEach((e) => {
        e.y = transformedScaleY(e.year);
      });
      _setEventsNested(eventsNestedTemp)
        .then(resolve);
    })
  };

  const openDialog = (event) => {
    setDialogData(event);
    setDialogOpen(true);
  };

  const zoomAt = (t, y, k) => {
    let yOnCurrentZoom = t.invert([0, y])[1];
    let tNew = t
      .translate(0, yOnCurrentZoom)
      .scale(k)
      .translate(0, -yOnCurrentZoom);
    return tNew;
  };

  const zoom = (dz, centerY = null) => {
    let tempZoomLevel = Utils.Clamp(
      transform.k + dz,
      zoomExtent[0],
      zoomExtent[1]
    );
    // let k = Utils.Clamp(transform.k * dy / lastDy, 1, 5);
    let zoomCenterY = 0;
    if (centerY === null) {
      let scrollTop = document.documentElement.scrollTop;
      let refLineBb = refLineEl.current.getBoundingClientRect();
      zoomCenterY = scrollTop + refLineBb.top;
    } else {
      zoomCenterY = centerY;
    }

    // let oldRefY = zoomCenterY;
    // let newRefY = zoomCenterY * tempZoomLevel;
    // let dyScroll = newRefY - oldRefY;
    // let tempTransform = d3.zoomIdentity
    // let tempTransform = transform
    //   .translate(0, -zoomCenterY)
    //   .scale(tempZoomLevel / transform.k);
    let tempTransform = zoomAt(transform, zoomCenterY, tempZoomLevel / transform.k);
    // .scale(tempZoomLevel);

    console.log(tempTransform, zoomCenterY);

    let tempScaleY = tempTransform.rescaleY(scaleY);

    console.log(tempScaleY(2020))
    console.log(tempScaleY(2021))
    console.log(tempScaleY(2021) - tempScaleY(2020))

    setTransform(tempTransform);
    setTransformedScaleY(() => tempScaleY);
  };

  const scrollToYear = (year, scale) => {
    let refLineBb = refLineEl.current.getBoundingClientRect();
    let scaledYear = scale ? scale(year) : transformedScaleY(year);
    let scrollY = scaledYear - refLineBb.top;
    // console.log(scaleY(birthYear));
    window.scrollTo(0, scrollY);
  };

  useEffect(() => {
    setEventsNested(eventsNested)
    // .then(() => {
    //   if (eventsNested[0]) {
    //     console.log(eventsNested[0].y)
    //     console.log(eventsNested[1].y)
    //     console.log('>>', eventsNested[1].y - eventsNested[0].y)
    //   }
    // })

  }, [transformedScaleY]);

  useEffect(() => {
    Promise.all([
      d3.csv(eventsData),
      d3.csv(lifeData),
      d3.csv(celebsData),
    ]).then((files) => {
      console.log("fileloaded");
      let events = files[0];
      let life = files[1];
      let celebrities = files[2];

      let eventsNestedTemp = preprocessData(events, celebrities);
      setEventsNested(eventsNestedTemp)
        .then(() => scrollToYear(birthYear));
    });
  }, []);

  return (
    <>
      <RefLine ref={refLineEl}></RefLine>
      <Container style={{ height: `${maxContainerHeight}px` }}>
        <Banner>
          <h1 style={{ marginBottom: "0" }}>
            <div style={{ fontSize: "21px" }}>โลกในมุมมอง</div>
            <div style={{ fontSize: "28px" }}>
              เด็กสมัย <u>{Utils.typeYear(birthYear, yearMode)}</u>
            </div>
          </h1>
          <p style={{ marginBottom: Theme.spacing.x1 }}>
            (ปัจจุบันอายุ {new Date().getFullYear() - birthYear} ปี)
          </p>
          <Button onClick={() => setOpenYearChange(true)}>เปลี่ยนปีเกิด</Button>
        </Banner>
        {eventsNested.map((eventGroup, i) => (
          <YearGroup
            year={eventGroup.year}
            data={eventGroup}
            yearMode={yearMode}
            birthYear={birthYear}
            y={eventGroup.y}
            onDialogOpen={openDialog}
            maxDisplay={transform.k}
            smoothTransition={!isNormalizingTransform}
            key={`item${i}`}
            onCollapsedClick={(e) => zoom(1, e.pageY)}
          />
        ))}
        <EventDialog
          open={isDialogOpen}
          setOpen={setDialogOpen}
          data={dialogData}
          title={dialogData.type == "birthyear" ? dialogData.name : dialogData.event}
          year={dialogData.year}
          yearMode={yearMode}
          birthYear={birthYear}
          image={dialogData.image}
          type={dialogData.type}
        />
        <ZoomControls>
          <Button onClick={() => zoom(1)}>+</Button>
          <Button onClick={() => zoom(-1)}>-</Button>
        </ZoomControls>
      </Container>
      <Dialog open={openYearChange} setOpen={setOpenYearChange}>
        <h2>เปลี่ยนปีเกิด</h2>
        <YearSelector onSubmit={handleYearChange} yearMode={yearMode} />
      </Dialog>
    </>
  );
}

export default Timeline;
