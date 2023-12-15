let displayValue = '0';
let operator = '';
let operand = '';

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
  displayValue = '0';
  operator = '';
  operand = '';
  updateDisplay();
}

function appendNumber(number) {
  if (displayValue === '0') {
    displayValue = number;
  } else {
    displayValue += number;
  }
  updateDisplay();
}

function appendDecimal() {
  if (!displayValue.includes('.')) {
    displayValue += '.';
    updateDisplay();
  }
}

function setOperator(op) {
  operator = op;
  operand = displayValue;
  displayValue = '0';
  updateDisplay();
}

function calculate() {
  const num1 = parseFloat(operand);
  const num2 = parseFloat(displayValue);

  switch (operator) {
    case '+':
      displayValue = (num1 + num2).toString();
      break;
    case '-':
      displayValue = (num1 - num2).toString();
      break;
    case '*':
      displayValue = (num1 * num2).toString();
      break;
    case '/':
      displayValue = (num1 / num2).toString();
      break;
    default:
      break;
  }

  operator = '';
  operand = '';
  updateDisplay();
}

// Initial display update
updateDisplay();
