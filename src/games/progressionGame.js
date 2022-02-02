import randomGenerate from '../random.js';
import brainLogic from '../index.js';

const gameRules = 'What number is missing in the progression?';

const makeProgression = (length, first, step) => {
  const result = [];
  result[0] = first;
  for (let i = 1; i < length; i += 1) {
    result.push(first + i * step);
  }
  return result;
};

const questionGenerate = (progression, index) => {
  let question = progression[0];
  for (let i = 1; i < progression.length; i += 1) {
    if (i !== index) {
      question += ` ${progression[i]}`;
    } else {
      question += ' ..';
    }
  }
  return question;
};

const generateRound = () => {
  const minElements = 5;
  const maxElements = 10;
  const stepMinimum = 1;
  const stepMaximum = 15;
  const minNumber = 0;
  const maxNumber = 100;
  const length = randomGenerate(minElements, maxElements);
  const firstElement = randomGenerate(minNumber, maxNumber);
  const step = randomGenerate(stepMinimum, stepMaximum);
  const progression = makeProgression(length, firstElement, step);
  const findElementIndex = randomGenerate(0, progression.length - 1);
  const question = questionGenerate(progression, findElementIndex);
  const trueAnswer = progression[findElementIndex];
  return [question, String(trueAnswer)];
};

export default () => brainLogic(generateRound, gameRules);
