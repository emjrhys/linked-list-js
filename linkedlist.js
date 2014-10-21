function LinkedList() {
    this.head = null;
    this.length = 0;
}

function Node(value) {
    this.elem = value;
    this.next = null;
}

LinkedList.prototype.insert = function insertNode(value, index) {
    index = typeof index !== 'undefined' ? index : this.length;
    if (value === 'undefined') return null;

    if (index > this.length || index < 0) return null;
    else if (index == 0) {
        var curr = this.head;
        this.head = new Node(value);
        this.head.next = curr;
        this.length = this.length + 1;
        return this.head;
    }

    var curr = this.head;
    for (var i = 1; i < index; i++)
        curr = curr.next;

    var next = curr.next;
    curr.next = new Node(value);
    curr.next.next = next;
    
    this.length = this.length + 1;
    return curr.next;
}

LinkedList.prototype.remove = function removeNode(index) {
    index = typeof index !== 'undefined' ? index : this.length;

    if (index >= this.length || index < 0) return null;

    if (index == 0) {
        var curr = this.head;
        this.head = this.head.next;
        this.length = this.length - 1;
        return curr;
    } 

    var curr = this.head;
    for (var i = 0; i < index-1; i++)
        curr = curr.next;

    var tmp = curr.next;
    curr.next = curr.next.next;
    this.length = this.length - 1;
    return tmp;
}

LinkedList.prototype.peek = function peekNode(index) {
    index = typeof index !== 'undefined' ? index : 0;

    if (index >= this.length || index < 0) return null;
    var curr = this.head;
    for (var i = 0; i < index; i++)
        curr = curr.next;

    return curr;
}
