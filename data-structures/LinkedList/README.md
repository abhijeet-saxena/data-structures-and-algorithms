# Linked Lists

A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list.

Mainly the following basic operations are performed in Linked List:

- add: Adds an item to the Linked List.
- remove: Removes an item from the Linked List. (same order in which they are pushed)
- isEmpty: Returns true if Linked List is empty, else false.
- sizeOf: Returns size of Linked List.
- Head: Get the first item from Linked List.
- Tail: Get the last item from Linked List.

Types of Linked List :

1. **Singly Linked List** : Every node stores address or reference of next node in list and the last node has next address or reference as NULL. For example, 1->2->3->4->NULL

2. **Doubly Linked List** : There are two references associated with each node, One of the reference points to the next node and one to the previous node.
   Advantage of this data structure is that we can traverse in both the directions and for deletion we don’t need to have explicit access to previous node.
   For example, NULL<-1<->2<->3->NULL

3. **Circular Linked List** : All nodes are connected to form a circle. There is no NULL at the end. Advantage of this data structure is that any node can be made as starting node. This is useful in implementation of circular queue in linked list.
   For example, 1->2->3->1 [The next pointer of last node is pointing to the first]
