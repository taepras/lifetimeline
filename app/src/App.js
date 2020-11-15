// import logo from './logo.svg';
import { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import "./App.css";

import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Timeline from "./pages/Timeline";
import MenuBar from "./components/MenuBar";
import Dialog from "./components/Dialog";

function App() {
  const [appMode, setAppMode] = useState("timeline");
  const [yearMode, setYearMode] = useState("ad");
  const [birthYear, setBirthYear] = useState(1995);
  const [isTransitioning, setTransitioning] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);

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
    <div className="App">
      <GlobalStyle />

      {appMode == "home" && (
        <Home yearMode={yearMode} onProceed={startTimeline} />
      )}
      {appMode == "timeline" && (
        <Timeline
          yearMode={yearMode}
          birthYear={birthYear}
          onYearChange={startTimeline}
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
    </div>
  );
}

export default App;
