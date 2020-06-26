class Stack {
  constructor() {
    this._length = 0;
    this._items = [];
  }

  push(value) {
    this._items.push(value);
    this._length++;
  }

  pop() {
    if (!this._length) return;
    else return this._items.splice(--this._length, 1);
  }

  peek() {
    return this._items[this._length];
  }

  size() {
    return this._length;
  }

  isEmpty() {
    return !this._length;
  }

  toString() {
    return JSON.stringify(this._items);
  }
}
