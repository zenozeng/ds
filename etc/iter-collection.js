var source = [
    [0, 1],
    [0, 1, 2],
    [0, 1, 2, 3]
];

var collection = [];

var iter = function(chain, todo) {
    if(todo.length === 0) {
        collection.push(chain);
    } else {
        todo = todo.concat();
        todo.pop().forEach(function(elem) {
            iter(chain.concat(elem), todo);
        });
    }
};

iter([], source);
