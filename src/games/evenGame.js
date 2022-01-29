export const questionForEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

export const makeQuestionAndTrueAnswerEven = (maximum) => {
  const number = Math.ceil(Math.random() * maximum);
  const item = `${number}`;
  let trueAnswer = 'no';
  if (isEven(number)) {
    trueAnswer = 'yes';
  }
  return [item, trueAnswer];
};
