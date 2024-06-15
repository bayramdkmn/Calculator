import React from "react";
import "../css/Numbers.css";
import "../css/Rows.css";

function FourthRow({
  handleNumberClick,
  handleOperation,
  stateProps,
  clickProps,
}) {
  return (
    <div className="Row">
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
  );
}

export default FourthRow;
