import randomGenerate from '../random.js';

export const gameRules = 'What is the result of the expression?';

const selectOperation = (maximum) => {
  const number = randomGenerate(maximum);
  if (number % 3 === 0) {
    return '+';
  }
  if (number % 3 === 1) {
    return '-';
  }
  return '*';
};

const makeCalc = (a, operation, b) => {
  if (operation === '+') {
    return Number(a) + Number(b);
  }
  if (operation === '-') {
    return Number(a) - Number(b);
  }
  return Number(a) * Number(b);
};

export const generateRound = (maximum) => {
  const a = randomGenerate(maximum);
  const operation = selectOperation(maximum);
  const b = randomGenerate(maximum);
  const question = `${a} ${operation} ${b}`;
  const trueAnswer = makeCalc(a, operation, b);
  return [question, trueAnswer];
};
