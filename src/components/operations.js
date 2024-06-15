// operationHandlers.js
export const handleNumberClick = (number, clickProps) => {
  const { display, setDisplay, operation, setOperation } = clickProps;
  if (display === "0" || operation === "=") {
    setDisplay(number);
    if (operation === "=") {
      setOperation("");
    }
  } else {
    setDisplay(display + number);
  }
};

export const handleOperation = (op, props) => {
  const {
    setDisplay,
    setFirstValue,
    setOperation,
    calculate,
    firstValue,
    display,
    operation,
  } = props;

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
