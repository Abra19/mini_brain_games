import generateRandom from '../random.js';
import runGame from '../index.js';

const gameRules = 'What number is missing in the progression?';

const makeProgression = (length, first, step) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(first + i * step);
  }
  return result;
};

const questionGenerate = (progression, index) => {
  const progressionCopy = progression.slice();
  progressionCopy[index] = '..';
  return progressionCopy.join(' ');
};

const generateRound = () => {
  const minElements = 5;
  const maxElements = 10;
  const stepMinimum = 1;
  const stepMaximum = 15;
  const minNumber = 0;
  const maxNumber = 100;
  const length = generateRandom(minElements, maxElements);
  const firstElement = generateRandom(minNumber, maxNumber);
  const step = generateRandom(stepMinimum, stepMaximum);
  const progression = makeProgression(length, firstElement, step);
  const findElementIndex = generateRandom(1, progression.length - 1);
  const question = questionGenerate(progression, findElementIndex);
  const trueAnswer = progression[findElementIndex];
  return [question, String(trueAnswer)];
};

export default () => runGame(generateRound, gameRules);
