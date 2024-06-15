import React from "react";
import "../css/Numbers.css";
import "../css/Rows.css";

function ThirdRow({
  handleNumberClick,
  handleOperation,
  stateProps,
  clickProps,
}) {
  return (
    <div className="Row">
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
  );
}

export default ThirdRow;
