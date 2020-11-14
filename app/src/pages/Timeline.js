import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Container from "../components/Container";
import Button from "../components/Button";
import EventBubble from "../components/EventBubble";
import EventDialog from "../components/EventDialog";
import YearSelector from "../components/YearSelector";
import Dialog from "../components/Dialog";
import YearGroup from "../components/YearGroup";

import Config, { Utils } from "../config/Config";
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
`;

const RefLine = styled.div`
  width: 100%;
  height: 4px;
  background-color: #f005;
  position: fixed;
  top: 50vh;
`;

const scaleY = d3Scale
  .scaleLinear()
  .domain([
    Config.yearRangeMin - Config.yearsOffset,
    Config.yearRangeMax + Config.yearsOffset,
  ])
  .range([
    0,
    (Config.yearRangeMax - Config.yearRangeMin + 2 * Config.yearsOffset) *
      Config.yearHeight,
  ]);

function Timeline({ birthYear, yearMode, onYearChange = (year) => {} }) {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [dialogData, setDialogData] = useState({});
  const [openYearChange, setOpenYearChange] = useState(false);
  const [eventsNested, setEventsNested] = useState([]);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [transform, setTransform] = useState(d3.zoomIdentity);
  const [transformedScaleY, setTransformedScaleY] = useState(() => scaleY);

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

    return eventsNestedTemp;
  };

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
      setEventsNested(eventsNestedTemp);

      scrollToYear(birthYear);
      // let transformedScaleY = d3.zoomIdentity.rescaleY(scaleY);

      // console.log(eventsNested, eventsNestedTemp, events, celebrities);
    });
  }, []);

  const onUpdate = () => {
    let eventsNestedTemp = clone(eventsNested);
    eventsNestedTemp.forEach((x) => {
      x.y = scaleY(x.year);
    });
    setEventsNested(eventsNestedTemp);
  };

  const openDialog = (event) => {
    setDialogData(event);
    setDialogOpen(true);
  };

  const zoom = (dz) => {
    let tempZoomLevel = Utils.Clamp(zoomLevel + dz, 1, 5);
    // let k = Utils.Clamp(transform.k * dy / lastDy, 1, 5);
    let scrollTop = document.documentElement.scrollTop;
    let refLineBb = refLineEl.current.getBoundingClientRect();
    let dyScroll = (tempZoomLevel / transform.k - 1) * (scrollTop + refLineBb.top);
    let tempTransform = d3.zoomIdentity
      .translate(0, -dyScroll)
      .scale(tempZoomLevel);
    
    setTransform(tempTransform);

    // let newScrollY = scrollY - currentTransform.y;
    // currentTransform = d3.zoomIdentity.translate(0, 0).scale(currentTransform.k);
    // transformedScaleY = currentTransform.rescaleY(scaleY);
    // svg.style('height', transformedScaleY(2020 + YEARS_OFFSET) + 'px')
    // window.scrollTo(0, newScrollY);
  };

  const scrollToYear = (year, scale) => {
    let refLineBb = refLineEl.current.getBoundingClientRect();
    let scaledYear = scale ? scale(year) : transformedScaleY(year);
    let scrollY = scaledYear - refLineBb.top;
    // console.log(scaleY(birthYear));
    window.scrollTo(0, scrollY);
  };

  const normalizeTransform = async () => {
    let newScrollY = document.documentElement.scrollTop - transform.y;
    let tempTransform = d3.zoomIdentity.translate(0, 0).scale(transform.k);
    let tempTransformedScaleY = tempTransform.rescaleY(scaleY);

    setZoomLevel(transform.k);
    // FIXME is this too hacky?
    let x = await setTransformedScaleY(() => tempTransformedScaleY);
    
    // svg.style('height', transformedScaleY(2020 + YEARS_OFFSET) + 'px')
    window.scrollTo(0, newScrollY);
  };

  useEffect(() => {
    normalizeTransform();
  }, [transform]);
  

  useEffect(onUpdate, []);

  return (
    <>
      <RefLine ref={refLineEl}></RefLine>
      <Container>
        <Banner>
          <h1>
            <div style={{ fontSize: "21px" }}>โลกในมุมมอง</div>
            <div style={{ fontSize: "28px" }}>
              เด็กสมัย <u>{Utils.typeYear(birthYear, yearMode)}</u>
            </div>
          </h1>
          <Button onClick={() => setOpenYearChange(true)}>เปลี่ยนปีเกิด</Button>
        </Banner>
        {eventsNested.map((x) => (
          <YearGroup
            year={x.year}
            data={x}
            yearMode={yearMode}
            birthYear={birthYear}
            y={transformedScaleY(x.year)}
            onDialogOpen={openDialog}
            maxDisplay={zoomLevel}
          />
        ))}
        <EventDialog
          open={isDialogOpen}
          setOpen={setDialogOpen}
          title={dialogData.event}
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
