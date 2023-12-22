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
function createDreamTeam(/* members */) {
  throw new NotImplementedError('Not implemented');

  /*if (Array.isArray(members)) { // проверить массив или нет
   return false;
  }
  members.sort();

  let DreamTeam = [];

  for (let i = 0; i < DreamTeam.length; i++) {  // переюрать массив
   if (typeof members[i] === 'string') {    // проверить строки
    let first = members[i].charAt(0).toUpperCase();   // получить букву первую
    DreamTeam.push(first);    // добавить ее в массив
   }
  }
  // DreamTeam.sort();   //  сортировать в алфавитном
   let DreamTeamStr = DreamTeam.join('');   //   добавить буквы
return DreamTeamStr;
  // remove line with error and write your code here*/
}

module.exports = {
  createDreamTeam
};
