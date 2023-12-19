const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let resultString = '';
  if (str.length > 0) {
    let counter = 1;
    let char = str[0];
    for (let i = 1; i < str.length; i += 1) {
      if (char === str[i]) {
        counter += 1;
      }else {
        if (counter > 1) {
          resultString += counter;
        }
        resultString += char;
        counter = 1;
        char = str[i];
      }
    }
    if (counter > 1) {
      resultString += counter;
    }
    resultString += char;
  }
  
  return resultString;
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
