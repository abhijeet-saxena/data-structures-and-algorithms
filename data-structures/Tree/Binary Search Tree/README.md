# Binary Search Tree

> ## Binary search tree is a data structure that quickly allows us to maintain a sorted list of numbers. It is called a search tree because it can be used to search for the presence of a number in O(log(n)) time.

The properties that separate a binary search tree from a regular binary tree are:

1. All nodes of left subtree are less than the root node
2. All nodes of right subtree are more than the root node
3. Both subtrees of each node are also BSTs i.e. they have the above two properties

## Operations

- `Search` : The algorithm depends on the property of BST that if each left subtree has values below root and each right subtree has values above the root.

  - If the value is below the root, we can say for sure that the value is not in the right subtree; we need to only search in the left subtree and if the value is above the root, we can say for sure that the value is not in the left subtree; we need to only search in the right subtree.
  - If the value is found, we return the value so that it gets propagated in each recursion step as shown in the image below.
  - If the value is not found, we eventually reach the left or right child of a leaf node which is NULL and it gets propagated and returned.

- `Insert` : We keep going to either right subtree or left subtree depending on the value and when we reach a point left or right subtree is null, we put the new node there.

- `Delete` : There are three cases for deleting a node from a binary search tree.
  - In the first case, the node to be deleted is the leaf node. In such a case, simply delete the node from the tree.
  - In the second case, the node to be deleted lies has a single child node. In such a case follow the steps below:
    1. Replace that node with its child node.
    2. Remove the child node from its original position.
  - In the third case, the node to be deleted has two children. In such a case follow the steps below:
    1. Get the inorder successor of that node.
    2. Replace the node with the inorder successor.
    3. Remove the inorder successor from its original position.

## Complexities

If n is the number of nodes in the tree.

| Operation | Best Case Complexity | Average Case Complexity | Worst Case Complexity |
| :-------: | :------------------: | :---------------------: | :-------------------: |
|  Search   |       O(log n)       |        O(log n)         |         O(n)          |
| Insertion |       O(log n)       |        O(log n)         |         O(n)          |
| Deletion  |       O(log n)       |        O(log n)         |         O(n)          |

The space complexity for all the operations is O(n).

## Binary Search Tree Applications

- In multilevel indexing in the database
- For dynamic sorting
- For managing virtual memory areas in Unix kernel
