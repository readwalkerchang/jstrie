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
  this.generateAlphabets = function(){
        let alphabets = [];
    var start = 'a'.charCodeAt(0); //the value is 97
    var last  = 'z'.charCodeAt(0); //the value is 122
    for (var i = start; i <= last; i++) {
      alphabets.push(String.fromCharCode(i));
    }
    return alphabets;
  }
  this.generateDict = function(){
    let alphabets = this.generateAlphabets();
    let dict = new Object();
    let i ;
    for(i =0;  i< alphabets.length ;i++ ){
      dict[alphabets[i]] = [];
    }
    return dict;
  }
  this.dictionary = this.generateDict();
};



/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */

//object[property].push(word);
//console.log(`${object[property]}`);
//The for...in statement iterates over all enumerable properties of an object that are keyed 
//Property accessors provide access to an object's properties by using the dot notation or the bracket notation.

Trie.prototype.insert = function(word) {
  let dict = this.dictionary;
  
  //these codes can be promise function
  for (const property in dict) {
    if(`${property}`=== word[0]){
      dict[property].push(word);
    }
  }

};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let lookup = false;
  let dict = this.dictionary;
  for (const property in dict) {
    if(`${property}`=== word[0]){
      dict[property].forEach(function(item) {
        if (item === word){
           lookup = true;
        }
    });
    }
  }
  return lookup;
};


module.exports = Trie; //export modules