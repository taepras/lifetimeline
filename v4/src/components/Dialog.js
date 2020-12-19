import styled from "styled-components";
import Theme from "../config/Theme";
import Button from "./Button";
import { lighten, darken } from "polished";

const borderWidth = 4;

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
  width: calc(100% - ${Theme.spacing.x2 * 2}px);
  max-width: 480px;
  /* align-items: center; */
  /* transform: translateY(-50%); */
  border-radius: 8px;
  background-color: #ece8e3;
  box-shadow: 0px 2px 4px ${darken(0.3, '#ece8e3')};
  color: #222;
  position: relative;
  padding: ${Theme.spacing.x3}px;
  box-sizing: border-box;

  transition: 0.3s all;
  ${({ open }) =>
    !open &&
    `
    opacity: 0;
    transform: translateY(100px);
  `}

* {
    margin: 0;
    margin-bottom: ${Theme.spacing.x1}px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  h1, h2, h3, h4, h5, h6 {
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

function Dialog({
  open,
  setOpen = (open) => {},
  children,
  onClose = () => {},
}) {
  return (
    <FadeOverlay
      open={open}
      onClick={(e) => {
        if ((e.currentTarget == e.target)) setOpen(false);
      }}
    >
      <StyledEventDialog open={open}>
        <CloseButton
          onClose={onClose}
          onClick={(e) => {
            setOpen(false);
            onClose(e);
          }}
        >
          ×
        </CloseButton>
        {children}
      </StyledEventDialog>
    </FadeOverlay>
  );
}

export default Dialog;
