import styled from "styled-components";
import Theme from "../config/Theme";
import Button from "./Button";
import { lighten, darken } from "polished";
import { Utils } from "../config/Config";

const borderWidth = 4;

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

const FadeOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #0008;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 500;

  transition: 0.3s all;
  ${({ open }) =>
    !open &&
    `
    opacity: 0;
    pointer-events: none;
  `}
`;

const StyledEventDialog = styled.div`
  width: 320px;
  max-width: calc(100% - ${Theme.spacing.x2 * 2}px);
  /* align-items: center; */
  /* transform: translateY(-50%); */
  border-radius: 8px;
  background-color: ${({ eventType }) =>
    darken(0.1, handleColorType(eventType))};
  box-shadow: 0px 2px 4px
    ${({ eventType }) => darken(0.3, handleColorType(eventType))}44;
  color: #fff;
  position: relative;

  transition: 0.3s all;
  ${({ open }) =>
    !open &&
    `
    opacity: 0;
    transform: translateY(100px);
  `}
`;

const EventThumbnail = styled.div`
  width: 100%;
  height: 240px;

  border-radius: 8px;
  box-sizing: border-box;
  background-size: cover;
  background-position: center center;

  background-color: ${({ eventType }) =>
    lighten(0.2, handleColorType(eventType))};
  background-image: url(${({ image }) => image});
  border: ${borderWidth}px solid
    ${({ eventType }) => darken(0.1, handleColorType(eventType))};

  position: relative;
`;

const EventIcon = styled.div`
  position: absolute;
  right: -${borderWidth}px;
  bottom: -${borderWidth}px;
  /* width: 24px; */
  height: 24px;
  padding: 0 ${Theme.spacing.x1}px;

  background: ${({ eventType }) => darken(0.1, handleColorType(eventType))};
  border-radius: ${({ eventType }) =>
    eventType == "birthyear" ? "50%" : "8px 0px"};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EventDescription = styled.div`
  padding: ${Theme.spacing.x2}px;

  * {
    margin: 0;
    margin-bottom: ${Theme.spacing.x1}px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  h2 {
    line-height: 1.2;
  }
`;

const CloseButton = styled.button`
  border: none;
  color: #fff;
  display: flex;
  font-size: 24px;
  line-height: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 32px;
  height: 32px;
  right: 8px;
  top: 8px;

  z-index: 10;
  background: rgba(51, 51, 51, 0.5);
  border-radius: 16px;
`;

function EventDialog({
  open,
  setOpen = (open) => {},
  children,
  title,
  data,
  type = "world",
  year,
  yearMode,
  birthYear,
  image,
  onClick = () => {},
  onClose = () => {},
}) {
  const getTypeLabel = (type) => {
    switch (type) {
      case "thailand":
        return "เหตุการณ์สำคัญไทย";
        break;
      case "world":
        return "เหตุการณ์สำคัญโลก";
        break;
      case "birthyear":
        return "ปีเกิดบุคคลสำคัญ";
        break;
    }
  };

  return (
    <FadeOverlay
      open={open}
      onClick={(e) => {
        if (e.currentTarget == e.target) setOpen(false);
      }}
    >
      <StyledEventDialog onClick={onClick} eventType={type} open={open}>
        <CloseButton
          onClose={onClose}
          onClick={(e) => {
            setOpen(false);
            onClose(e);
          }}
        >
          ×
        </CloseButton>
        <EventThumbnail
          style={{ backgroundImage: `url(/img/events/${image})` }}
          eventType={type}
        >
          <EventIcon eventType={type}>⬤ {getTypeLabel(data.type)}</EventIcon>
        </EventThumbnail>
        <EventDescription eventType={type}>
          <h2>{data.type == "birthyear" ? data.name : data.event}</h2>
          <p>
            {Utils.typeYear(year, yearMode, true)} {data.type == "birthyear" &&
              `- ปีนี้อายุ ${new Date().getFullYear() - year} ปี`}
            <br />
            {data.type != "birthyear" && (
              <>
                {year - birthYear > 0 &&
                  `ตอนที่เด็กสมัย ${birthYear} มีอายุ ${year - birthYear} ปี`}
                {year - birthYear < 0 &&
                  `ก่อนเด็กสมัย ${birthYear} เกิด ${year - birthYear} ปี`}
              </>
            )}
          </p>
          <Button className="mt-1" block outlined>
            อ่านเพิ่มเติมเกี่ยวกับเหตุการณ์นี้
          </Button>
        </EventDescription>
      </StyledEventDialog>
    </FadeOverlay>
  );
}

export default EventDialog;
