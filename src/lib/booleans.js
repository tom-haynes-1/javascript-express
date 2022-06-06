function negate(a) {
  return a !== true;
};

function both(a, b) {
  return a && b === true;
};

function either(a, b) {
  return a || b === true;
};

function none(a, b) {
  return !a && !b;
};

function one(a, b) {
  return a === !b;
};

function truthiness(a) {
  return Boolean(a);
};

function isEqual(a, b) {
  return Boolean(a === b);
};

function isGreaterThan(a, b) {
  return Boolean(a > b);
};

function isLessThanOrEqualTo(a, b) {
  return Boolean(a <= b);
};

function isOdd(a) {
  return a % 2 !== 0;
};

function isEven(a) {
  return a % 2 === 0;
};

function isSquare(a) {
  return Number.isInteger(Math.sqrt(a));
};

function startsWith(char, string) {
  return char === string.slice(0, 1);
};

function containsVowels(string) {
  return string.search('[aeiouAEIOU]') >= 0;
};

function isLowerCase(string) {
  return string.toLowerCase() === string;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};