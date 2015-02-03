// Time-stamp: <2015-02-03 22:13:09 Zeno Zeng>

function Node(data) {
    this.data = data;
    this.next = null;
}

function CircularLinkedList() {
    this.head = new Node('head');
    this.head.next = this.head;
}

CircularLinkedList.prototype.find = function(item) {
    var curr = this.head;
    while(curr.next != this.head) {
        if(curr.data == item) {
            return curr;
        }
        curr = curr.next;
    }
    return null;
};

CircularLinkedList.prototype.insert = function(prev, data) {
    prev = this.find(prev);
    var curr = new Node(data);
    curr.next = prev.next;
    prev.next = curr;
};

module.exports = CircularLinkedList;
