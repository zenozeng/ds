var BST = require('./bst');
var assert = require('assert');

var tree = new BST();

var data = [5, 3, 7, 9, 2, 4, 8, 6, 10, 1];

data.forEach(function(i) {
    tree.insert(i);
});

var dump = function(tree) {
    console.log(JSON.stringify(tree, null, 2));
};

dump(tree);

assert.equal(tree.max(), 10);
assert.equal(tree.min(), 1);
assert.equal(tree.getNode(6).data, 6);
assert.equal(JSON.stringify(tree.toArray()), JSON.stringify(data.sort(function(a, b) {
    return a - b;
})));
assert.equal(tree.nodeCount(), 10);
assert.equal(tree.edgeCount(), 9);

assert.equal(tree.removeNode(tree.getNode(7)), true);
dump(tree);
assert.equal(JSON.stringify(tree.toArray()), JSON.stringify([1, 2, 3, 4, 5, 6, 8, 9, 10]));
