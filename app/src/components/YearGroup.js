import { max } from "d3";
import styled from "styled-components";
import Config, { Utils } from "../config/Config";
import Theme from "../config/Theme";
import EventBubble from "./EventBubble";

const StyledYearGroup = styled.div`
  position: absolute;
`;

const YearNumber = styled.div`
  position: absolute;
  top:32px;
  left: ${Theme.spacing.x1 * 4.5}px;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: ${Theme.spacing.xs}px;
  background-color: ${({ isBorn }) => (isBorn ? "#DED8C9" : "#161514")};
  transition: 0.5s all;
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
  isBorn,
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
      <YearNumber isBorn={isBorn}>
        {Utils.typeYear(year, yearMode)} 
      </YearNumber>
      {/* | {+year - +birthYear} ปี */}
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
