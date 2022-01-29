export const questionForCalc = 'What is the result of the expression?';

const selectOperation = () => {
  const number = Math.ceil(Math.random() * 100);
  if (number % 3 === 0) {
    return '+';
  }
  if (number % 3 === 1) {
    return '-';
  }
  return '*';
};

export const makeQuestionAndTrueAnswerCalc = (maximum) => {
  let items = '';
  const a = Math.ceil(Math.random() * maximum);
  items += `${a} `;
  const operation = selectOperation();
  items += `${operation} `;
  const b = Math.ceil(Math.random() * maximum);
  items += `${b}`;
  let trueAnswer;
  if (operation === '+') {
    trueAnswer = Number(a) + Number(b);
  } else if (operation === '-') {
    trueAnswer = Number(a) - Number(b);
  } else {
    trueAnswer = Number(a) * Number(b);
  }
  return [items, trueAnswer];
};
