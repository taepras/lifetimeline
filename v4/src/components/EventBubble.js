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

const EventThumbnail = styled.div`
  width: 64px; //${({ collapsed }) => (collapsed ? "24px" : "64px")};
  flex: 0 0 64px; //${({ collapsed }) => (collapsed ? "24px" : "64px")};
  height: 64px; //${({ collapsed }) => (collapsed ? "24px" : "64px")};
  ${({ collapsed }) => collapsed && `transform: scale(0.375);`}
  border-radius: ${({ eventType }) =>
    eventType === "birthyear" ? "50%" : "8px"};
  box-sizing: border-box;
  background-color: ${({ eventType }) =>
    lighten(0.2, handleColorType(eventType))};
  /* background-image: url(${({ image }) => image}); */
  background-size: cover;
  background-position: center center;
  border: ${({ collapsed }) => borderWidth * (collapsed ? 2.5 : 1)}px solid
    ${({ eventType }) => handleColorType(eventType)};
  margin-right: ${Theme.spacing.x1 * 1.5}px;
  position: relative;
  box-shadow: 0px 2px 4px
    ${({ eventType }) => darken(0.3, handleColorType(eventType))}44;

  transition: 0.3s transform, 0.2s box-shadow;
`;

const StyledEvent = styled.div`
  display: flex;
  width: calc(
    min(100vw, ${Theme.containerMaxWidth}px) - ${({ x }) => x}px -
      ${Theme.spacing.x1 * 6}px
  );
  max-width: calc(
    min(100vw, ${Theme.containerMaxWidth}px) - ${({ x }) => x}px -
      ${Theme.spacing.x1 * 6}px
  );
  height: 64px;
  overflow: visible;
  align-items: center;
  transform: translateY(-50%);
  position: ${({ relative }) => (relative ? "relative" : "absolute")};
  z-index: ${({ z }) => z};

  transition: 0.3s all;

  &:hover {
    ${EventThumbnail} {
      /* transform: translateY(-2px); */
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }
  }
  /* pointer-events: none; */
`;

const EventIcon = styled.div`
  position: absolute;
  right: -${borderWidth}px;
  bottom: -${borderWidth}px;
  width: 24px;
  height: 24px;
  color: #fff;
  font-size: 16px;

  background: ${({ eventType }) => handleColorType(eventType)};
  border-radius: ${({ eventType }) =>
    eventType === "birthyear" ? "50%" : "8px 0px"};
  display: flex;
  justify-content: center;
  align-items: center;

  /* &::after {
    content: " ";
    display: block;
    width: 16px;
    height: 16px;
    background-color: #fff;
    border-radius: 50%;
  } */
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
  onCollapsedClick = () => {},
}) {
  return (
    <StyledEvent
      onClick={(e) => {
        if (!collapsed) onClick();
        else onCollapsedClick(e);
      }}
      relative={relative}
      style={{ transform: `translate(${x}px, ${y}px)` }}
      z={z}
      x={x}
    >
      <EventThumbnail
        eventType={type}
        style={{ backgroundImage: `url(/img/${type  == 'birthyear' ? 'celebs' : 'events'}/${image})` }}
        collapsed={collapsed}
      >
        {!collapsed && (
          <EventIcon eventType={type}>
            {type == "world" ? (
              <i className="fa fa-globe-americas"></i>
            ) : type == "birthyear" ? (
              <i className="fa fa-baby"></i>
            ) : (
              <img src="/img/icon_th.png" alt="thailand"/>
            )}
          </EventIcon>
        )}
      </EventThumbnail>
      {!collapsed && (
        <EventDescription eventType={type}>
          {type == "birthyear" && (
            <>
              <small style={{ opacity: 0.7 }}>ปีเกิด</small>
              <br />
            </>
          )}
          {title}
        </EventDescription>
      )}
    </StyledEvent>
  );
}

export default EventBubble;
