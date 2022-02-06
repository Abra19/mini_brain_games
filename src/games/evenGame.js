import generateRandom from '../random.js';
import runGame from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const generateRound = () => {
  const number = generateRandom(0, 100);
  const question = String(number);
  const trueAnswer = isEven(number) ? 'yes' : 'no';
  return [question, trueAnswer];
};

export default () => runGame(generateRound, gameRules);
