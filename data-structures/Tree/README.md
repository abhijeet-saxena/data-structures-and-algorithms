# Trees

> ## A tree is a nonlinear hierarchical data structure that consists of nodes connected by edges. A tree is a data structure where a node can have zero or more children. Each node contains a value.

These data structures are called “trees” because the data structure resembles a tree 🌳.

## Tree Terminologies

- `Node` : A node is an entity that contains a key or value and pointers to its child nodes.

  1. `Leaf/External Node`: The last nodes of each path that do not contain a link/pointer to child nodes
  2. `Internal Node` : The node having at least a child

- `Edge` : It is the link between any two nodes.

- `Root` : It is the topmost node of a tree.

- `Height of a Node` : The height of a node is the number of edges from the node to the deepest leaf (ie. the longest path from the node to a leaf node).

- `Depth of a Node` : The number of edges from the root to the node.

- `Height of a Tree` : The height of the root node or the depth of the deepest node.

- `Degree of a Node` : The total number of branches of that node.

- `Forest` : A collection of disjoint trees is called a forest.

## Traversing a Tree

Traversing a tree means visiting every node in the tree. Depending on the order in which we do this, there can be three types of traversal:

- `Inorder traversal`

  1. First, visit all the nodes in the left subtree
  2. Then the root node
  3. Visit all the nodes in the right subtree

- `Preorder traversal`

  1. Visit root node
  2. Visit all the nodes in the left subtree
  3. Visit all the nodes in the right subtree

- `Postorder traversal`
  1. Visit all the nodes in the left subtree
  2. Visit all the nodes in the right subtree
  3. Visit the root node

## Types of Tree

- `Binary Tree` : A binary tree is a tree data structure in which each parent node can have at most two children.

- `Binary Search Tree` : Binary search tree is a data structure that quickly allows us to maintain a sorted list of numbers. It is called a search tree because it can be used to search for the presence of a number in O(log(n)) time.

- `AVL Tree` : AVL tree is a self-balancing binary search tree in which each node maintains extra information called a balance factor whose value is either -1, 0 or +1.

- `B Tree` : B tree is a special type of self-balancing search tree in which each node can contain more than one key and can have more than two children. It is a generalized form of the binary search tree.

- `B+ Tree` : A B+ tree is an advanced form of a self-balancing tree in which all the values are present in the leaf level. It has multilevel indexing, which makes accessing the data easier and faster.

- `Red-Black Tree` : Red-Black tree is a self-balancing binary search tree in which each node contains an extra bit for denoting the color of the node, either red or black. The limitations put on the node colors ensure that any simple path from the root to a leaf is not more than twice as long as any other such path. It helps in maintaining the self-balancing property of the red-black tree.

## Balanced Trees

A balanced binary tree is defined as a binary tree in which the height of the left and right subtree of any node differ by not more than 1. Following are the conditions for a height-balanced binary tree:

1. difference between he left and the right subtree for any node is not more than one
2. the left subtree is balanced
3. the right subtree is balanced

## Tree Applications

- Binary Search Trees(BSTs) are used to quickly check whether an element is present in a set or not.
- Heap is a kind of tree that is used for heap sort.
- A modified version of a tree called Tries is used in modern routers to store routing information.
- Most popular databases use B-Trees and T-Trees, which are variants of the tree structure we learned above to store their data
- Compilers use a syntax tree to validate the syntax of every program you write.
