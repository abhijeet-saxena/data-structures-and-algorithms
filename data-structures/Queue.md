# Queues

> ## A Queue is a linear structure which follows a particular order in which the operations are performed. The order is `FIFO` (First In First Out). In a queue, we remove the item the least recently added.

## Operations

- `Enqueue` — Add an element to the end of the queue
- `Dequeue` — Remove an element from the front of the queue
- `Peek` — Get the value of the front of the queue without removing it
- `isEmpty` — Check if the queue is empty
- `isFull` — Check if the queue is full
- `size` — Returns size of queue

## How a Queue Works

- Two pointers called FRONT and REAR are used to keep track of the first and last elements in the queue.
- When initializing the queue, we set the value of FRONT and REAR to -1.
- On enqueuing an element, we increase the value of REAR index and place the new element in the position pointed to by REAR.
- On dequeuing an element, we return the value pointed to by FRONT and increase the FRONT index.
- Before enqueuing, we check if the queue is already full.
- Before dequeuing, we check if the queue is already empty.
- When enqueuing the first element, we set the value of FRONT to 0.
- When dequeuing the last element, we reset the values of FRONT and REAR to -1.

## Complexity

The complexity of enqueue and dequeue operations in a queue using an array is `O(1)`.

## Other Types Of Queue

- `Simple Queue` : In a simple queue, insertion takes place at the rear and removal occurs at the front. It strictly follows FIFO rule.

- `Circular Queue` : In a circular queue, the last element points to the first element making a circular link. The main advantage of a circular queue over a simple queue is better memory utilization. If the last position is full and the first position is empty then, an element can be inserted in the first position. This action is not possible in a simple queue.

- `Priority Queue` : A priority queue is a special type of queue in which each element is associated with a priority and is served according to its priority. If elements with the same priority occur, they are served according to their order in the queue.
  Insertion occurs based on the arrival of the values and removal occurs based on priority.

- `Double Ended Queue / Deque` : Double Ended Queue is a type of queue in which insertion and removal of elements can be performed from either from the front or rear. Thus, it does not follow FIFO rule (First In First Out).

## Queue Applications

- `Simple Queue` : CPU scheduling, Disk Scheduling, Handling of interrupts in real-time systems.
- `Circular Queue` : CPU scheduling, Memory management, Traffic Management
- `Priority Queue` : Dijkstra's algorithm, for implementing stack, for load balancing and interrupt handling in an operating system, for data compression in Huffman code
- `Deque` : In undo operations on softwares, To store history in browsers, For implementing both stacks and queues.

## Implementation

```js
class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  dequeue() {
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

const queue = new Queue();

queue.enqueue(1);
queue.dequeue();
queue.enqueue(2);
queue.enqueue(3);
```

## Implementation (Using in-built arrays)

```js
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
}
```
