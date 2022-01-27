import readlineSync from 'readline-sync';
import {
  questionIsEven, trueAnswerEven, isTrueAnswerEven, makeQuestionEven,
} from './games/evenGame.js';
import {
  questionForCalc, makeQuestionCalc, trueAnswerCalc, isTrueAnswerCalc,
} from './games/calcGame.js';
import {
  questionForGCD, makeQuestionGCD, trueAnswerGCD, isTrueAnswerGCD,
} from './games/gcdGame.js';

/*  gameNumber:
 *  1 - brain-even
 *  2 - brain-calc
 *  3 - brain-gcd
 *
*/

const introduction = (gameNumber) => {
  let result = '';
  switch (gameNumber) {
    case '1':
      result = questionIsEven;
      break;
    case '2':
      result = questionForCalc;
      break;
    case '3':
      result = questionForGCD;
      break;
    default:
      break;
  }
  return result;
};

const makeQuestion = (gameNumber) => {
  let items = [];
  const numbersMaximum = 100;
  switch (gameNumber) {
    case '1':
      items = makeQuestionEven(numbersMaximum);
      break;
    case '2':
      items = makeQuestionCalc(numbersMaximum);
      break;
    case '3':
      items = makeQuestionGCD(numbersMaximum);
      break;
    default:
      break;
  }
  return items;
};

const readAnswer = (gameNumber) => {
  const stringQuestion = makeQuestion(gameNumber);
  const items = stringQuestion.split(' ');
  const answer = readlineSync.question(`Question: ${stringQuestion}\nYour answer: `);
  const arraySaveAnswer = [];
  arraySaveAnswer.push(answer);
  switch (gameNumber) {
    case '1':
      arraySaveAnswer.push(trueAnswerEven(items[0]));
      arraySaveAnswer.push(isTrueAnswerEven(items[0], answer));
      break;
    case '2':
      arraySaveAnswer.push(trueAnswerCalc(items[0], items[1], items[2]));
      arraySaveAnswer.push(isTrueAnswerCalc(items[0], items[1], items[2], answer));
      break;
    case '3':
      arraySaveAnswer.push(trueAnswerGCD(items[0], items[1]));
      arraySaveAnswer.push(isTrueAnswerGCD(items[0], items[1], answer));
      break;
    default:
      break;
  }
  return arraySaveAnswer;
};

const brainLogic = (name, gameNumber) => {
  let count = 1;
  console.log(introduction(gameNumber));
  while (count <= 3) {
    const [answer, correctAnswer, isCorrectAnswer] = readAnswer(gameNumber);
    if (isCorrectAnswer && count < 3) {
      console.log('Correct!');
      count += 1;
    } else if (isCorrectAnswer && count === 3) {
      console.log(`Correct!\nCongratulations, ${name}!`);
      break;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}`);
      break;
    }
  }
};

export default brainLogic;
