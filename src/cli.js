import readlineSync from 'readline-sync';

const helloUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  const helloMessage = `Hello, ${userName}!`;
  console.log(helloMessage);
};

export default helloUser;
