import randomGenerate from '../random.js';
import brainLogic from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const generateRound = () => {
  const minNumber = 0;
  const maxNumber = 100;
  const a = randomGenerate(minNumber, maxNumber);
  const b = randomGenerate(minNumber, maxNumber);
  const question = `${a} ${b}`;
  const trueAnswer = gcd(a, b);
  return [question, String(trueAnswer)];
};

export default () => brainLogic(generateRound, gameRules);
