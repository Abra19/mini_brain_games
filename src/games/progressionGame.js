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
  const length = generateRandom(5, 10);
  const firstElement = generateRandom(0, 100);
  const step = generateRandom(1, 15);
  const progression = makeProgression(length, firstElement, step);
  const findElementIndex = generateRandom(0, progression.length - 1);
  const question = questionGenerate(progression, findElementIndex);
  const trueAnswer = progression[findElementIndex];
  return [question, String(trueAnswer)];
};

export default () => runGame(generateRound, gameRules);
