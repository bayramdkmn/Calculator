import React from "react";
import { handleOperation } from "./operations";
import "../css/Numbers.css";
import "../css/Rows.css";

function FirstRoww({ stateProps, handleClear }) {
  return (
    <div className="Row">
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
  );
}

export default FirstRoww;
