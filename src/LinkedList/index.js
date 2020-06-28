// This is each node in LL
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// This is LL
class LinkedList {
  constructor() {
    this._size = 0;
    this._head = null;
    this._tail = null;
  }

  add(value) {
    let node = new Node(value);
    if (this._head === null) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      this._tail = node;
    }

    this._size++;
  }

  contains(value) {
    let node = this._head;
    if (node.value === value) return true;
    while (node.next) {
      node = node.next;
      if (node.value === value) return true;
    }
    return false;
  }

  remove(element) {
    if (this._head.value === element) {
      this._head = this._head.next || null;
      this._tail = this._size > 1 ? this._tail : null;
      this._size--;
      return true;
    }

    let prevNode = this._head;
    while (prevNode.next) {
      let currNode = prevNode.next;
      if (currNode.value === element) {
        prevNode.next = currNode.next || null;
        if (!prevNode.next) this._tail = prevNode;
        this._size--;
        return true;
      }
      prevNode = currNode;
    }

    return false;
  }

  isEmpty() {
    return !this._size;
  }

  sizeOf() {
    return this._size;
  }

  toString() {
    let opArray = [];
    if (this._size) {
      let node = this._head;
      opArray.push(node.value);
      while (node.next) {
        node = node.next;
        opArray.push(node.value);
      }
    }
    return JSON.stringify(opArray);
  }
  // insertAt(element, location)
  // removeFrom(location)
}
