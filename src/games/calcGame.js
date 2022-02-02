import randomGenerate from '../random.js';
import brainLogic from '../index.js';

const gameRules = 'What is the result of the expression?';

const selectOperation = (min, max) => {
  const number = randomGenerate(min, max);
  const operations = ['+', '-', '*'];
  const index = number % 3;
  return operations[index];
};

const makeCalc = (a, b, operation) => {
  switch (operation) {
    case '+':
      return Number(a) + Number(b);
    case '-':
      return Number(a) - Number(b);
    default:
      return Number(a) * Number(b);
  }
};

const generateRound = () => {
  const minNumber = 0;
  const maxNumber = 100;
  const a = randomGenerate(minNumber, maxNumber);
  const operation = selectOperation(minNumber, maxNumber);
  const b = randomGenerate(minNumber, maxNumber);
  const question = `${a} ${operation} ${b}`;
  const trueAnswer = makeCalc(a, b, operation);
  return [question, String(trueAnswer)];
};

export default () => brainLogic(generateRound, gameRules);
