import React, { useState } from "react";
import "../css/Numbers.css";
import LCD from "../components/LCD";
import { calculate } from "./process";

function Numbers() {
  const [display, setDisplay] = useState("0");
  const [operation, setOperation] = useState("");
  const [firstValue, setFirstValue] = useState(null);

  const handleNumberClick = (number) => {
    if (display === "0" || operation === "=") {
      setDisplay(number);
      if (operation === "=") {
        setOperation("");
      }
    } else {
      setDisplay(display + number);
    }
  };
  //dsadsadsadsad

  const handleOperation = (op) => {
    if (firstValue !== null && operation && display !== "0") {
      calculate(
        setDisplay,
        setFirstValue,
        setOperation,
        operation,
        firstValue,
        display
      );
    } else {
      setFirstValue(parseFloat(display));
    }
    setOperation(op);
    setDisplay(display + " " + op + " ");
  };

  const handleClear = () => {
    setDisplay("0");
    setOperation("");
    setFirstValue(null);
  };

  return (
    <div className="numbers-main">
      <div style={{ width: "100%" }}>
        <div className="screen">
          <LCD content={display} />
        </div>
      </div>
      <div className="row-div">
        <div className="row">
          <div className="button-div"></div>
          <div className="button-div" onClick={() => handleOperation("mod")}>
            mod
          </div>
          <div className="button-div" onClick={() => handleOperation("%")}>
            %
          </div>
          <div className="button-div" onClick={handleClear}>
            C
          </div>
        </div>
        <div className="row">
          <div className="button-div" onClick={() => handleNumberClick("7")}>
            7
          </div>
          <div className="button-div" onClick={() => handleNumberClick("8")}>
            8
          </div>
          <div className="button-div" onClick={() => handleNumberClick("9")}>
            9
          </div>
          <div className="button-div" onClick={() => handleOperation("/")}>
            /
          </div>
        </div>
        <div className="row">
          <div className="button-div" onClick={() => handleNumberClick("4")}>
            4
          </div>
          <div className="button-div" onClick={() => handleNumberClick("5")}>
            5
          </div>
          <div className="button-div" onClick={() => handleNumberClick("6")}>
            6
          </div>
          <div className="button-div" onClick={() => handleOperation("*")}>
            *
          </div>
        </div>
        <div className="row">
          <div className="button-div" onClick={() => handleNumberClick("1")}>
            1
          </div>
          <div className="button-div" onClick={() => handleNumberClick("2")}>
            2
          </div>
          <div className="button-div" onClick={() => handleNumberClick("3")}>
            3
          </div>
          <div className="button-div" onClick={() => handleOperation("-")}>
            -
          </div>
        </div>
        <div className="row">
          <div className="button-div" onClick={() => handleNumberClick("0")}>
            0
          </div>
          <div className="button-div" onClick={() => handleNumberClick(".")}>
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
          <div className="button-div" onClick={() => handleOperation("+")}>
            +
          </div>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
