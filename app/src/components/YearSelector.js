import { useState } from "react";
import styled from "styled-components";
import Config, { Utils } from "../config/Config";
import Button from "./Button";
import Select from "./Select";

function YearSelector({
  onSubmit = (year) => {},
  yearMode,
  yearRangeMin = Config.yearRangeMin,
  yearRangeMax = Config.yearRangeMax,
  buttonLabel,
}) {
  let yearRange = [];
  const [selectedYear, setSelectedYear] = useState(-1);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setSelectedYear(+e.target.value);
  };

  const handleProceed = () => {
    if (selectedYear > 0) onSubmit(selectedYear);
    else setErrorMsg("กรุณาเลือกปีเกิด");
  };

  for (let i = yearRangeMin; i <= yearRangeMax; i++) {
    yearRange.push(i);
  }

  return (
    <>
      <Select onChange={handleChange}>
        <option>เลือกปีเกิด</option>
        {yearRange.reverse().map((y, i) => (
          <option key={`select-${y}`} value={y}>
            {Utils.typeYear(y, yearMode, true)} {y in Config.generations && `(${Config.generations[y]})`}
          </option>
        ))}
      </Select>
      {errorMsg}
      <Button className="mt-1" block onClick={handleProceed}>
        {buttonLabel || "ไปย้อนดูชีวิตของคุณกัน"}
      </Button>
    </>
  );
}

export default YearSelector;
