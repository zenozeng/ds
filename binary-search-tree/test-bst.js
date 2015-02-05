var BST = require('./bst');

var tree = new BST();

tree.insert(5);
for(var i = 0; i < 10; i++) {
    tree.insert(i);
}

console.log(JSON.stringify(tree, null, 4));
