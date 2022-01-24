import readlineSync from 'readline-sync';

export const questionIsEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const trueAnswer = (number) => {
  if (isEven(number)) {
    return 'yes';
  }
  return 'no';
};

const isTrueAnswer = (number, answer) => {
  if ((isEven(number) && answer === 'yes') || (!isEven(number) && answer === 'no')) {
    return true;
  }
  return false;
};

export const readAnswer = () => {
  const randomInteger = Math.ceil(Math.random() * 100);
  const answer = readlineSync.question(`Question: ${randomInteger}\nYour answer: `);
  const arraySaveAnswer = [];
  arraySaveAnswer.push(answer);
  arraySaveAnswer.push(trueAnswer(randomInteger));
  arraySaveAnswer.push(isTrueAnswer(randomInteger, answer));
  return arraySaveAnswer;
};
