// 二叉排序树（Binary Search Tree）（sorted binary tree）
// http://zh.wikipedia.org/wiki/%E4%BA%8C%E5%85%83%E6%90%9C%E5%B0%8B%E6%A8%B9
// 参考了《数据结构与算法JavaScript描述》二叉树和二叉查找树一章

// 若有左子树，则左子树 **所有** 节点的值均小于等于根节点的值
// 若有右子树，则右子树 **所有** 节点的值均大于等于根节点的值
// 没有 duplicate nodes

// Time-stamp: <2015-02-05 19:24:18 Zeno Zeng>

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
        var currNode = this.root;
        while(true) {
            if(data > currNode.data) {
                if(currNode.right) {
                    currNode = currNode.right;
                } else {
                    currNode.right = node;
                    return true; // insert successfully
                }
            } else if (data < currNode.data){
                if(currNode.left) {
                    currNode = currNode.left;
                } else {
                    currNode.left = node;
                    return true; // insert successfully
                }
            } else {
                // 节点已存在
                return false;
            }
        }
    } else {
        this.root = node;
        return true;
    }
};

BST.prototype.max = function() {
    if(!this.root) {
        return null;
    } else {
        var currNode = this.root;
        while(currNode.right) {
            currNode = currNode.right;
        }
        return currNode;
    }
};

BST.prototype.min = function() {
    if(!this.root) {
        return null;
    } else {
        var currNode = this.root;
        while(currNode.left) {
            currNode = currNode.left;
        }
        return currNode;
    }
};

BST.prototype.getNode = function(data) {
    var currNode = this.root;
    while(currNode) {
        if(data > currNode) {
            currNode = currNode.right;
        } else if (data < currNode) {
            currNode = currNode.left;
        } else {
            return currNode;
        }
    }
    return null;
};

// convert BST to array (in order)
BST.prototype.toArray = function() {
    var arr = [];
    var iter = function(node) {
        if(node) {
            iter(node.left);
            arr.push(node.data);
            iter(node.right);
        }
    };
    iter(this.root);
    return arr;
};

// todo
BST.prototype.removeNode = function() {
};

BST.prototype.nodeCount = function() {
    var count = 0;
    var iter = function(node) {
        if(node) {
            count++;
            iter(node.left);
            iter(node.right);
        }
    };
    iter(this.root);
    return count;
};

BST.prototype.edgeCount = function() {
    var count = 0;
    var iter = function(node) {
        if(node) {
            if(node.left) {
                count++;
                iter(node.left);
            }
            if(node.right) {
                count++;
                iter(node.right);
            }
        }
    };
    iter(this.root);
    return count;
};

module.exports = BST;
