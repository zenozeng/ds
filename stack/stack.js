function Stack() {
    this.data = [];
    this.top = -1; // 栈指针
}

Stack.prototype.push = function(elem) {
    this.data[++this.top] = elem; // 栈指针先加一，再入栈
};

Stack.prototype.pop = function() {
    if(this.top < 0) {
        return null;
    }
    var elem = this.data.splice(this.top, 1)[0];
    this.top--;
    return elem; // 先返回值，再修改栈指针
};

Stack.prototype.peek = function() {
    return this.data[this.top];
};

Stack.prototype.clear = function() {
    this.data = [];
    this.top = 0;
};

module.exports = Stack;
