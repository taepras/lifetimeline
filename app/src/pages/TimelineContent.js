import { useEffect, useState, useRef, useMemo } from "react";
import styled from "styled-components";
import Container from "../components/Container";
import Button from "../components/Button";
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

import { usePinch, useDrag } from "react-use-gesture";

const TimelineContainer = styled(Container)`
  color: #333; //${({ isBorn }) => (isBorn ? "#333" : "#fff")};;
  transition: 0.5s all;

  background-color: #ded8c9;

  &::before {
    content: " ";
    background-color: #ded8c9; //${({ isBorn }) =>
      isBorn ? "#DED8C9" : "#161514"};
    color: #333; //${({ isBorn }) => (isBorn ? "#333" : "#fff")};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 0;
    transition: 0.5s all;
  }

  &::after {
    content: " ";
    background: radial-gradient(
      100% 60% at 50% 45%,
      rgba(85, 80, 72, 0) 30%,
      rgba(85, 80, 72, 0.57) 85%,
      rgba(85, 80, 72, 0.75) 100%
    );
    /* background: 
    ${({ isBorn }) =>
      isBorn
        ? `radial-gradient(
        100% 60% at 50% 45%, 
        rgba(85, 80, 72, 0) 30%, 
        rgba(85, 80, 72, 0.57) 85%, 
        rgba(85, 80, 72, 0.75) 100%
      );`
        : `radial-gradient(
        100% 60% at 50% 45%, 
        rgba(0, 0, 0, 0) 30%, 
        rgba(0, 0, 0, 0.57) 85%, 
        rgba(0, 0, 0, 0.75) 100%
      );`} */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 0;

    transition: 0.5s all;
  }
`;

const ZoomControls = styled.div`
  position: fixed;
  /* right: ${Theme.spacing.x2}px; */
  right: max(${Theme.spacing.x2}px, (100vw - ${Theme.containerMaxWidth}px) / 2);
  bottom: 80px;
  display: flex;
  gap: 8px;
  flex-direction: column;
  z-index: 110;

  ${Button} {
    font-size: 18px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    padding: 0;
    justify-content: center;
    align-items: center;
    background-color: #ece8e3;
    color: #333;
    /* border: 1px solid #DED8C9; */
  }
`;

const EndPrompt = styled.div`
  position: absolute;
  /* left: 100px; */
  width: calc(
    min(100vw, ${Theme.containerMaxWidth}px) - ${({ x }) => x}px -
      ${Theme.spacing.x1 * 6}px
  );
  background-color: #ece8e3;
  padding: ${Theme.spacing.x2}px;
  border-radius: ${Theme.spacing.xs}px;
  box-sizing: border-box;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const TimelineLine = styled.div`
  position: absolute;
  left: ${Theme.spacing.x2 + Theme.spacing.x1 * 5}px;
  height: 100%;
  width: 1px;

  background-color: #333; //${({ isBorn }) => (isBorn ? "#333" : "#fff")};
