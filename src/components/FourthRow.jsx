import React from "react";
import "../css/Numbers.css";
import "../css/Rows.css";

function FourthRow({
  handleNumberClick,
  handleOperation,
  stateProps,
  clickProps,
}) {
  const numbers = ["1", "2", "3"];
  const operation = "-";

  return (
    <div className="Row">
      {numbers.map((number) => (
        <div
          key={number}
          className="button-div"
          onClick={() => handleNumberClick(number, clickProps)}
        >
          {number}
        </div>
      ))}
      <div
        className="button-div"
        onClick={() => handleOperation(operation, stateProps)}
      >
        {operation}
      </div>
    </div>
  );
}

export default FourthRow;
