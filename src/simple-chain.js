const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	length: 0,
	res: "",

  getLength() {
		return this.length;
  },
  addLink(value) {
		if(this.length == 0 || this.res == "") this.res += `( ${value} )`;
		else this.res += `~~( ${value} )`;
		this.length++;
		return this;
  },
  removeLink(position) {
		if(position - 1 >= 0 && position < this.length){
			let temp = this.res.split("~~");
			temp.splice(position - 1, 1);
			this.res = temp.join("~~");
			return this;
		}
		else{
			this.res = "";
			this.length = 0;
			throw new Error("You can't remove incorrect link!");
		}
  },
  reverseChain() {
		this.res = this.res.split("~~").reverse().join("~~");
		return this;
  },
  finishChain() {
		let res2 = this.res;
		this.res = "";
		this.length = 0;
		return res2;
  }
};

module.exports = {
  chainMaker
};
