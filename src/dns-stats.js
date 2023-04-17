const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  let result ={}
  for(let i = 0; i < domains.length; i++){
    const domParts = domains[i].split('.').reverse();
    let curPart = '';

    for (let j = 0; j < domParts.length; j++) {
      curPart += `.${domParts[j]}`;
      if(result[curPart]){
        result[curPart] += 1;
      }
      else result[curPart] = 1;
    }
  }

  return result;
}

module.exports = {
  getDNSStats
};


domains = [
    'code.yandex.ru',
    'music.yandex.ru',
    'yandex.ru'
   ]
console.log(getDNSStats(domains));