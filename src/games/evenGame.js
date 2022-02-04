import generateRandom from '../random.js';
import runGame from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const generateRound = () => {
  const minNumber = 0;
  const maxNumber = 100;
  const number = generateRandom(minNumber, maxNumber);
  const question = String(number);
  const trueAnswer = isEven(number) ? 'yes' : 'no';
  return [question, trueAnswer];
};

export default () => runGame(generateRound, gameRules);
