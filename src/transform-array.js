const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr1) {
  if(!(arr1 instanceof Array)) throw new Error ("'arr' parameter must be an instance of the Array!");
  let arr = new Array();
  arr = arr.concat(arr1);
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == '--double-next'){
      if(i + 1 < arr.length){
        arr.splice(i, 1, arr[i+1]);
      }
      else arr.splice(i, 1);
    } 
    if(arr[i] == '--double-prev'){
      if(i - 1 >= 0){
        arr.splice(i, 1, arr[i-1]);
      }
      else arr.splice(i, 1);
    }
    if(arr[i] == '--discard-next'){
      if(i + 1 < arr.length){
        arr.splice(i, 2); 
        if(arr[i] == '--double-prev' || arr[i] == '--discard-prev') arr.splice(i, 1);
      }
      else arr.splice(i, 1);
    }
    if(arr[i] == '--discard-prev'){
      if(i - 1 >= 0){
        arr.splice(i - 1, 2);
      }
      else arr.splice(i, 1);
    } 
  }
  return arr;
}

module.exports = {
  transform
};

console.log(transform(([1, 2, 3, '--discard-prev', 4, 5])));