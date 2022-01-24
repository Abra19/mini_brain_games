import readlineSync from 'readline-sync';

const helloUser = () => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  const helloMessage = `Hello, ${userName}!`;
  const arraySaveMessage = [];
  arraySaveMessage.push(userName);
  arraySaveMessage.push(helloMessage);
  return arraySaveMessage;
};

export default helloUser;
