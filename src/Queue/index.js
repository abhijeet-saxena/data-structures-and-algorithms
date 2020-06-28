class Queue {
  constructor() {
    this._size = 0;
    this._items = [];
  }

  enqueue(value) {
    this._items.push(value);
    this._size++;
  }

  dequeue() {
    if (!this._size) return;
    else {
      this._size--;
      return this._items.splice(0, 1);
    }
  }

  isEmpty() {
    return !this._size;
  }

  size() {
    return this._size;
  }

  front() {
    return this._items[0];
  }

  rear() {
    return this._items[this._size - 1];
  }

  toString() {
    return JSON.stringify(this._items);
  }
}
