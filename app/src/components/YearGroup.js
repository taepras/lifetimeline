import { max } from "d3";
import styled from "styled-components";
import Config, { Utils } from "../config/Config";
import EventBubble from "./EventBubble";

const StyledYearGroup = styled.div`
  position: absolute;
  top: ${({ y }) => y}px;

  /* transition: top 0.2s; */
`;

function YearGroup({
  year,
  y,
  yearMode,
  birthYear,
  data,
  maxDisplay = 1,
  className,
  children,
  onDialogOpen = (event) => {}
}) {
  // console.log("events", data.year, data);
  const getBubbleYPosition = (index) =>
    index < maxDisplay
      ? index * Config.spacePerEvent
      : (maxDisplay - 1) * Config.spacePerEvent + Config.yOffsetCollapsedEvents;

  const getBubbleXPosition = (index) =>
    index < maxDisplay
      ? 0
      : Config.xOffsetCollapsedEvents +
        (index - maxDisplay) * Config.xSpacePerCollapsedEvent;

  return (
    <StyledYearGroup y={y}>
      {Utils.typeYear(year, yearMode)} | {+year - +birthYear} ปี
      {data.events.map((event, index) => (
        <>
          <EventBubble
            y={getBubbleYPosition(index)}
            x={100 + getBubbleXPosition(index)}
            title={event.event}
            type={event.type}
            image={event.image}
            collapsed={index >= maxDisplay}
            z={10 - index}
            onClick={() => onDialogOpen(event)}
          />
        </>
      ))}
    </StyledYearGroup>
  );
}

export default YearGroup;
