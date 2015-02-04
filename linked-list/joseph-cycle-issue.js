// n 人围成圈，从一个人开始数，数到第 m 人将其杀死，然后循环，计算存活位置
// Time-stamp: <2015-02-04 12:55:26 Zeno Zeng>

var n = 41;
var m = 3;

function Node(data) {
    this.data = data;
    this.next = null;
}

// 创建单向循环列表

var head = new Node(1);
var nodes = [head];
for(var i = 2, node; i <= n; i++) {
    node = new Node(i);
    nodes[nodes.length - 1].next = node;
    nodes.push(node);
}
nodes[nodes.length - 1].next = head;

// 模拟约瑟夫环运行

var count = 0;
var prev = nodes[nodes.length - 1];
var curr = head;
var life = n;
while(life >= m) {
    count++;
    if(count % 3 === 0) {
        life--;
        prev.next = curr.next; // delete current node
        curr = curr.next;
    } else {
        prev = prev.next;
        curr = curr.next;
    }
}

// print results

head = curr;
do {
    console.log(curr);
    curr = curr.next;
} while( curr != head );
