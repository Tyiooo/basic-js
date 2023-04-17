const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = 0, k = 0;
  while(n >= 10)
  {
    n/=10;
    k++;
  }
  while(k >= 0){
    sum += Math.round(parseInt(n));
    console.log(sum);
    n = Math.round((n - parseInt(n)) * 100) / 100 * 10;
    console.log(n);
    k--;
  }
  if (sum < 10)
    return sum;
  else
    return getSumOfDigits(sum);
}

module.exports = {
  getSumOfDigits
};
