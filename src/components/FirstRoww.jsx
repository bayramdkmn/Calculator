import React from "react";
import { handleOperation } from "./operations";
import "../css/Numbers.css";
import "../css/Rows.css";

function FirstRoww({ stateProps, handleClear }) {
  const buttons = [
    { label: "" },
    { label: "mod", onClick: () => handleOperation("mod", stateProps) },
    { label: "%", onClick: () => handleOperation("%", stateProps) },
    { label: "C", onClick: handleClear },
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

export default FirstRoww;
