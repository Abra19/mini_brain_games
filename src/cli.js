import readlineSync from 'readline-sync';

const helloUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  const greetingUser = `Hello, ${userName}!`;
  return greetingUser;
};

export default helloUser;
