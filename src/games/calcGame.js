import generateRandom from '../random.js';
import runGame from '../index.js';

const gameRules = 'What is the result of the expression?';

const selectOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[generateRandom(0, operations.length - 1)];
};

const makeCalc = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`operation ${operation} is not supported`);
  }
};

const generateRound = () => {
  const minNumber = 0;
  const maxNumber = 100;
  const a = generateRandom(minNumber, maxNumber);
  const operation = selectOperation();
  const b = generateRandom(minNumber, maxNumber);
  const question = `${a} ${operation} ${b}`;
  const trueAnswer = makeCalc(a, b, operation);
  return [question, String(trueAnswer)];
};

export default () => runGame(generateRound, gameRules);
