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
	str = String(str);

	let repeatTimes;
	if(options.repeatTimes) repeatTimes = options.repeatTimes;
	else repeatTimes = 1;

	let additionRepeatTimes;
	if(options.additionRepeatTimes) additionRepeatTimes = options.additionRepeatTimes;
	else additionRepeatTimes = 1;

	let res = "";
	let separator;
	if(options.separator) separator = options.separator;
	else separator = "+";

	console.log(`${options.addition}`);
	let addition = [];
	let additionSeparator;
	if(options.additionSeparator) additionSeparator = options.additionSeparator;
	else additionSeparator = "|";

	if(String(options.addition) !== 'undefined'){
		for(let i = 0; i < additionRepeatTimes; i++){
			addition.push(`${options.addition}`);
		}
	}

	
	addition = addition.join(`${additionSeparator}`);

	str += addition;
	let tempArr = [];

	for(let i = 0; i < repeatTimes; i++)
	{
		tempArr.push(str);
	}

	res = tempArr.join(`${separator}`);

	return res;


}

module.exports = {
  repeater
};
