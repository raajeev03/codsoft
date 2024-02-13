const display = document.getElementById('display');
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

function appendNumber(number) {
  if (currentOperator === null) {
    firstOperand = firstOperand !== null ? parseFloat(`${firstOperand}${number}`) : number;
    display.value = firstOperand;
  } else {
    secondOperand = secondOperand !== null ? parseFloat(`${secondOperand}${number}`) : number;
    display.value = secondOperand;
  }
}

function setOperator(operator) {
  if (firstOperand !== null && secondOperand !== null) {
    calculateResult();
  }

  currentOperator = operator;
}

function clearDisplay() {
  firstOperand = null;
  secondOperand = null;
  currentOperator = null;
  display.value = '';
}

function calculateResult() {
  if (firstOperand === null || secondOperand === null || currentOperator === null) {
    return;
  }

  let result;

  switch (currentOperator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      if (secondOperand === 0) {
        alert('Cannot divide by zero');
        return;
      }
      result = firstOperand / secondOperand;
      break;
    default:
      return;
  }

  display.value = result;
  firstOperand = result;
  secondOperand = null;
  currentOperator = null;
}

function clearEntry() {
  if (currentOperator === null) {
    firstOperand = firstOperand !== null ? firstOperand / 10 : 0;
  } else {
    secondOperand = secondOperand !== null ? secondOperand / 10 : 0;
  }
  display.value = `${firstOperand}${currentOperator}${secondOperand}` !== 'NaN' ? `${firstOperand}${currentOperator}${secondOperand}` : '';
}

function percent() {
  if (currentOperator === null) {
    firstOperand = firstOperand !== null ? firstOperand * 0.01 : null;
  } else {
    secondOperand = secondOperand !== null ? secondOperand * 0.01 : null;
  }
  display.value = `${firstOperand}${currentOperator}${secondOperand}` !== 'NaN' ? `${firstOperand}${currentOperator}${secondOperand}` : '';
}