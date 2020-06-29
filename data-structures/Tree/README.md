# Trees

A tree is a data structure where a node can have **zero or more** children. Each node contains a value.

These data structures are called “trees” because the data structure resembles a tree 🌳.

It starts with a **root node** and branch off with its descendants, and finally, there are **leaves**.

Here are some properties of trees:

1. The top-most node is called **root**.
2. A node without children is called **leaf node** or **terminal node**.
3. **Height** (h) of the tree is the distance (edge count) between the farthest leaf to the root.
4. **Depth** or **level** of a node is the distance between the root and the node in question.

---

## Binary Search Trees

Trees nodes can have zero or more children. However, when a tree has at the most two children, then it’s called binary tree.

Binary Search Trees or BST for short are a particular application of binary trees. BST has at most two nodes (like all binary trees). However, the values are in such a way that the left children value must be less than the parent, and the right children is must be higher.

---

## Balanced vs. Non-balanced Trees

A tree is balanced if:

The left subtree height and the right subtree height differ by at most 1. Visit every node making sure rule #1 is satisfied.

Remember, _Height of a node is the distance (edge count) from the farthest child to itself._

### Rotations

1. Left Rotation

```
1*                                        2
 \                                       /  \
  2     ---| left-rotation(1) |-->      1*   3
   \
    3
```

2. Right Rotation

```
      4                                        4
     /                                        /
    3*                                       2
   /                                        /  \
  2       ---| right-rotation(3) |-->      1    3*
 /
1
```

3. Left-Right Rotation

```
  3*                                       2*
 /                                        /  \
1    --| left-right-rotation(3) |->      1    3
 \
  2
```

4. Right-Left Rotation

```
1*                           1*
 \                            \                              2
   3   -right-rotation(3)->    2   -left-rotation(1)->      /  \
 /                              \                          1*   3
2                                3
```

---

## AVL Tree

AVL Tree was the first self-balanced tree invented. It is named after the two inventors Adelson-Velsky and Landis. In their self-balancing algorithm if one subtree differs from the other by at most one, then rebalancing is done using rotation
