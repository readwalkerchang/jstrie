


/**
 * Initialize your data structure here.
 */
var Trie = function(word, prefix, dictionary) {
    this.word = word;
    this.prefix = prefix;
    this.dictionary = [];
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    this.dictionary.push(word);
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let lookup = false;
    this.dictionary.forEach(function(item) {
        if (item === word){
            lookup = true;
        }
    });
    return lookup;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let lookup = false;
    this.dictionary.forEach(function(item) {
        if (item.startsWith(prefix) === true){
            lookup = true;
        }
    });
    return lookup;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
module.exports = Trie; //export modules