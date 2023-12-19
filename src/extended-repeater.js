const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatedString = str;
  let additionalString = '';
  if ('addition' in options) {
    additionalString += options.addition;
    for (let j = 1; j < options.additionRepeatTimes; j += 1) {
      if ('additionSeparator' in options) {
        additionalString += options.additionSeparator;
      }else {
        additionalString += '|';
      }
      additionalString += options.addition
    }
    repeatedString += additionalString;
  }
  for (let i = 1; i < options.repeatTimes; i += 1) {
    if ('separator' in options) {
      repeatedString += options.separator;
    }else {
      repeatedString += '+';
    }
    repeatedString += str;
    repeatedString += additionalString;
  }
  return repeatedString;
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
