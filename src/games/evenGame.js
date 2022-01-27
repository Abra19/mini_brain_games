export const questionIsEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

export const trueAnswerEven = (number) => {
  if (isEven(number)) {
    return 'yes';
  }
  return 'no';
};

export const isTrueAnswerEven = (number, answer) => {
  if ((isEven(number) && answer === 'yes') || (!isEven(number) && answer === 'no')) {
    return true;
  }
  return false;
};

export const makeQuestionEven = (maximum) => {
  let items = '';
  items += `${Math.ceil(Math.random() * maximum)}`;
  return items;
};
