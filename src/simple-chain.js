const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  storage: [],
  getLength() {
    return this.storage.length;
  },
  addLink(value) {
    if (!(value === undefined)) {
      this.storage.push(`( ${value} )`);
    } else {
      this.storage.push(`( )`);
    }
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.storage.length) {
      this.storage = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.storage.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.storage.reverse();
    return this;
  },
  finishChain() {
    let chainString = this.storage.join('~~');
    this.storage = [];
    return chainString;
  }
};

module.exports = {
  chainMaker
};
