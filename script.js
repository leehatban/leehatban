const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
let currentValue = '0';
let previousValue = null;
let operator = null;
let shouldResetDisplay = false;

function resetCalculator() {
  currentValue = '0';
  previousValue = null;
  operator = null;
  shouldResetDisplay = false;
  display.textContent = currentValue;
}

function handleButtonClick(event) {
  const { target } = event;
  const buttonValue = target.textContent;
  
  if (shouldResetDisplay) {
    currentValue = '0';
    shouldResetDisplay = false;
  }
  
  switch (buttonValue) {
    case '+':
    case '-':
    case '*':
    case '/':
      operator = buttonValue;
      previousValue = currentValue;
      shouldResetDisplay = true;
      break;
    case '=':
      const currentValueNum = parseFloat(currentValue);
      const previousValueNum = parseFloat(previousValue);
      switch (operator) {
        case '+':
          currentValue = previousValueNum + currentValueNum;
          break;
        case '-':
          currentValue = previousValueNum - currentValueNum;
          break;
        case '*':
          currentValue = previousValueNum * currentValueNum;
          break;
        case '/':
          currentValue = previousValueNum / currentValueNum;
          break;
        default:
          break;
      }
      operator = null;
      previousValue = null;
      shouldResetDisplay = true;
      break;
    case 'AC':
      resetCalculator();
      break;
    default:
      if (currentValue === '0') {
        currentValue = buttonValue;
      } else {
        currentValue += buttonValue;
      }
      break;
  }
  
  display.textContent = currentValue;
}

buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});
