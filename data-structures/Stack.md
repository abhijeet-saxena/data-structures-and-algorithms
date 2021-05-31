# Stacks

> ## Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be `LIFO`(Last In First Out) or `FILO`(First In Last Out).

## Operations

- `Push`: Add an element to the top of a stack
- `Pop`: Remove an element from the top of a stack
- `Peek`: Get the value of the top element without removing it
- `isEmpty`: Check if the stack is empty
- `isFull`: Check if the stack is full
- `size`: Returns size of stack

## How a Stack Works

- A pointer called TOP is used to keep track of the top element in the stack.
- When initializing the stack, we set its value to -1 so that we can check if the stack is empty by comparing TOP == -1.
- On pushing an element, we increase the value of TOP and place the new element in the position pointed to by TOP.
- On popping an element, we return the element pointed to by TOP and reduce its value.
- Before pushing, we check if the stack is already full
- Before popping, we check if the stack is already empty

## Complexity

For array based implementation of a stack, the push and pop operations take constant time i.e. `O(1)` because there is only a movement of pointer in both the cases.

## Stack Applications

- To reverse a word - Put all the letters in a stack and pop them out. Because of the LIFO order of stack, you will get the letters in reverse order.
- In compilers - Compilers use the stack to calculate the value of expressions like 2 + 4 / 5 \* (7 - 9) by converting the expression to prefix or postfix form.
- In browsers - The back button in a browser saves all the URLs you have visited previously in a stack. Each time you visit a new page, it is added on top of the stack. When you press the back button, the current URL is removed from the stack and the previous URL is accessed.

## Implementation

```js
class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    return ++this.size;
  }

  pop() {
    if (this.size === 0) return undefined;
    const temp = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.size--;
    return temp.val;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
```

## Implementation (Using in-built arrays)

```js
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
}
```
