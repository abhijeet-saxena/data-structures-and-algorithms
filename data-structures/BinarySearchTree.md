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

## Implementation

```js
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      while (true) {
        if (val === current.val) return undefined;
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  find(val) {
    if (!this.root) return false;

    let current = this.root;

    while (current) {
      if (val === current.val) return true;
      current = val < current.val ? current.left : current.right;
    }

    return false;
  }

  bfs() {
    const visited = [];
    const queue = [];
    queue.push(this.root);

    while (queue.length > 0) {
      let popped = queue.shift();
      visited.push(popped.val);
      if (popped.left) queue.push(popped.left);
      if (popped.right) queue.push(popped.right);
    }
    return visited;
  }

  dfs_pre_order() {
    const visited = [];

    function traverse(node) {
      visited.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return visited;
  }

  dfs_post_order() {
    const visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.val);
    }

    traverse(this.root);
    return visited;
  }

  dfs_in_order() {
    const visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.val);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return visited;
  }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(11);
tree.insert(3);
tree.insert(8);
tree.insert(20);

//              10
//          6        15
//        3   8    11  20

console.log(tree);

tree.bfs(); // [10,6,15,3,8,11,20]
tree.dfs_pre_order(); // [10,6,3,8,15,11,20]
tree.dfs_post_order(); // [3,8,6,11,20,15,10]
tree.dfs_in_order(); // [3,6,8,10,11,15,20]
```
