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
  z-index: 100;
`;

const MenuItem = styled.div`
  padding-bottom: ${Theme.spacing.x2}px;
  color: #fff;
  margin-right: ${Theme.spacing.x2}px;

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
`;

function MenuBar({
  mode = "home",
  yearMode,
  onYearModeChange = (mode) => {},
  onOpenAbout = () => {},
  onHome = () => {},
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
            <MenuItem onClick={onHome}>Home</MenuItem>
          </>
        )}
        <MenuItem>
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
            <MenuItem>สัญลักษณ์</MenuItem>
          </>
        )}
        <MenuItem onClick={onOpenAbout}>About</MenuItem>
      </Container>
    </StyledMenuBar>
  );
}

export default MenuBar;
