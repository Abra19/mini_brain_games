export const questionIsEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

export const makeQuestionEven = (maximum) => {
  let items = '';
  items += `${Math.ceil(Math.random() * maximum)}`;
  return items;
};

const trueAnswerEven = (number) => {
  if (isEven(number)) {
    return 'yes';
  }
  return 'no';
};

export const isTrueAnswerEven = (number, answer) => {
  const etalon = trueAnswerEven(number);
  if ((etalon === 'yes' && answer === 'yes') || (etalon === 'no' && answer === 'no')) {
    return [etalon, true];
  }
  return [etalon, false];
};
