import React from "react";
import "../css/Numbers.css";
import "../css/Rows.css";

function SecondRow({
  handleNumberClick,
  handleOperation,
  stateProps,
  clickProps,
}) {
  // Button configurations in an array
  const buttons = [
    { label: "7", action: () => handleNumberClick("7", clickProps) },
    { label: "8", action: () => handleNumberClick("8", clickProps) },
    { label: "9", action: () => handleNumberClick("9", clickProps) },
    { label: "/", action: () => handleOperation("/", stateProps) },
  ];

  return (
    <div className="Row">
      {buttons.map((button) => (
        <div key={button.label} className="button-div" onClick={button.action}>
          {button.label}
        </div>
      ))}
    </div>
  );
}

export default SecondRow;
