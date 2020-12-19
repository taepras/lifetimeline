// import logo from './logo.svg';
import { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import styled, { keyframes } from "styled-components";
import "./App.css";

import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Timeline from "./pages/Timeline";
import MenuBar from "./components/MenuBar";
import Dialog from "./components/Dialog";
import Theme from "./config/Theme";

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

const BottomDrawer = styled.div`
  position: fixed;
  /* bottom: -100%; */
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(${({open}) => open ? '0' : '100%'});
  height: 200px;
  width: 100%;
  max-width: ${Theme.containerMaxWidth}px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  z-index: 200;
  display: flex;
  gap: 64px;
  padding: 16px;
  background-color: #000c;
  color: #ffffff;
  box-sizing: border-box;

  transition: 0.3s all;
`;

const LegendIcon = styled.div`
  display: inline-flex;
  width: 24px;
  height: 24px;
  background-color: #888;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 4px;
  margin-right: 8px;
`

const Tutorial = styled.div`
  position: fixed;
  bottom: 200px;
  /* margin: auto; */
  left: 50%;
  z-index: 100;
  pointer-events: none;

  transition: 0.3s all;

  opacity: ${({show}) => show ? 1 : 0};
  /* right: 0; */
`

const verticalSwipe = keyframes`
  0%  { opacity: 0;  transform: translateY(-40px); }
  10% { opacity: 1;  transform: translateY(-40px); }
  15% { opacity: 1;  transform: translateY(-40px); }
  30% { opacity: 0.3;  transform: translateY( 40px); }
  40% { opacity: 0;  transform: translateY( 40px); }
  50% { opacity: 0;  transform: translateY( 40px); }
  60% { opacity: 1;  transform: translateY( 40px); }
  65% { opacity: 1;  transform: translateY( 40px); }
  80% { opacity: 0.3;  transform: translateY(-40px); }
  90% { opacity: 0;  transform: translateY(-40px); }
  100%{ opacity: 0;  transform: translateY(-40px); }
`;

const ScrollAnimation = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  margin-left: -16px;
  border-radius: 50%;
  background-color: #fffc;
  border: 2px solid #fffc;
  animation: ${verticalSwipe} 2.5s infinite;
`

function App() {
  const [appMode, setAppMode] = useState("home");
  const [yearMode, setYearMode] = useState("ad");
  const [birthYear, setBirthYear] = useState(1995);
  const [isTransitioning, setTransitioning] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openLegend, setOpenLegend] = useState(false);
  const [touchInitiated, setTouchInitiated] = useState(false);

  const startTimeline = (year) => {
    console.log("start transtiion");
    setBirthYear(year);
    setTransitioning(false);
    setTimeout(() => {
      setTransitioning(true);
    }, 100);
  };

  const onPageChange = (page) => {
    console.log("pagechange");
    setAppMode(page);
  };

  return (
    <div id="app" className="App">
      <GlobalStyle />

      {appMode == "home" && (
        <Home yearMode={yearMode} onProceed={startTimeline} />
      )}
      {appMode == "timeline" && (
        <Timeline
          yearMode={yearMode}
          birthYear={birthYear}
          setBirthYear={setBirthYear}
          onYearChange={startTimeline}
          openLegend={openLegend}
          onTouchStart={() => setTouchInitiated(true)}
          onWheel={() => setTouchInitiated(true)}
        />
      )}

      <Intro
        yearMode={yearMode}
        blink={isTransitioning}
        birthYear={birthYear}
        onPageChange={() => {
          onPageChange("timeline");
        }}
      />

      <MenuBar
        mode={appMode}
        yearMode={yearMode}
        onYearModeChange={(mode) => setYearMode(mode)}
        onHome={() => {
          onPageChange("home");
        }}
        onOpenAbout={() => setOpenAbout(true)}
        onToggleLegend={() => setOpenLegend(!openLegend)}
      />

      <Dialog open={openAbout} setOpen={setOpenAbout}>
        <p className="mb-0">About</p>
        <h2 className="mb-4">จาก "เด็กสมัยนี้"</h2>
        <p>
          เราเชื่อว่าการเปลี่ยนแปลงจะเกิดขึ้นได้ ส่วนหนึ่งเกิดจากการเข้าใจกัน
          และการเข้าใจกันจะเกิดขึ้นได้
          ส่วนหนึ่งคือการเข้าใจว่าแต่ละคนเติบโตมาในสภาพแวดล้อมที่แตกต่างกัน
          ถูกหล่อหลอมด้วยเหตุการณ์ต่างๆ ของยุคสมัยที่แตกต่างกัน
          เราเลยอยากหาวิธีเทียบชีวิตของเรากับชีวิตของคนอื่นๆ
        </p>
        <p className="mb-4">
          เราหวังว่าการแชร์สิ่งนี้ให้คนรอบตัวคุณ
          จะได้เริ่มบทสนทนาให้คุณและพวกเขาได้เข้าใจกันมากขึ้น
        </p>
        <p className="text-right">
          ธนวิชญ์ ประสงค์พงษ์ชัย - เด็กสมัย 1995
          <br />
          อลิษา ลิ้มไพบูลย์ - เด็กสมัย 1996
        </p>
        <p className="text-right">ติดต่อพูดคุยกันเพิ่มเติมได้ที่ _____</p>
      </Dialog>

      <Tutorial show={appMode == 'timeline' && !touchInitiated}>
        <ScrollAnimation/>
      </Tutorial>

      <BottomDrawer open={openLegend}>
        <div 
          style={{ fontWeight: 'bold', cursor: 'pointer' }}
          onClick={() => setOpenLegend(false)}>
          <i className="fa fa-chevron-down" /> สัญลักษณ์
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            gap: "16px",
          }}
        >
          <span>
            <LegendIcon
              style={{ backgroundColor: handleColorType("thailand") }}
            >
              <img src="/img/icon_th.png" alt="thailand"/>
            </LegendIcon>
            เหตุการณ์สำคัญไทย
          </span>
          <span>
            <LegendIcon
              style={{ backgroundColor: handleColorType("world") }}
            >
              <i className="fa fa-globe-americas" />
            </LegendIcon>
            เหตุการณ์สำคัญโลก
          </span>
          <span>
            <LegendIcon
              style={{ backgroundColor: handleColorType("birthyear") }}
            >
              <i className="fa fa-baby" />
            </LegendIcon>
            ปีเกิดบุคคลสำคัญ
          </span>
        </div>
      </BottomDrawer>
    </div>
  );
}

export default App;
