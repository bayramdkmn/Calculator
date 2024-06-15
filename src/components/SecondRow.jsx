import React from "react";
import "../css/Numbers.css";
import "../css/Rows.css";

function SecondRow({
  handleNumberClick,
  handleOperation,
  stateProps,
  clickProps,
}) {
  return (
    <div className="Row">
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
  );
}

export default SecondRow;
