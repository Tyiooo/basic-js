const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(straight = true){
    this.straight = straight;
  }

  decrypt(word, cypher) {

    if (word === undefined || cypher === undefined)
      throw new Error("Incorrect arguments!");

    let cypCount = 0;
    for (let i = 0; i < word.length; i++)
    {
      if ((word[i].charCodeAt() >= 65 && word[i].charCodeAt() <= 90) || (word[i].charCodeAt() >= 97 && word[i].charCodeAt() <= 122))
      {
        let sym;
        if (cypher[cypCount].charCodeAt() <=90)
          sym = word[i].charCodeAt() - cypher[cypCount].charCodeAt() + 65;
        else
          sym = word[i].charCodeAt() - cypher[cypCount].charCodeAt() + 97;
        if ((word[i].charCodeAt() <=90 && sym < 65) || (word[i].charCodeAt() <= 122 && word[i].charCodeAt() >= 97 && sym < 97))
          sym += 26;
        let arr = word.split('');
        arr[i] = String.fromCharCode(sym);
        word = arr.join('');
        cypCount++;
        if (cypCount === cypher.length)
          cypCount = 0;
      }
    }
    if (this.straight)
      return word;
    else
    {
      let arr = word.split('');
      arr = arr.reverse();
      word = arr.join('');
      return word;
    }
  }


  encrypt(word, cypher) {
    if (word === undefined || cypher === undefined)
      throw new Error("Incorrect arguments!");

    let cypCount = 0;
    for (let i = 0; i < word.length; i++)
    {
      if ((word[i].charCodeAt() >= 65 && word[i].charCodeAt() <= 90) || (word[i].charCodeAt() >= 97 && word[i].charCodeAt() <= 122))
      {
        let sym;
        if (cypher[cypCount].charCodeAt() <=90)
          sym = word[i].charCodeAt() + cypher[cypCount].charCodeAt() - 65;
        else
          sym = word[i].charCodeAt() + cypher[cypCount].charCodeAt() - 97;
        if ((word[i].charCodeAt() <=90 && sym > 90) || (word[i].charCodeAt() <= 122 && word[i].charCodeAt() >= 97 && sym > 122))
          sym -= 26;
        if (word[i].charCodeAt() >= 97 && word[i].charCodeAt() <= 122)
          sym -= 32;
        let arr = word.split('');
        arr[i] = String.fromCharCode(sym);
        word = arr.join('');
        cypCount++;
        if (cypCount === cypher.length)
          cypCount = 0;
      }
    }
    if (this.straight)
      return word;
    else
    {
      let arr = word.split('');
      arr = arr.reverse();
      word = arr.join('');
      return word;
    }
  }

}

module.exports = {
  VigenereCipheringMachine
};
