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

import { usePinch, useDrag } from 'react-use-gesture'

const TimelineContainer = styled(Container)`

  color: ${({ isBorn }) => (isBorn ? "#333" : "#fff")};;
  transition: 0.5s all;

  background-color: #DED8C9;

  &::before {
    content: " ";
    background-color: ${({ isBorn }) => (isBorn ? "#DED8C9" : "#161514")};
    color: ${({ isBorn }) => (isBorn ? "#333" : "#fff")};
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
    background: 
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
      );`}
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
  color: #333;

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

const RefLineContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 50vh;
  z-index: 100;
`;

const RefLine = styled.div`
  width: 100%;
  height: 4px;
  background-color: #f005;
  position: fixed;
  top: 50vh;
`;

const AgeBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${Theme.spacing.x1 * 9}px;
  height: ${Theme.spacing.x1 * 5}px;
  white-space: nowrap;
  top: 0;
  left: ${Theme.spacing.x2}px;
  /* padding: 4px 8px; */
  background-color: ${({ isBorn }) => (isBorn ? "#e4dfd3" : "#2c2b28")};
  color: ${({ isBorn }) => (isBorn ? "#333" : "#fff")};
  border: ${Theme.spacing.xs}px solid #f005;
  border-radius: ${Theme.spacing.x1 * 50}px;
  /* border-radius: 50%; */
  transform: translateY(-50%);
  transition: 0.5s all;

  /* width: 50px; */
`;

const Age = styled.div`
  font-weight: bold;
  font-size: ${20 * 1.25}px;
  margin-top: -4px;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: ${Theme.spacing.x2 + Theme.spacing.x1 * 4.5}px;
  height: 100%;
  width: 1px;

  background-color: ${({ isBorn }) => (isBorn ? "#333" : "#fff")};
`

const zoomExtent = [Config.minZoom, Config.minZoom + Config.maxZoomSteps * Config.zoomStep];

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

  const [yearAtRefLine, setYearAtRefLine] = useState(0);

  const [lastDy, setLastDy] = useState(null);

  const scrollRange = useMemo(() => {
    let x = [
      transformedScaleY(yearStartDisplay),
      transformedScaleY(yearEndDisplay),
    ];
    return x;
  }, [transformedScaleY]);

  const [currentScrollListener, setCurrentScrollListener] = useState(null);

  const refLineEl = useRef(null);
  const timelineRef = useRef(null);

  // useDrag((state) => {
  //   console.log(state)
  // }, {
  //   timelineRef,
  //   eventOptions: { passive: false }
  // });

  const pinchBind = usePinch(
    (state) => {
      console.log(state)
    },
    { domTarget: timelineRef, eventOptions: { passive: false } }
  )

  // useEffect(pinchBind, [pinchBind])
  

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

    let yearList = eventsNestedTemp.map(g => g.year);
    for (let yr = yearStartDisplay; yr <= yearEndDisplay; yr++) {
      if (!yearList.includes(yr)) {
        eventsNestedTemp.push({
          year: yr,
          events: []
        })
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
      let refLineBb = refLineEl.current
        ? refLineEl.current.getBoundingClientRect()
        : 0;
      let offsetY = scrollTop + refLineBb.top;
      setYearAtRefLine(Math.floor(transformedScaleY.invert(offsetY)));
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
      let refLineBb = refLineEl.current
        ? refLineEl.current.getBoundingClientRect()
        : 0;
      zoomCenterY = scrollTop + refLineBb.top;
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

  const scrollToYear = (year, scale) => {
    let refLineBb = refLineEl.current.getBoundingClientRect();
    let scaledYear = scale ? scale(year) : transformedScaleY(year);
    let scrollY = scaledYear - refLineBb.top;
    window.scrollTo(0, scrollY);
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

  // const onTouchMove = (e) => {
  //   if (e.touches.length > 1) {
  //     e.preventDefault();
  //     e.nativeEvent.stopImmediatePropagation();

  //     if (lastDy === null) {
  //       setLastDy(e.touches[1].pageY - e.touches[0].pageY);
  //       return;
  //     }

  //     let dy = e.touches[1].pageY - e.touches[0].pageY;
  //     let yCenter = (e.touches[1].pageY + e.touches[0].pageY) / 2;

  //     console.log(dy / lastDy - 1, yCenter);
  //     zoom(dy / lastDy - 1, yCenter);
  //     setLastDy(dy);
  //   }
  // };

  // const onTouchEnd = (e) => {
  //   if (e.touches.length > 1) {
  //     // isZooming = true;
  //     e.preventDefault();
  //     e.nativeEvent.stopImmediatePropagation();
  //     setLastDy(null);
  //   }
  // };

  useEffect(() => {
    console.log('!!!!')
    document.addEventListener('gesturestart', (e) => e.preventDefault())
    document.addEventListener('gesturechange', (e) => e.preventDefault())
  }, [])

  return (
    <>
      <RefLineContainer>
        <RefLine ref={refLineEl}></RefLine>
        <Container style={{ position: "relative" }}>
          <AgeBox isBorn={yearAtRefLine >= birthYear}>
            {yearAtRefLine > birthYear ? (
              <div style={{textAlign: 'center'}}>
                <small>อายุ</small><Age>{yearAtRefLine - birthYear} ปี</Age>
              </div>
            ) : yearAtRefLine < birthYear ? (
              <div style={{textAlign: 'center'}}>
                <small>ก่อนเกิด</small><Age>{birthYear - yearAtRefLine} ปี</Age>
              </div>
            ) : (
              `ปีแรกเกิด`
            )}
          </AgeBox>
        </Container>
      </RefLineContainer>
      <TimelineContainer
        isBorn={yearAtRefLine >= birthYear}
        style={{ 
          height: `${maxContainerHeight}px`,
          position: 'relative' 
        }}
        ref={timelineRef}
      >
        <TimelineLine isBorn={yearAtRefLine >= birthYear} />
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
            isBorn={yearAtRefLine >= birthYear}
            birthYear={birthYear}
            y={eventGroup.y}
            onDialogOpen={openDialog}
            zoomLevel={transform.k}
            smoothTransition={!isNormalizingTransform}
            key={`item${i}`}
            onCollapsedClick={(e) => zoom(Config.zoomStep, e.pageY)}
          />
        ))}
        <EventDialog
          open={isDialogOpen}
          setOpen={setDialogOpen}
          data={dialogData}
          title={
            dialogData.type == "birthyear" ? dialogData.name : dialogData.event
          }
          year={dialogData.year}
          yearMode={yearMode}
          birthYear={birthYear}
          image={dialogData.image}
          type={dialogData.type}
        />
        <ZoomControls>
          <Button onClick={() => zoom(Config.zoomStep)}>+</Button>
          <Button onClick={() => zoom(-Config.zoomStep)}>-</Button>
        </ZoomControls>
      </TimelineContainer>
      <Dialog open={openYearChange} setOpen={setOpenYearChange}>
        <h2>เปลี่ยนปีเกิด</h2>
        <YearSelector onSubmit={handleYearChange} yearMode={yearMode} />
      </Dialog>
    </>
  );
}

export default Timeline;
