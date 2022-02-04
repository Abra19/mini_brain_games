import generateRandom from '../random.js';
import runGame from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const generateRound = () => {
  const minNumber = 0;
  const maxNumber = 100;
  const a = generateRandom(minNumber, maxNumber);
  const b = generateRandom(minNumber, maxNumber);
  const question = `${a} ${b}`;
  const trueAnswer = gcd(a, b);
  return [question, String(trueAnswer)];
};

export default () => runGame(generateRound, gameRules);