`;

const zoomExtent = [
  Config.minZoom,
  Config.minZoom + Config.maxZoomSteps * Config.zoomStep,
];

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

function TimelineContent({
  birthYear,
  yearMode,
  // onYearChange = (year) => {},
  openDialog = (event) => {},
  onScroll = (event) => {},
  onClick = (event) => {},
  onWheel = (event) => {},
  onTouchStart = (event) => {},
  setOpenYearChange = () => {},
  refLineYOffset = 0,
}) {
  // const [openYearChange, setOpenYearChange] = useState(false);
  const [eventsNested, _setEventsNested] = useStateWithPromise([]);

  const [transform, setTransform] = useStateWithPromise(d3.zoomIdentity);
  const [transformedScaleY, setTransformedScaleY] = useStateWithPromise(
    () => scaleY
  );
  // const transformedScaleY = useMemo(() => transform.rescaleY(scaleY), [transform]);
  // const [smoothTransition, setSmoothTransition] = useStateWithPromise(true);
  // const [isNormalizingTransform, setNormalizingTransform] = useStateWithPromise(
  //   false
  // );

  const [yearAtRefLine, setYearAtRefLine] = useState(0);

  const scrollRangeYear = useMemo(() => {
    return [birthYear - Config.yearsOffset, yearEndDisplay];
  }, [birthYear]);

  // const [lastDy, setLastDy] = useState(null);

  const scrollRange = useMemo(() => {
    let x = [
      transformedScaleY(scrollRangeYear[0]) - refLineYOffset,
      transformedScaleY(scrollRangeYear[1]) - refLineYOffset,
    ];
    return x;
  }, [transformedScaleY, scrollRangeYear]);

  const [currentScrollListener, setCurrentScrollListener] = useState(null);

  // const refLineEl = useRef(null);
  const timelineRef = useRef(null);

  const eventsNestedFiltered = useMemo(() => {
    return eventsNested.filter((e) => e.year >= birthYear);
  }, [eventsNested, birthYear]);

  const endPromptY = useMemo(() => {
    return transformedScaleY(Config.yearRangeMax + 1)
  }, [transformedScaleY]);

  // const pinchBind = usePinch(
  //   (state) => {
  //     console.log(state);
  //     let d = state.da[0];
  //     let delta = state.delta[0] + state.delta[1];
  //     const scrollOffset =
  //       document.body.scrollTop || document.documentElement.scrollTop;
  //     let c = state.origin[0] + scrollOffset;
  //     console.log(state.origin);
  //     zoom(delta / d, c);
  //   },
  //   {
  //     domTarget: timelineRef,
  //     // filterTaps: false,
  //     eventOptions: {
  //       passive: false,
  //       capture: true,
  //     },
  //   }
  // );

  // useEffect(pinchBind, [pinchBind])

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

    // for (let i in eventsNestedTemp) {
    //   let x = -1;
    //   for (let j in celebrities) {
    //     if (+celebrities[j].year == +eventsNestedTemp[i].year) {
    //       celebrities[j].type = "birthyear";
    //       eventsNestedTemp[i].events.push(celebrities[j]);
    //     }
    //   }
    // }

    let yearList = eventsNestedTemp.map((g) => g.year);
    for (let yr = Config.yearRangeMin; yr <= Config.yearRangeMax; yr++) {
      if (!yearList.includes(yr)) {
        eventsNestedTemp.push({
          year: yr,
          events: [],
        });
      }
    }

    eventsNestedTemp.sort((a, b) => a.year - b.year);
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

      // console.log(transformedScaleY.invert(scrollOffset))
      let scrollTop = document.documentElement.scrollTop;
      let offsetY = scrollTop + refLineYOffset;
      setYearAtRefLine(Math.floor(transformedScaleY.invert(offsetY)));
      onScroll({
        event: e,
        currentYear: Math.floor(transformedScaleY.invert(offsetY)),
      });
    };
    setCurrentScrollListener(() => handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: false });
  }, [scrollRange]);

  const setEventsNested = (newEventsNested) => {
    return new Promise((resolve) => {
      let eventsNestedTemp = clone(newEventsNested);
      eventsNestedTemp.forEach((e) => {
        e.y = transformedScaleY(e.year);
      });
      _setEventsNested(eventsNestedTemp).then(resolve);
    });
  };

  // const openDialog = (event) => {
  //   setDialogData(event);
  //   setDialogOpen(true);
  // };

  const zoomAt = (t, y, k) => {
    let yOnCurrentZoom = t.invert([0, y])[1];
    let tNew = t
      .translate(0, yOnCurrentZoom)
      .scale(k)
      .translate(0, -yOnCurrentZoom);
    return tNew;
  };

  const zoom = (dz, centerY = null) => {
    console.log(dz, centerY);

    let tempZoomLevel = Utils.Clamp(
      transform.k + dz,
      zoomExtent[0],
      zoomExtent[1]
    );
    // let k = Utils.Clamp(transform.k * dy / lastDy, 1, 5);
    let zoomCenterY = 0;
    if (centerY === null) {
      let scrollTop = document.documentElement.scrollTop;
      zoomCenterY = scrollTop + refLineYOffset;
    } else {
      zoomCenterY = centerY;
    }

    let tempTransform = zoomAt(
      transform,
      zoomCenterY,
      tempZoomLevel / transform.k
    );
    let tempScaleY = tempTransform.rescaleY(scaleY);

    // console.log('t', tempTransform);
    setTransform(tempTransform);
    setTransformedScaleY(() => tempScaleY);
  };

  const resetView = () => {
    let tempTransform = d3.zoomIdentity;
    let tempScaleY = tempTransform.rescaleY(scaleY);

    Promise.all([
      setTransform(tempTransform),
      setTransformedScaleY(() => tempScaleY),
    ]).then(() => {
      scrollToYear(birthYear);
    });
  };

  const scrollToYear = (year, scale) => {
    let scaledYear = scale ? scale(year) : transformedScaleY(year);
    let scrollY = scaledYear - refLineYOffset + 32;
    // console.log(scaledYear, refLineYOffset);
    window.scrollTo({ top: scrollY, behavior: "smooth" });
  };

  useEffect(() => {
    setEventsNested(eventsNested);
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
      setEventsNested(eventsNestedTemp).then(() => scrollToYear(birthYear));
    });
  }, []);

  useEffect(() => {
    scrollToYear(birthYear);
  }, [birthYear]);

  return (
    <TimelineContainer
      isBorn={yearAtRefLine >= birthYear}
      style={{
        height: `${maxContainerHeight}px`,
        position: "relative",
      }}
      ref={timelineRef}
      onClick={onClick}
      onTouchStart={onTouchStart}
      onWheel={onWheel}
    >
      <TimelineLine isBorn={yearAtRefLine >= birthYear} />
      {eventsNestedFiltered.map((eventGroup, i) => (
        <YearGroup
          year={eventGroup.year}
          data={eventGroup}
          yearMode={yearMode}
          isBorn={yearAtRefLine >= birthYear}
          birthYear={birthYear}
          y={eventGroup.y}
          onDialogOpen={openDialog}
          zoomLevel={transform.k}
          // smoothTransition={!isNormalizingTransform}
          key={`item${i}`}
          onCollapsedClick={(e) => zoom(Config.zoomStep, e.pageY)}
        />
      ))}

      <EndPrompt 
        style={{ transform: `translate(${Theme.bubbleXOffset}px, ${endPromptY}px)` }}
        x={Theme.bubbleXOffset}>
        <p style={{ marginBottom: Theme.spacing.x1 }}>ลองดูของคนอื่น</p>
        <Button onClick={() => setOpenYearChange(true)}>เปลี่ยนปีเกิด</Button>
      </EndPrompt>

      <ZoomControls>
        <Button onClick={() => zoom(Config.zoomStep)}>
          <i className="fa fa-search-plus" />
        </Button>
        <Button onClick={() => zoom(-Config.zoomStep)}>
          <i className="fa fa-search-minus" />
        </Button>
        <Button onClick={resetView}>
          <i className="fa fa-undo-alt" />
        </Button>
      </ZoomControls>
    </TimelineContainer>
  );
}

export default TimelineContent;
