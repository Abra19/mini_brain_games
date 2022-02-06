import generateRandom from '../random.js';
import runGame from '../index.js';

const gameRules = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

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
  const a = generateRandom(0, 100);
  const operation = operations[generateRandom(0, operations.length - 1)];
  const b = generateRandom(0, 100);
  const question = `${a} ${operation} ${b}`;
  const trueAnswer = makeCalc(a, b, operation);
  return [question, String(trueAnswer)];
};

export default () => runGame(generateRound, gameRules);
