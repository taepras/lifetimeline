import { max } from "d3";
import styled from "styled-components";
import Config, { Utils } from "../config/Config";
import EventBubble from "./EventBubble";

const StyledYearGroup = styled.div`
  position: absolute;
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
  style,
  smoothTransition = true,
  onDialogOpen = (event) => {},
  onCollapsedClick = (event) => {},
}) {
  // console.log("events", data.year, data);
  const getBubbleYPosition = (index) =>
    index < maxDisplay
      ? index * Config.spacePerEvent
      : (maxDisplay - 1) * Config.spacePerEvent + Config.yOffsetCollapsedEvents;

  const getBubbleXPosition = (index) =>
    index < maxDisplay
      ? 0
      : (index - maxDisplay) * Config.xSpacePerCollapsedEvent;

  return (
    <StyledYearGroup
      style={{
        // ...style,
        transform: `translateY(${y}px)`,
        transition: smoothTransition ? "0.3s all" : "none",
      }}
    >
      {Utils.typeYear(year, yearMode)} | {+year - +birthYear} ปี
      {data.events.map((event, index) => (
        <EventBubble
          y={getBubbleYPosition(index)}
          x={100 + getBubbleXPosition(index)}
          title={event.type == "birthyear" ? event.name : event.event}
          type={event.type}
          image={event.image}
          collapsed={index >= maxDisplay}
          z={10 - index}
          key={year + "-" + index}
          onClick={() => onDialogOpen(event)}
          onCollapsedClick={(e)=> onCollapsedClick(e, event)}
        />
      ))}
    </StyledYearGroup>
  );
}

export default YearGroup;
