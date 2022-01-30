import randomGenerate from '../random.js';

export const gameRules = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  const maximum = Math.max(a, b);
  const minimum = Math.min(a, b);
  const rest = maximum % minimum;
  if (rest === 0) {
    return minimum;
  }
  return gcd(minimum, rest);
};

export const generateRound = (maximum) => {
  const a = randomGenerate(maximum);
  const b = randomGenerate(maximum);
  const question = `${a} ${b}`;
  const trueAnswer = gcd(a, b);
  return [question, trueAnswer];
};
