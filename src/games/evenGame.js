import randomGenerate from '../random.js';

export const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

export const generateRound = (maximum) => {
  const number = randomGenerate(maximum);
  const question = `${number}`;
  const trueAnswer = isEven(number) ? 'yes' : 'no';
  return [question, trueAnswer];
};
