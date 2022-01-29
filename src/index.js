import readlineSync from 'readline-sync';
import helloUser from './cli.js';

const brainLogic = (gameFunction, gameRules) => {
  let count = 1;
  const [name, message] = helloUser();
  console.log(message);
  console.log(gameRules);
  const numbersMaximum = 100;
  while (count <= 3) {
    const [stringQuestion, correctAnswer] = gameFunction(numbersMaximum);
    const answer = readlineSync.question(`Question: ${stringQuestion}\nYour answer: `);
    let isCorrectAnswer = false;
    if (String(correctAnswer) === String(answer)) {
      isCorrectAnswer = true;
    }
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
