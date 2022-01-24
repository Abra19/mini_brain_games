#!/usr/bin/env node
import helloUser from '../src/cli.js';
import { questionIsEven, readAnswer } from '../src/analyzeEven.js';

const [name, message] = helloUser();
console.log(message);
console.log(questionIsEven);
let count = 1;
while (count <= 3) {
  const [answer, trueAnswer, isCorrectAnswer] = readAnswer();
  if (isCorrectAnswer && count < 3) {
    console.log('Correct!');
    count += 1;
  } else if (isCorrectAnswer && count === 3) {
    console.log(`Correct!\nCongratulations, ${name}!`);
    break;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${name}`);
    break;
  }
}
