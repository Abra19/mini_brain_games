import readlineSync from 'readline-sync';

const roundsNumber = 3;
const runGame = (generateRound, gameRules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  const helloMessage = `Hello, ${userName}!`;
  console.log(helloMessage);
  console.log(gameRules);
  for (let count = 0; count < roundsNumber; count += 1) {
    const [stringQuestion, correctAnswer] = generateRound();
    console.log(`Question: ${stringQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
