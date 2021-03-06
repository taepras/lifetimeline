import styled from "styled-components";
import Theme from "../config/Theme";
import Container from "./Container";

const StyledMenuBar = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(180deg, #38353100 0%, #383531ff 100%);
  z-index: 200;
`;

const MenuItem = styled.div`
  padding-bottom: ${Theme.spacing.x2}px;
  color: #fff;
  margin-right: ${Theme.spacing.x2}px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  a:link, a:visited {
    color: #fff;
  }

  a.active {
    opacity: 0.7;
    font-weight: bold;
    text-decoration: none;
  }

  &:hover {
    ${({toggle}) => !toggle && `text-decoration: underline;`}
  }
`;

function MenuBar({
  mode = "home",
  yearMode,
  onYearModeChange = (mode) => {},
  onOpenAbout = () => {},
  onHome = () => {},
  onToggleLegend = () => {}
}) {
  const handleYearMode = (e, mode) => {
    e.preventDefault();
    console.log('!!!!!')
    onYearModeChange(mode);
  };

  return (
    <StyledMenuBar>
      <Container fillHeight style={{ display: "flex", alignItems: "flex-end" }}>
        {mode != "home" && (
          <>
            <MenuItem onClick={onHome}><i className="fa fa-home" /></MenuItem>
          </>
        )}
        <MenuItem toggle>
          <a
            href="#"
            onClick={(e) => {
              handleYearMode(e, "be");
            }}
            className={yearMode == 'be' ? 'active' : ''}
          >
            พ.ศ.
          </a>{" "}
          |{" "}
          <a
            href="#"
            onClick={(e) => {
              handleYearMode(e, "ad");
            }}
            className={yearMode == 'ad' ? 'active' : ''}
          >
            ค.ศ.
          </a>
        </MenuItem>
        <div style={{ flexGrow: 1 }}></div>
        {mode != "home" && (
          <>
            <MenuItem>วิธีเล่น</MenuItem>
            <MenuItem onClick={onToggleLegend}>สัญลักษณ์</MenuItem>
          </>
        )}
        <MenuItem onClick={onOpenAbout}>About</MenuItem>
      </Container>
    </StyledMenuBar>
  );
}

export default MenuBar;
