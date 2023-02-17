const userInput = document.querySelector('#userInput');
var expression = '';

const press = (num) => {
  expression += num;
  userInput.value = expression;
};

const equal = () => {
  userInput.value = eval(expression);
  expression = '';
};

const erase = () => {
  expression = '';
  userInput.value = expression;
};