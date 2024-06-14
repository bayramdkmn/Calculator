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

  switch (operation) {
    case "+":
      result = firstValue + secondValue;
      break;
    case "-":
      result = firstValue - secondValue;
      break;
    case "*":
      result = firstValue * secondValue;
      break;
    case "/":
      result = firstValue / secondValue;
      result = Number(result.toFixed(1));
      break;
    case "mod":
      result = firstValue % secondValue;
      break;
    case "%":
      result = (firstValue * secondValue) / 100;
      break;
    default:
      return;
  }

  setDisplay(String(result));
  setFirstValue(result);
  setOperation("=");
};
