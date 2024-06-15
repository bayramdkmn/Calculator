import React from "react";
import "../css/Numbers.css";
import "../css/Rows.css";

function ThirdRow({
  handleNumberClick,
  handleOperation,
  stateProps,
  clickProps,
}) {
  const buttons = [
    { label: "4", onClick: () => handleNumberClick("4", clickProps) },
    { label: "5", onClick: () => handleNumberClick("5", clickProps) },
    { label: "6", onClick: () => handleNumberClick("6", clickProps) },
    { label: "*", onClick: () => handleOperation("*", stateProps) },
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

export default ThirdRow;
