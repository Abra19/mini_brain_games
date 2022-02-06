import generateRandom from '../random.js';
import runGame from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const generateRound = () => {
  const a = generateRandom(0, 100);
  const b = generateRandom(0, 100);
  const question = `${a} ${b}`;
  const trueAnswer = gcd(a, b);
  return [question, String(trueAnswer)];
};

export default () => runGame(generateRound, gameRules);
