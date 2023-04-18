const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');

let result = '';

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const value = this.textContent;
    if (value === 'C') {
      result = '';
      display.textContent = '';
    } else if (value === '=') {
      display.textContent = eval(result);
      result = '';
    } else {
      result += value;
      display.textContent = result;
    }
  });
});
