export const calculate = (
  setDisplay,
  setFirstValue,
  setOperation,
  operation,
  firstValue,
  display
) => {
  if (!operation || firstValue === null) return;

  const secondValue = parseFloat(display.split(" ").pop());
  let result;

  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Number((a / b).toFixed(1)), // Fixed to 1 decimal place for division
    mod: (a, b) => a % b,
    "%": (a, b) => (a * b) / 100,
  };

  result = operations[operation](firstValue, secondValue);

  setDisplay(String(result));
  setFirstValue(result);
  setOperation("=");
};
