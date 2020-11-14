import styled from "styled-components";
import Theme from "../config/Theme";
import { lighten, darken } from "polished";

const borderWidth = 3;

const handleColorType = (type) => {
  switch (type) {
    case "thailand":
      return "#D89D3E";
    case "world":
      return "#6599A5";
    case "birthyear":
      return "#ac646a";
    default:
      return "#fff";
  }
};

const StyledEvent = styled.div`
  display: flex;
  width: 200px;
  max-width: 200px;
  align-items: center;
  transform: translateY(-50%);
  position: ${({ relative }) => (relative ? "relative" : "absolute")};
  z-index: ${({z}) => z};
`;

const EventThumbnail = styled.div`
  width: ${({ collapsed }) => (collapsed ? "24px" : "64px")};
  flex: 0 0 ${({ collapsed }) => (collapsed ? "24px" : "64px")};
  height: ${({ collapsed }) => (collapsed ? "24px" : "64px")};
  border-radius: ${({ eventType }) =>
    eventType == "birthyear" ? "50%" : "8px"};
  box-sizing: border-box;
  background-color: ${({ eventType }) =>
    lighten(0.2, handleColorType(eventType))};
  /* background-image: url(${({ image }) => image}); */
  background-size: cover;
  background-position: center center;
  border: ${borderWidth}px solid
    ${({ eventType }) => handleColorType(eventType)};
  margin-right: ${Theme.spacing.x1 * 1.5}px;
  position: relative;
  box-shadow: 0px 2px 4px
    ${({ eventType }) => darken(0.3, handleColorType(eventType))}44;
`;

const EventIcon = styled.div`
  position: absolute;
  right: -${borderWidth}px;
  bottom: -${borderWidth}px;
  width: 24px;
  height: 24px;

  background: ${({ eventType }) => handleColorType(eventType)};
  border-radius: ${({ eventType }) =>
    eventType == "birthyear" ? "50%" : "8px 0px"};
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: " ";
    display: block;
    width: 16px;
    height: 16px;
    background-color: #fff;
    border-radius: 50%;
  }
`;

const EventDescription = styled.div``;

function EventBubble({
  title,
  type = "world",
  image,
  onClick = () => {},
  x,
  y,
  z,
  relative,
  collapsed = false,
}) {
  return (
    <StyledEvent
      onClick={() => {
        if (!collapsed) onClick();
      }}
      relative={relative}
      style={{ left: x, top: y }}
      z={z}
    >
      <EventThumbnail
        eventType={type}
        style={{ backgroundImage: `url(/img/events/${image})` }}
        collapsed={collapsed}
      >
        {!collapsed && <EventIcon eventType={type}></EventIcon>}
      </EventThumbnail>
      {!collapsed && (
        <EventDescription eventType={type}>
          {type == "birthyear" && (
            <small style={{ opacity: 0.7 }}>
              ปีเกิด
              <br />
            </small>
          )}
          {title}
        </EventDescription>
      )}
    </StyledEvent>
  );
}

export default EventBubble;
