import React, { useState } from "react";
import "../css/Numbers.css";
import LCD from "../components/LCD";
import { calculate } from "./process";
import { handleNumberClick, handleOperation } from "./operations";
import FirstRoww from "../components/FirstRoww";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";
import FourthRow from "./FourthRow";
import FifthRow from "./FifthRow";

function Numbers() {
  const [display, setDisplay] = useState("0");
  const [operation, setOperation] = useState("");
  const [firstValue, setFirstValue] = useState(null);

  const handleClear = () => {
    setDisplay("0");
    setOperation("");
    setFirstValue(null);
  };

  const stateProps = {
    display,
    setDisplay,
    operation,
    setOperation,
    firstValue,
    setFirstValue,
    calculate,
  };

  const clickProps = {
    display,
    setDisplay,
    operation,
    setOperation,
  };

  return (
    <div className="numbers-main">
      <div style={{ width: "100%" }}>
        <div className="screen">
          <LCD content={display} />
        </div>
      </div>
      <div className="row-div">
        <div className="row">
          <FirstRoww stateProps={stateProps} handleClear={handleClear} />
        </div>
        <div className="row">
          <SecondRow
            handleNumberClick={handleNumberClick}
            handleOperation={handleOperation}
            stateProps={stateProps}
            clickProps={clickProps}
          />
        </div>
        <div className="row">
          <ThirdRow
            handleNumberClick={handleNumberClick}
            handleOperation={handleOperation}
            stateProps={stateProps}
            clickProps={clickProps}
          />
        </div>
        <div className="row">
          <FourthRow
            handleNumberClick={handleNumberClick}
            handleOperation={handleOperation}
            stateProps={stateProps}
            clickProps={clickProps}
          />
        </div>
        <div className="row">
          <FifthRow
            handleNumberClick={handleNumberClick}
            handleOperation={handleOperation}
            stateProps={stateProps}
            clickProps={clickProps}
            calculate={calculate}
            setDisplay={setDisplay}
            setFirstValue={setFirstValue}
            setOperation={setOperation}
            operation={operation}
            firstValue={firstValue}
            display={display}
          />
        </div>
      </div>
    </div>
  );
}

export default Numbers;
