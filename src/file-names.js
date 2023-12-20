const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let namesMap = new Map();
  for (let i = 0; i < names.length; i += 1) {
    if (namesMap.has(names[i])) {
      if (namesMap.get(names[i]) != 1) {
        let counter = namesMap.get(names[i]);
        let newFileName = `${names[i]}(${counter})`;
        namesMap.set(newFileName, 1);
        counter += 1;
        namesMap.set(names[i], counter);
      }else {
        let counter = namesMap.get(names[i]);
        let newFileName = `${names[i]}(1)`;
        namesMap.set(newFileName, 1);
        counter += 1;
        namesMap.set(names[i], counter);
        console.log (newFileName);
      }
    }else {
      namesMap.set(names[i], 1);
    }
  }
  return Array.from(namesMap.keys());
  // remove line with error and write your code here
}

module.exports = {
  renameFiles
};
