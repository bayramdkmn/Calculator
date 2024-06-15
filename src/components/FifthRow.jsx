import React from "react";
import "../css/Numbers.css";
import "../css/Rows.css";

function FifthRow({
  handleNumberClick,
  handleOperation,
  stateProps,
  calculate,
  setDisplay,
  setFirstValue,
  setOperation,
  operation,
  firstValue,
  display,
}) {
  const buttons = [
    { label: "0", onClick: () => handleNumberClick("0", stateProps) },
    { label: ".", onClick: () => handleNumberClick(".", stateProps) },
    {
      label: "=",
      onClick: () =>
        calculate(
          setDisplay,
          setFirstValue,
          setOperation,
          operation,
          firstValue,
          display
        ),
    },
    { label: "+", onClick: () => handleOperation("+", stateProps) },
  ];

  return (
    <div className="Row">
      {buttons.map((button) => (
        <div key={button.label} className="button-div" onClick={button.onClick}>
          {button.label}
        </div>
      ))}
    </div>
  );
}

export default FifthRow;
