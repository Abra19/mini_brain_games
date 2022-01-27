export const questionIsPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

export const makeQuestionPrime = (maximum) => {
  let items = '';
  items += `${Math.ceil(Math.random() * maximum)}`;
  return items;
};

const trueAnswerPrime = (number) => {
  if (isPrime(number)) {
    return 'yes';
  }
  return 'no';
};

export const isTrueAnswerPrime = (number, answer) => {
  const etalon = trueAnswerPrime(number);
  if ((etalon === 'yes' && answer === 'yes') || (etalon === 'no' && answer === 'no')) {
    return [etalon, true];
  }
  return [etalon, false];
};
