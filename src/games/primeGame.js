export const questionForPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

export const makeQuestionAndTrueAnswerPrime = (maximum) => {
  let item = '';
  const number = Math.ceil(Math.random() * maximum);
  item += `${number}`;
  let trueAnswer = 'no';
  if (isPrime(number)) {
    trueAnswer = 'yes';
  }
  return [item, trueAnswer];
};
