import randomGenerate from '../random.js';

export const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export const generateRound = (maximum) => {
  const number = randomGenerate(maximum);
  const question = `${number}`;
  const trueAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, trueAnswer];
};
