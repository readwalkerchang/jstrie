var Trie = require('./Trie'); //Include Modules
var obj = new Trie();
obj.insert('apple');
obj.insert('orange');
obj.insert('banana');

console.log(obj.search('orange'));
