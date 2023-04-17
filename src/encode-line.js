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
  let arr = str.split("");
  let res = "";
  let j = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == arr[i+1])
    {
      j = i;
      while(arr[i] == arr[i+1]){
        i++;
      }
      res += `${i - j + 1}${arr[i]}`;
    }
    else res += arr[i];
  }
  return res;
}

module.exports = {
  encodeLine
};
