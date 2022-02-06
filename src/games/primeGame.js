import generateRandom from '../random.js';
import runGame from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const sqrtNumber = Math.sqrt(number);
  for (let i = 2; i <= sqrtNumber; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = generateRandom(0, 100);
  const question = String(number);
  const trueAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, trueAnswer];
};

export default () => runGame(generateRound, gameRules);
