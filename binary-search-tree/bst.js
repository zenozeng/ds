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

BST.prototype.max = function(root) {
    if(typeof root == "undefined") {
        root = this.root;
    }
    if(!root) {
        return null;
    } else {
        var currNode = root;
        while(currNode.right) {
            currNode = currNode.right;
        }
        return currNode;
    }
};

BST.prototype.min = function(root) {
    if(typeof root == "undefined") {
        root = this.root;
    }
    if(!root) {
        return null;
    } else {
        var currNode = root;
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

BST.prototype.getParentNode = function(data) {
    var currNode = this.root;
    var parentNode = null;
    while(currNode) {
        if(data > currNode) {
            parentNode = currNode;
            currNode = currNode.right;
        } else if (data < currNode) {
            parentNode = currNode;
            currNode = currNode.left;
        } else {
            return parentNode;
        }
    }
    return null;};

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

// remove 的关键在于要保证删除节点之后保留 BST 的特性
BST.prototype.removeNode = function(node) {
    if(!node) {
        return false; // node not exists
    }
    if(node == this.root) {
        this.root = null;
        return true;
    }
    var parentNode = this.getParentNode(node.data);
    if(!parentNode) {
        return false;
    }
    var setNode = function(val) {
        if(parentNode.left == node) {
            parentNode.left = val;
        } else {
            parentNode.right = val;
        }
    };
    if(!node.left && !node.right) {
        setNode(null);
        return true;
    }
    if(!node.left) {
        setNode(node.right);
        return true;
    } else if(!node.right) {
        setNode(node.left);
        return true;
    } else {
        var tmpNode = this.min(node.right);
        this.removeNode(tmpNode);
        tmpNode.left = node.left;
        tmpNode.right = node.right;
        setNode(tmpNode);
        return true;
    }
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
