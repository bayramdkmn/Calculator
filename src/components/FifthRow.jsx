import React from "react";
import "../css/Numbers.css";
import "../css/Rows.css";
import { calculate } from "./process";

function FifthRow({
  handleNumberClick,
  handleOperation,
  stateProps,
  clickProps,
  calculate,
  setDisplay,
  setFirstValue,
  setOperation,
  operation,
  firstValue,
  display,
}) {
  return (
    <div className="Row">
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
  );
}

export default FifthRow;
