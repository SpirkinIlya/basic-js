const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const teamName = [];
  if (!Array.isArray(members)) {
    return false;
  }
  for (let i = 0; i < members.length; i += 1) {
    if (typeof members[i] === "string") {
      const char = members[i].toUpperCase().trim()[0];
      teamName.push(char);
    }
  }
  if (teamName.length > 0) { 
    return teamName.sort().join('')
  }else {
    return false;
  }
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
