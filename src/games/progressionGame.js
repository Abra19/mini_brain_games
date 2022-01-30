import randomGenerate from '../random.js';

export const gameRules = 'What number is missing in the progression?';

const makeProgression = (length, first, step) => {
  const result = [];
  for (let i = 1; i < length; i += 1) {
    result.push(first + i * step);
  }
  return result;
};

export const generateRound = (maximum) => {
  const minElements = 5;
  const maxElements = 10;
  const stepLengthMaximum = 15;
  const length = randomGenerate(maxElements - minElements) + minElements;
  const firstElement = randomGenerate(maximum);
  const step = randomGenerate(stepLengthMaximum);
  const progression = makeProgression(length, firstElement, step);
  let question = String(progression[0]);
  const findElementIndex = randomGenerate(progression.length - 1);
  for (let i = 1; i < progression.length; i += 1) {
    if (i !== findElementIndex) {
      question += ` ${progression[i]}`;
    } else {
      question += ' ..';
    }
  }
  const trueAnswer = progression[findElementIndex];
  return [question, trueAnswer];
};
