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
  if(Array.isArray(members) != true) return false;
  let newMembers = new String();
  members.forEach(element => {
    if(isNaN(element) == true  && typeof element == 'string') newMembers+=element.toUpperCase().trim()[0];
  });
  return newMembers.split('').sort().join('');
}

module.exports = {
  createDreamTeam
};

console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']));