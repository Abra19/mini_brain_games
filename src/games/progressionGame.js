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

export const makeQuestionProgression = (maximum) => {
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
  return items;
};

const trueAnswerProgression = (items) => {
  let findIndex;
  for (let i = 0; i < items.length; i += 1) {
    if (items[i] === '..') {
      findIndex = i;
      break;
    }
  }
  if (findIndex === 0) {
    return 2 * items[1] - items[2];
  }
  if (findIndex === items.length - 1) {
    return 2 * items[items.length - 2] - items[items.length - 3];
  }
  return (Number(items[findIndex - 1]) + Number(items[findIndex + 1])) / 2;
};

export const isTrueAnswerProgression = (items, answer) => {
  const etalon = trueAnswerProgression(items);
  if (Number(answer) === etalon) {
    return [etalon, true];
  }
  return [etalon, false];
};
