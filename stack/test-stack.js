// Time-stamp: <2015-02-03 20:03:49 Zeno Zeng>

var Stack = require('./stack');

var stack = new Stack;

console.log("test push");

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.data);

console.log("test peek");

console.log(stack.peek());

console.log("test pop");

console.log(stack.pop());

console.log(stack.data);

console.log(stack.pop());

console.log(stack.data);

console.log(stack.pop());

console.log(stack.data);

console.log(stack.pop());

console.log(stack.data);
