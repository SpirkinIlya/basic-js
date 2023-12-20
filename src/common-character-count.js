const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let shortestWord = '';
  let longestWord = '';
  let counter = 0;
  if (s1.length < s2.length) {
    shortestWord = s1;
    longestWord = s2;
  }else {
    shortestWord = s2;
    longestWord = s1;
  }
  for (let i = 0; i < shortestWord.length; i += 1) {
    const char = shortestWord[i];
    if (longestWord.indexOf(char) != -1) {
      const index = longestWord.indexOf(char);
      counter += 1;
      longestWord = longestWord.slice(0, index) + longestWord.slice(index + 1);
    }
  }
  return counter;
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
