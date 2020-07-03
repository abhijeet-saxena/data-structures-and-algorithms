# Linked Lists

> A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list.

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
