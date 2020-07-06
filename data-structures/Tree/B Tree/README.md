# B Tree

> ## B tree is a special type of self-balancing search tree in which each node can contain more than one key and can have more than two children. It is a generalized form of the binary search tree.

It is also known as a height-balanced m-way tree.

Some of of it's properties are:

- For each node x, the keys are stored in increasing order.
- In each node, there is a boolean value x.leaf which is true if x is a leaf.
- If n is the order of the tree, each internal node can contain at most n - 1 keys along with a pointer to each child.
- Each node except root can have at most n children and at least n/2 children.
- All leaves have the same depth (i.e. height-h of the tree).
- The root has at least 2 children and contains a minimum of 1 key.
- If n ≥ 1, then for any n-key B-tree of height h and minimum degree t ≥ 2, h ≥ logt (n+1)/2

## Why B Tree?

Other data structures such as a binary search tree, avl tree, red-black tree, etc can store only one key in one node. If you have to store a large number of keys, then the height of such trees becomes very large and the access time increases.

However, B-tree can store many keys in a single node and can have multiple child nodes. This decreases the height significantly allowing faster disk accesses.

## Operations

- `Searching` : Searching for an element in a B-tree is the generalized form of searching an element in a Binary Search Tree. The following steps are followed.

  1. Starting from the root node, compare k with the first key of the node. If k = the first key of the node, return the node and the index.
  2. If k.leaf = true, return NULL (i.e. not found).
  3. If k < the first key of the root node, search the left child of this key recursively.
  4. If there is more than one key in the current node and k > the first key, compare k with the next key in the node. If k < next key, search the left child of this key (ie. k lies in between the first and the second keys). Else, search the right child of the key.
  5. Repeat steps 1 to 4 until the leaf is reached.

- [`Insert`](https://www.programiz.com/dsa/insertion-into-a-b-tree) : Inserting an element on a B-tree consists of two events: searching the appropriate node to insert the element and splitting the node if required.Insertion operation always takes place in the bottom-up approach.

- [`Delete`](https://www.programiz.com/dsa/deletion-from-a-b-tree) : Deleting an element on a B-tree consists of three main events: searching the node where the key to be deleted exists, deleting the key and balancing the tree if required. While deleting a tree, a condition called underflow may occur. Underflow occurs when a node contains less than the minimum number of keys it should hold.

## Complexities

### Search Time Complexity

|  Worst   |   Best   | Average  |
| :------: | :------: | :------: |
| O(log n) | O(log n) | O(log n) |

### Deletion Time Complexity

| Worst |   Best   | Average |
| :---: | :------: | :-----: |
| O(n)  | O(log n) |  O(n)   |

### Search Space Complexity

| Worst | Average |
| :---: | :-----: |
| O(n)  |  O(n)   |

## B Tree Applications

- databases and file systems
- to store blocks of data (secondary storage media)
- multilevel indexing
