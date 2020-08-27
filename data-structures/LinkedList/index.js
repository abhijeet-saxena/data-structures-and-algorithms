class Node {
  constructor(value) {
    this.prev = null; //Useful only for Doubly-linkedList
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this._size = 0;
    this._head = null;
  }

  insert(value) {
    let head = this._head;
    if (!head) this._head = new Node(value);
    else {
      while (head.next !== null) {
        head = head.next;
      }
      head.next = new Node(value);
    }

    this._size++;
  }

  insertAt(value, index) {
    let newNode = new Node(value);

    if (this._size === 0) {
      this._head = newNode;
      this._size++;
      return true;
    }

    let head = this._head;
    let count = 0;

    if (count === index) {
      newNode.next = this._head;
      this._head = newNode;
      this._size++;
      return true;
    }

    count++;
    while (head.next !== null) {
      if (index === count) {
        newNode.next = head.next;
        head.next = newNode;
        this._size++;
        return true;
      }
      head = head.next;
      count++;
    }

    newNode.next = head.next;
    head.next = newNode;
    this._size++;
    return true;
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

  indexOf(value) {
    let node = this._head;
    let count = 0;
    if (node && node.value === value) return count;
    count++;
    while (node && node.next) {
      node = node.next;
      if (node.value === value) return count;
      count++;
    }
    return -1;
  }

  removeFrom(index) {
    let val = false;

    if (index === 0) {
      val = this._head.value;
      this._head = this._head.next ? this._head.next : null;
      this._size--;
      return val;
    }

    let count = 0;
    let head = this._head;
    while (head.next !== null) {
      if (++count === index) {
        val = head.next.value;
        head.next = head.next.next ? head.next.next : null;
        this._size--;
        return val;
      }
      head = head.next;
    }

    return false;
  }

  removeElement(element) {
    let head = this._head;

    if (head && head.value === element) {
      this._head = head.next ? head.next : null;
      this.size--;
      return true;
    }

    while (head.next !== null) {
      if (head.next.value === element) {
        head.next = head.next.next ? head.next.next : null;
        this._size--;
        return true;
      }
      head = head.next;
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
}
