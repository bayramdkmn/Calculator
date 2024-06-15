import React, { useState } from "react";
import "../css/Numbers.css";
import LCD from "../components/LCD";
import { calculate } from "./process";
import { handleNumberClick, handleOperation } from "./operations";

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
          <div className="button-div"></div>
          <div
            className="button-div"
            onClick={() => handleOperation("mod", stateProps)}
          >
            mod
          </div>
          <div
            className="button-div"
            onClick={() => handleOperation("%", stateProps)}
          >
            %
          </div>
          <div className="button-div" onClick={handleClear}>
            C
          </div>
        </div>
        <div className="row">
          <div
            className="button-div"
            onClick={() => handleNumberClick("7", clickProps)}
          >
            7
          </div>
          <div
            className="button-div"
            onClick={() => handleNumberClick("8", clickProps)}
          >
            8
          </div>
          <div
            className="button-div"
            onClick={() => handleNumberClick("9", clickProps)}
          >
            9
          </div>
          <div
            className="button-div"
            onClick={() => handleOperation("/", stateProps)}
          >
            /
          </div>
        </div>
        <div className="row">
          <div
            className="button-div"
            onClick={() => handleNumberClick("4", clickProps)}
          >
            4
          </div>
          <div
            className="button-div"
            onClick={() => handleNumberClick("5", clickProps)}
          >
            5
          </div>
          <div
            className="button-div"
            onClick={() => handleNumberClick("6", clickProps)}
          >
            6
          </div>
          <div
            className="button-div"
            onClick={() => handleOperation("*", stateProps)}
          >
            *
          </div>
        </div>
        <div className="row">
          <div
            className="button-div"
            onClick={() => handleNumberClick("1", clickProps)}
          >
            1
          </div>
          <div
            className="button-div"
            onClick={() => handleNumberClick("2", clickProps)}
          >
            2
          </div>
          <div
            className="button-div"
            onClick={() => handleNumberClick("3", clickProps)}
          >
            3
          </div>
          <div
            className="button-div"
            onClick={() => handleOperation("-", stateProps)}
          >
            -
          </div>
        </div>
        <div className="row">
          <div
            className="button-div"
            onClick={() => handleNumberClick("0", clickProps)}
          >
            0
          </div>
          <div
            className="button-div"
            onClick={() => handleNumberClick(".", clickProps)}
          >
            .
          </div>
          <div
            className="button-div"
            onClick={() =>
              calculate(
                setDisplay,
                setFirstValue,
                setOperation,
                operation,
                firstValue,
                display
              )
            }
          >
            =
          </div>
          <div
            className="button-div"
            onClick={() => handleOperation("+", stateProps)}
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
