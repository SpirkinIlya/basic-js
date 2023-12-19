const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numberString = n.toString();
  let maximalNumber = 0;
  for (let i = 0; i < numberString.length; i += 1) {
    const numberWithoutDigit = parseInt(numberString.slice(0, i) + numberString.slice(i + 1));
    if (numberWithoutDigit > maximalNumber) { 
      maximalNumber = numberWithoutDigit;
    }
  }
  return maximalNumber;
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
