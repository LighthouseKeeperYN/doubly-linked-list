const Node = require('./node');

class LinkedList {
  constructor() {
    this.length = 0;
    this._head = null;
    this._tail = null;
  }

  append(data) {
    if (!this.length) {
      const node = new Node(data);
      this._head = node;
      this._tail = node;
    }
    else {
      const node = new Node(data, this._tail);
      this._tail.next = node;
      this._tail = node;
    }

    this.length++;
    return this
  }

  head() {
    return this._head === null ? null : this._head.data;
  }

  tail() {
    return this._tail === null ? null : this._tail.data;
  }

  at(index) {
    let result = this._tail;

    while (index++ < this.length - 1) {
      result = result.prev;
    }

    return result.data;
  }

  insertAt(index, data) {
    if (this.length === 0) {
      this.append(data);
    }
    else {
      let nodeToShift = this._tail;

      while (index++ < this.length - 1) {
        nodeToShift = nodeToShift.prev;
      }
  
      const node = new Node(data, nodeToShift.prev, nodeToShift);
      nodeToShift.prev = node;
      this.length++;
  
      return this
    }
  }

  isEmpty() {
    return !this.length;
  }

  clear() {
    this.length = 0;
    this._head = null;
    this._tail = null;

    return this
  }

  deleteAt(index) {
    if (this.length <= 1) this.clear();
    else {
      let result = this._tail;

      while (index++ < this.length - 1) {
        result = result.prev;
      }

      result.prev.next = result.next;
      result.next.prev = result.prev;
      this.length--;

    }

    return this
  }

  reverse() {
    let current = this._head;

    for (let i = 0; i < this.length; i++) {
      [current.next, current.prev] = [current.prev, current.next];
      current = current.prev;
    }

    [this._head, this._tail] = [this._tail, this._head];

    return this
  }


  indexOf(data) {
    let result = this._head;

    for (let i = 0; i < this.length; i++) {
      if (result.data === data) return i;
      result = result.next;
    }

    return -1;
  }
}

module.exports = LinkedList;
