import readlineSync from 'readline-sync';

const brainLogic = (gameFunction, gameRules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  const helloMessage = `Hello, ${userName}!`;
  console.log(helloMessage);
  console.log(gameRules);
  const numbersMaximum = 100;
  const roundNumber = 3;
  for (let count = 1; count <= roundNumber; count += 1) {
    const [stringQuestion, correctAnswer] = gameFunction(numbersMaximum);
    console.log(`Question: ${stringQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    if (count < 3) {
      console.log('Correct!');
    } else {
      console.log(`Correct!\nCongratulations, ${userName}!`);
    }
  }
};

export default brainLogic;
