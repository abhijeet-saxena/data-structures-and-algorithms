# Linked Lists

> ## A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list.

The address of the first node a special name called `HEAD`. For the last node, its next portion points to `NULL`.

## Operations

- `add` : Adds an item to the Linked List
- `remove` : Removes an item from the Linked List. (same order in which they are pushed)
- `isEmpty` : Returns true if Linked List is empty, else false
- `sizeOf` : Returns size of Linked List
- `head` : points to the first node of the linked list
- `tail` : points to the last node of the linked list

## How a Linked List Works

- A linked list is a series of connected "nodes" that contains the "address" of the next node.
- Each node can store a data point which may be a number, a string or any other type of data.
- Each struct node has a data item and a pointer to another struct node.

- If we want to put an element between 1 and 2, the steps would be:
  1.  Create a new node and allocate memory to it.
  2.  Add its data value.
  3.  Point its next pointer to the struct node containing next data value.
  4.  Change the next pointer to the node we just created.

## Complexity

|          | Worst case | Average Case |
| :------: | :--------: | :----------: |
|  Search  |    O(n)    |     O(n)     |
|  Insert  |    O(1)    |     O(1)     |
| Deletion |    O(1)    |     O(1)     |

Space Complexity: `O(n)`

## Types of Linked List :

- `Singly Linked List` : Every node stores address or reference of next node in list and the last node has next address or reference as NULL. For example, 1->2->3->4->NULL

- `Doubly Linked List` : There are two references associated with each node, One of the reference points to the next node and one to the previous node. Advantage of this data structure is that we can traverse in both the directions and for deletion we don’t need to have explicit access to previous node. For example, NULL<-1<->2<->3->NULL

- `Circular Linked List` : All nodes are connected to form a circle. There is no NULL at the end. Advantage of this data structure is that any node can be made as starting node. This is useful in implementation of circular queue in linked list.
  For example, 1->2->3->1 [The next pointer of last node is pointing to the first]

## Linked List Applications

- Dynamic memory allocation
- Implemented in stack and queue
- In undo functionality of softwares
- Hash tables, Graphs

## Implementation (Singly Linked List)

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  traverse() {
    let curr = this.head;

    while (curr) {
      console.log(curr.val);
      curr = curr.next;
    }
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current.val;
  }

  shift() {
    if (!this.head) return undefined;

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let count = 0;
    let current = this.head;

    while (count !== index) {
      current = current.next;
      count++;
    }

    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const prev = this.get(index - 1);
    const nextNode = prev.next;

    prev.next = newNode;
    newNode.next = nextNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.shift(val);
    if (index === this.length - 1) return this.pop(val);

    const prev = this.get(index - 1);
    const removedNode = prev.next;
    prev.next = removedNode.next;

    this.length--;
    return removedNode;
  }

  reverse() {
    let curr = this.head;
    this.head = this.tail;
    this.tail = curr;

    let prev = null;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      next = curr.next;
      curr.next = prev;

      prev = current;
      current = next;
    }
  }
}

const list = new SinglyLinkedList();

list.push("Hello");
list.push("Good Bye");
list.pop();
list.push("!");
list.pop();

list.traverse();
```

## Implementation (Doubly Linked List)

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    const popped = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popped.prev;
      this.tail.next = null;
      popped.prev = null;
    }

    this.length--;
    return popped;
  }

  shift() {
    if (!this.head) return undefined;

    const currentHead = this.head;
    this.head = currentHead.next;
    this.head.prev = null;
    currentHead.next = null;

    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.head.prev = null;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    const fromStart = index < this.length / 2;
    let count = fromStart ? 0 : this.length - 1;
    let current = fromStart ? this.head : this.tail;

    while (count !== index) {
      current = fromStart ? current.next : current.prev;
      count += fromStart ? 1 : -1;
    }

    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift(val);
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;

    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }
}

const list = new DoublyLinkedList();

list.push("Hello");
```
