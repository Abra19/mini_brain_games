import readlineSync from 'readline-sync';
import { trueAnswerEven, isTrueAnswerEven, makeQuestionEven } from './games/analyzeEven.js';
import { makeQuestionCalc, trueAnswerCalc, isTrueAnswerCalc } from './games/analyzeCalc.js';

/*  gameNumber:
 *  1 - brain-even
 *  2 - brain-calc
 *
*/

const makeQuestion = (gameNumber) => {
  let items = [];
  switch (gameNumber) {
    case '1':
      items = makeQuestionEven();
      break;
    case '2':
      items = makeQuestionCalc();
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
    default:
      break;
  }
  return arraySaveAnswer;
};

const brainLogic = (name, gameNumber) => {
  let count = 1;
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
