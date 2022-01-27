export const questionForGCD = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  const maximum = Math.max(a, b);
  const minimum = Math.min(a, b);
  const rest = maximum % minimum;
  if (rest === 0) {
    return minimum;
  }
  return gcd(minimum, rest);
};

export const makeQuestionGCD = (maximum) => {
  let items = '';
  items += `${Math.ceil(Math.random() * maximum)} `;
  items += `${Math.ceil(Math.random() * maximum)}`;
  return items;
};

export const trueAnswerGCD = (a, b) => (gcd(a, b));

export const isTrueAnswerGCD = (a, b, answer) => {
  const etalon = trueAnswerGCD(a, b);
  if (Number(answer) === etalon) {
    return true;
  }
  return false;
};
