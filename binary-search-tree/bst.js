// 二叉排序树（Binary Search Tree）（sorted binary tree）
// http://zh.wikipedia.org/wiki/%E4%BA%8C%E5%85%83%E6%90%9C%E5%B0%8B%E6%A8%B9
// 参考了《数据结构与算法JavaScript描述》二叉树和二叉查找树一章

// Time-stamp: <2015-02-05 16:32:12 Zeno Zeng>

function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

Node.prototype.toString = function() {
    return this.data.toString();
};

function BST() {
    this.root = null;
}

BST.prototype.insert = function(data) {
    var node = new Node(data);
    if(this.root) {
        // todo
    } else {
        this.root = node;
    }
};
