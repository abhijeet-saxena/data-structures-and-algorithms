# Priority Queue

> ## A priority queue is a special type of queue in which each element is associated with a priority and is served according to its priority. If elements with the same priority occur, they are served according to their order in the queue..

## PriorityQueue Applications

Dijkstra's algorithm, for implementing stack, for load balancing and interrupt handling in an operating system, for data compression in Huffman code

## Implementation

```js
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const elem = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (elem.priority > parent.priority) break;
      this.values[parentIndex] = elem;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  sinkDown() {
    let index = 0;
    const elem = this.values[0];
    let length = this.values.length;

    while (index !== null) {
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      let swapIndex = null;

      if (
        leftIndex < length &&
        elem.priority > this.values[leftIndex].priority
      ) {
        swapIndex = leftIndex;
      }

      if (
        rightIndex < length &&
        elem.priority > this.values[rightIndex].priority
      ) {
        swapIndex =
          this.values[rightIndex] > this.values[leftIndex]
            ? rightIndex
            : leftIndex;
      }

      if (swapIndex == null) break;

      this.values[index] = this.values[swapIndex];
      this.values[swapIndex] = elem;

      index = swapIndex;
    }
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();

    if (this.values.length) {
      this.values[0] = end;
      this.sinkDown();
    }

    return min;
  }
}

const pQueue = new PriorityQueue();

pQueue.enqueue("common cold", 5);
pQueue.enqueue("gunshot wound", 1);
pQueue.enqueue("common cold 2", 5);
pQueue.enqueue("high fever", 4);
pQueue.enqueue("COVID", 0);

console.log(pQueue);

pQueue.dequeue(); // ["COVID", 0]
pQueue.dequeue(); // ["gunshot wound",1]

console.log(pQueue);
```
