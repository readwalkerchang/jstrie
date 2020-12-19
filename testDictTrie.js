var Trie = require('./DictTrie.js'); //Include Modules
var trie = new Trie();
//Testing 3// pass

trie.insert('apple');
trie.insert('app');
trie.insert('banana');
trie.insert('orange');
console.log(trie.dictionary);


//Testing 2//pass
//trie.insert('apple');