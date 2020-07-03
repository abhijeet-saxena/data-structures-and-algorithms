# Heaps

> A Heap is a special Tree-based data structure in which the tree is a complete binary tree.

Generally, Heaps can be of two types:

- `Max-Heap` : In a Max-Heap the key present at the root node must be greatest among the keys present at all of it’s children. The same property must be recursively true for all sub-trees in that Binary Tree.
- `Min-Heap` : In a Min-Heap the key present at the root node must be minimum among the keys present at all of it’s children. The same property must be recursively true for all sub-trees in that Binary Tree.

## Binary Heaps

It’s a complete tree (All levels are completely filled except possibly the last level and the last level has all keys as left as possible). This property of Binary Heap makes them suitable to be stored in an array.

## Fibonacci Heaps

Fibonacci heap is a modified form of a binomial heap with more efficient heap operations than that supported by the binomial and binary heaps.

Unlike binary heap, a node can have more than two children.

The fibonacci heap is called a fibonacci heap because the trees are constructed in a way such that a tree of order n has at least Fn+2 nodes in it, where Fn+2 is the (n + 2)nd Fibonacci number.

## Operations

- `Heapify` : Heapify is the process of creating a heap data structure from a binary tree. It is used to create a Min-Heap or a Max-Heap
- `insert` : Insert an Element into Heap
- `remove` : Remove an Element from Heap
- `peek` : Peek operation returns the maximum element from Max Heap or minimum element from Min Heap without deleting the node
- `extract` : Extract-Max returns the node with maximum value after removing it from a Max Heap whereas Extract-Min returns the node with minimum after removing it from Min Heap

## Heap Applications

- Heap is used while implementing a priority queue.
- Dijkstra’s Algorithm
- Heap Sort
