// import logo from './logo.svg';
import { useState } from "react";
import styled from "styled-components";
import FullScreenPage from "../components/FullScreenPage";
import Container from "../components/Container";
import Select from "../components/Select";
import Button from "../components/Button";
import YearSelector from "../components/YearSelector";

import Config, { Utils } from "../config/Config";
import Theme from "../config/Theme";

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 0;
  margin-bottom: ${Theme.spacing.x2}px;
`;

function Home({ onProceed, yearMode }) {
  let yearRange = [];
  const [selectedYear, setSelectedYear] = useState(-1);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setSelectedYear(+e.target.value);
  };

  const handleProceed = () => {
    if (selectedYear > 0) onProceed(selectedYear);
    else setErrorMsg("กรุณาเลือกปีเกิด");
  };

  for (let i = Config.yearRangeMin; i <= Config.yearRangeMax; i++) {
    yearRange.push(i);
  }

  return (
    <FullScreenPage>
      <Container
        fillHeight
        style={{ display: "flex", alignItems: "center" }}
        padding={Theme.spacing.x4}
      >
        <div style={{ marginBottom: "80px" }}>
          <Title>
            เด็กสมัย<u>ไหน</u>?
          </Title>
          <p>
            เมื่อเกิดคนละปี ก็โตมาในสภาพสังคมคนละแบบ
            ชวนคุณกลับไปลองดูว่าเด็กสมัยคุณเติบโตผ่านอะไรมา และเมื่อเทียบกันแล้ว
            คนอื่นโตมาเหมือนหรือต่างกับคุณยังไงบ้าง
          </p>
          <p>คุณเกิดปี</p>
          <YearSelector onSubmit={onProceed} yearMode={yearMode} />
          {/* <Select onChange={handleChange}>
            <option>เลือกปีเกิด</option>
            {yearRange.reverse().map((y) => (
              <>
                <option key={y} value={y}>
                  {Utils.typeYear(y, yearMode, true)}
                </option>
              </>
            ))}
          </Select>
          {errorMsg}
          <Button className="mt-2" block onClick={handleProceed}>
            ไปย้อนดูชีวิตของคุณกัน
          </Button> */}
        </div>
      </Container>
    </FullScreenPage>
  );
}

export default Home;
