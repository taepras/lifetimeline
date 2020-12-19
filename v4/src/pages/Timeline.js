import { useEffect, useState, useRef, useMemo } from "react";
import styled from "styled-components";
import Container from "../components/Container";
import Button from "../components/Button";
import EventBubble from "../components/EventBubble";
import EventDialog from "../components/EventDialog";
import YearSelector from "../components/YearSelector";
import Dialog from "../components/Dialog";
import YearGroup from "../components/YearGroup";
import TimelineContent from "./TimelineContent";

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

const Banner = styled.div`
  position: fixed;
  top: 0;
  /* right: ${Theme.spacing.x2}px; */
  padding: ${Theme.spacing.x2}px;

  text-align: right;
  background: #ece8e3;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 0px 0px 8px 8px;
  z-index: 100;
  color: #333;

  /* right: calc(
    max(
      (100vw - ${Theme.containerMaxWidth}px) / 2, 
      0px) + ${Theme.spacing.x2}px); */

  right: max(
    ${Theme.spacing.x2}px,
    (100vw - ${Theme.containerMaxWidth}px) / 2 - 120px
  );

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
  pointer-events: none;
`;

const AgeBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${Theme.spacing.x1 * 9}px;
  height: ${Theme.spacing.x1 * 4}px;
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

  transition: 0.5s all, 0.2s transform, 0.2s box-shadow;

  cursor: pointer;

  &:hover {
    transform: translateY(calc(-50% - 2px));
    box-shadow: 0px 2px 4px rgba(81, 17, 21, 0.5);
  }
  /* width: 50px; */
`;

const Age = styled.div`
  font-weight: bold;
  font-size: ${20 * 1.25}px;
  margin-top: -4px;
`;

const AgeInfo = styled.div`
  position: absolute;
  /* top: -100%; */
  top: -28px;
  height: 24px;
  padding: 0 8px;
  background-color: ${({ isBorn }) => (isBorn ? "#DDD7C8" : "#161514")};
  border-radius: 4px;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: ${Theme.spacing.x2 + Theme.spacing.x1 * 4.5}px;
  height: 100%;
  width: 1px;

  background-color: ${({ isBorn }) => (isBorn ? "#333" : "#fff")};
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

function Timeline({ 
  birthYear, 
  setBirthYear = (year) =>{}, 
  yearMode, 
  onYearChange = (year) => {},
  onScroll = (event) => {},
  onTouchStart = (event) => {},
  onWheel = (event) => {}
}) {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const [dialogData, setDialogData] = useState({});
  const [openYearChange, setOpenYearChange] = useState(false);

  const [yearAtRefLine, setYearAtRefLine] = useState(0);

  const refLineEl = useRef(null);

  const handleYearChange = (year) => {
    setOpenYearChange(false);
    setDialogOpen(false);
    onYearChange(year);
    // scrollToYear(year);
  };

  useEffect(() => {
    handleYearChange(birthYear);
  }, [birthYear])

  const openDialog = (event) => {
    setDialogData(event);
    setDialogOpen(true);
  };

  const updateScrollPosition = (e) => {
    setYearAtRefLine(e.currentYear);
    onScroll(e);
  };

  const refLineYOffset = useMemo(() => {
    return window.innerHeight / 2;
  }, []) 

  return (
    <>
      <RefLineContainer>
        <RefLine ref={refLineEl}></RefLine>
        <Container style={{ position: "relative" }}>
          <AgeBox isBorn={yearAtRefLine >= birthYear}>
            {yearAtRefLine > birthYear ? (
              <>
                <AgeInfo isBorn={yearAtRefLine >= birthYear}>อายุ</AgeInfo>
                <Age>
                  {yearAtRefLine - birthYear}{" "}
                  {yearAtRefLine - birthYear > 10 ? "ปี" : "ขวบ"}
                </Age>
              </>
            ) : yearAtRefLine < birthYear ? (
              <>
                <AgeInfo isBorn={yearAtRefLine >= birthYear}>ก่อนเกิด</AgeInfo>
                <Age>{birthYear - yearAtRefLine} ปี</Age>
              </>
            ) : (
              <>ปีแรกเกิด</>
            )}
          </AgeBox>
        </Container>
      </RefLineContainer>
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
      <TimelineContent
        birthYear={birthYear}
        yearMode={yearMode}
        refLineYOffset={refLineYOffset}
        openDialog={openDialog}
        onScroll={updateScrollPosition}
        onWheel={onWheel}
        onTouchStart={onTouchStart}
        // onYearChange={() => setOpenYearChange(true)}
      />
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
        onBirthYearChange={onYearChange}
      />

      <Dialog open={openYearChange} setOpen={setOpenYearChange}>
        <h2>เปลี่ยนปีเกิด</h2>
        <YearSelector onSubmit={setBirthYear} yearMode={yearMode} />
      </Dialog>

      
    </>
  );
}

export default Timeline;
