import readlineSync from 'readline-sync';

const brainLogic = (gameFunction, gameRules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  const helloMessage = `Hello, ${userName}!`;
  console.log(helloMessage);
  console.log(gameRules);
  const numbersMaximum = 100;
  for (let count = 1; count <= 3; count += 1) {
    const [stringQuestion, correctAnswer] = gameFunction(numbersMaximum);
    const answer = readlineSync.question(`Question: ${stringQuestion}\nYour answer: `);
    let isCorrectAnswer = false;
    if (String(correctAnswer) === String(answer)) {
      isCorrectAnswer = true;
    }
    if (isCorrectAnswer && count < 3) {
      console.log('Correct!');
    } else if (isCorrectAnswer && count === 3) {
      console.log(`Correct!\nCongratulations, ${userName}!`);
      break;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
  }
};

export default brainLogic;
