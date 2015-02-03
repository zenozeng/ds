// 将后缀表达式（逆波兰表示法）转换为中缀表达式并计算之
// 基于 http://zh.wikipedia.org/wiki/逆波兰表示法 页面上的算法

// Time-stamp: <2015-02-03 20:38:14 Zeno Zeng>

var assert = require('assert');
var Stack = require('./stack');

var eval = function(exp) {
    var stack = new Stack();
    var op1, op2;
    exp.split(' ').forEach(function(atom) {
        if(atom === '+' || atom === '-' || atom === '*') {
            op2 = stack.pop();
            op1 = stack.pop();
            stack.push(global.eval([op1, atom, op2].join(' ')));
        } else {
            stack.push(atom);
        }
        console.log(stack);
    });
    return stack.pop();
};

// op1 op2 op
// 中缀表达式: 5 + ((1 + 2) * 4) - 3
// 后缀表达式: 5 1 2 + 4 * + 3 -

assert.equal(eval("5 1 2 + 4 * + 3 -"), 5 + ((1 + 2) * 4) - 3);
