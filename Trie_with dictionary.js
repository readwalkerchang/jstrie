function generateAlphabets() {
    let alphabets = [];
    var start = 'a'.charCodeAt(0); //the value is 97
    var last  = 'z'.charCodeAt(0); //the value is 122
    for (var i = start; i <= last; i++) {
      alphabets.push(String.fromCharCode(i));
    }
    return alphabets;
  }
  
  //charCodeAt method return the Unicode of the first character in a string
  //fromCharCode method convert a Unicode number into a character
  //implement an object with 26 alphabats key(properties) of empty array
  function generateDict(){
    let alphabets = generateAlphabets();
    let dict = new Object();
    let i ;
    for(i =0;  i< alphabets.length ;i++ ){
      dict[alphabets[i]] = [];
    }
    return dict;
  }

  
 /**
 * Initialize your data structure here.
 */
var Trie = function(word, prefix, dictionary) {
  this.word = word;
  this.prefix = prefix;
  this.dictionary = generateDict();
};
console.log(generateDict());
module.exports = Trie; //export modules