// import logo from './logo.svg';
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import FullScreenPage from "../components/FullScreenPage";
import Container from "../components/Container";
import Select from "../components/Select";
import CenterBox from "../components/CenterBox";

import Config, { Utils } from "../config/Config";
import Theme from "../config/Theme";

const blinkDelay = 3;
const blinkDuration = 2;

const IntroPage = styled(FullScreenPage)`
  color: #fff;
  text-align: center;

  pointer-events: none;
  transition: 1s opacity;
  z-index: 1000;
  ${({ blink }) => !blink && `opacity: 0;`}
`;

const blinkTop = keyframes`
  0%   { transform: translateY(0%); }
  20%  { transform: translateY(-50%); }
  40%  { transform: translateY(-10%); }
  100% { transform: translateY(-100%); }
`;

const blinkBottom = keyframes`
  0%   { transform: translateY(0%); }
  20%  { transform: translateY(50%); }
  40%  { transform: translateY(10%); }
  100% { transform: translateY(100%); }
`;

const blinkText = keyframes`
  0%   { opacity: 1; }
  100% { opacity: 0; }
`;

const IntroText = styled(CenterBox)`
  color: #fff;

  animation-name: ${({ blink }) => (blink ? blinkText : "none")};
  animation-delay: ${blinkDelay}s;
  animation-duration: ${blinkDuration}s;
  animation-fill-mode: forwards;
  transition: 0.3s all;

  * {
    margin: 0;
    margin-bottom: ${Theme.spacing.x1}px;
  }
`;

const EyelidTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60%;
  z-index: -1;
  background: linear-gradient(to bottom, #000f 90%, #0000 100%);

  animation-name: ${({ blink }) => (blink ? blinkTop : "none")};
  animation-delay: ${blinkDelay}s;
  animation-duration: ${blinkDuration}s;
  animation-fill-mode: forwards;
  transition: 0.3s all;
`;

const EyelidBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60%;
  z-index: -1;
  background: linear-gradient(to top, #000f 90%, #0000 100%);

  animation-name: ${({ blink }) => (blink ? blinkBottom : "none")};
  animation-delay: ${blinkDelay}s;
  animation-duration: ${blinkDuration}s;
  animation-fill-mode: forwards;
  transition: 0.3s all;
`;

function Intro({
  birthYear = 0,
  yearMode = "ad",
  blink = false,
  onPageChange = () => {},
}) {
  const yearRange = [];
  const [isBlinking, setBlinking] = useState(false);

  useEffect(() => {
    console.log("blink check", blink);
    if (blink) {
      console.log("blink started");
      setBlinking(true);
      setTimeout(onPageChange, (blinkDelay / 2) * 1000);
      setTimeout(() => setBlinking(false), (blinkDelay + blinkDuration) * 1000);
    }
  }, [blink]);

  return (
    <IntroPage z={100} blink={isBlinking}>
      <EyelidTop blink={blink} />
      <EyelidBottom blink={blink} />
      <IntroText fillHeight blink={blink}>
        <p>นี่คือโลกในมุมมองของ</p>
        <h1>
          เด็กสมัย <u>{Utils.typeYear(birthYear, yearMode)}</u>
        </h1>
      </IntroText>
    </IntroPage>
  );
}

export default Intro;
