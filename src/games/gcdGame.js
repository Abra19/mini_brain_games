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

export const makeQuestionAndTrueAnswerGCD = (maximum) => {
  let items = '';
  const a = Math.ceil(Math.random() * maximum);
  items += `${a} `;
  const b = Math.ceil(Math.random() * maximum);
  items += `${b}`;
  const trueAnswer = gcd(a, b);
  return [items, trueAnswer];
};
