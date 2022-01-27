import readlineSync from 'readline-sync';
import { questionIsEven, isTrueAnswerEven, makeQuestionEven } from './games/evenGame.js';
import { questionForCalc, makeQuestionCalc, isTrueAnswerCalc } from './games/calcGame.js';
import { questionForGCD, makeQuestionGCD, isTrueAnswerGCD } from './games/gcdGame.js';
import { questionForProgression, makeQuestionProgression, isTrueAnswerProgression } from './games/progressionGame.js';
import { questionIsPrime, isTrueAnswerPrime, makeQuestionPrime } from './games/primeGame.js';

/*  gameNumber:
 *  1 - brain-even
 *  2 - brain-calc
 *  3 - brain-gcd
 *  4 - brain-progression
 *  5 - brain-prime
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
    case '4':
      result = questionForProgression;
      break;
    case '5':
      result = questionIsPrime;
      break;
    default:
      break;
  }
  return result;
};

const makeQuestion = (gameNumber) => {
  let items = ' ';
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
    case '4':
      items = makeQuestionProgression(numbersMaximum);
      break;
    case '5':
      items = makeQuestionPrime(numbersMaximum);
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
  const tmpArray = [];
  const arraySaveAnswer = [];
  arraySaveAnswer.push(answer);
  switch (gameNumber) {
    case '1':
      tmpArray.push(...isTrueAnswerEven(items[0], answer));
      break;
    case '2':
      tmpArray.push(...isTrueAnswerCalc(items[0], items[1], items[2], answer));
      break;
    case '3':
      tmpArray.push(...isTrueAnswerGCD(items[0], items[1], answer));
      break;
    case '4':
      tmpArray.push(...isTrueAnswerProgression(items, answer));
      break;
    case '5':
      tmpArray.push(...isTrueAnswerPrime(items, answer));
      break;
    default:
      break;
  }
  arraySaveAnswer.push(String(tmpArray[0]));
  arraySaveAnswer.push(tmpArray[1]);
  return arraySaveAnswer;
};

const brainLogic = (name, gameNumber) => {
  let count = 1;
  if (gameNumber > 5 || gameNumber < 1) {
    console.log('No such game');
  }
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
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      break;
    }
  }
};

export default brainLogic;
