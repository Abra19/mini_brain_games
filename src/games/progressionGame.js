export const questionForProgression = 'What number is missing in the progression?';

const progressionProperty = (maximum) => {
  const progressionBase = [];
  const start = 5;
  const finish = 10;
  const deltaMaximum = 15;
  const length = Math.ceil(Math.random() * (finish - start) + start);
  progressionBase.push(length);
  const firstElement = Math.ceil(Math.random() * maximum);
  progressionBase.push(firstElement);
  const delta = Math.ceil(Math.random() * deltaMaximum);
  progressionBase.push(delta);
  return progressionBase;
};

const makeProgression = (maximum) => {
  const result = [];
  const property = progressionProperty(maximum);
  for (let i = 1; i < property[0]; i += 1) {
    result.push(property[1] + i * property[2]);
  }
  return result;
};

export const makeQuestionAndTrueAnswerProgression = (maximum) => {
  const progression = makeProgression(maximum);
  let items = String(progression[0]);
  const findElementIndex = Math.ceil(Math.random() * (progression.length - 1));
  for (let i = 1; i < progression.length; i += 1) {
    if (i !== findElementIndex) {
      items += ` ${progression[i]}`;
    } else {
      items += ' ..';
    }
  }
  const trueAnswer = progression[findElementIndex];
  return [items, trueAnswer];
};
