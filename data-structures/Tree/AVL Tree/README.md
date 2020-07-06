# AVL Tree

> ## AVL tree is a self-balancing binary search tree in which each node maintains extra information called a balance factor whose value is either -1, 0 or +1.

AVL tree got its name after its inventor Georgy Adelson-Velsky and Landis.

## Balance Factor

Balance factor of a node in an AVL tree is the difference between the height of the left subtree and that of the right subtree of that node.

`Balance Factor = (Height of Left Subtree - Height of Right Subtree)` or vice-versa

The self balancing property of an avl tree is maintained by the balance factor. The value of balance factor should always be -1, 0 or +1.

## Operations

- `Rotation` :In rotation operation, the positions of the nodes of a subtree are interchanged.

  - Left Rotate : In left-rotation, the arrangement of the nodes on the right is transformed into the arrangements on the left node.

  ```
      1*                                        2
      \                                       /  \
      2     ---| left-rotation(1) |-->      1*   3
      \
        3
  ```

  - Right Rotate : In right-rotation, the arrangement of the nodes on the left is transformed into the arrangements on the right node.

  ```
            4                                        4
          /                                        /
          3*                                       2
        /                                        /  \
        2       ---| right-rotation(3) |-->      1    3*
      /
      1
  ```

  - Left-Right Rotate : In left-right rotation, the arrangements are first shifted to the left and then to the right.

  ```
        3*                                       2*
      /                                        /  \
      1    --| left-right-rotation(3) |->      1    3
      \
        2
  ```

  - Right-Left Rotate : In right-left rotation, the arrangements are first shifted to the right and then to the left.

  ```
      1*                           1*
      \                            \                              2
        3   -right-rotation(3)->    2   -left-rotation(1)->      /  \
      /                              \                          1*   3
      2                                3
  ```

- `Insert` : A newNode is always inserted as a leaf node with balance factor equal to 0.

- `Delete` : A node is always deleted as a leaf node. After deleting a node, the balance factors of the nodes get changed. In order to rebalance the balance factor, suitable rotations are performed.

## Complexities

If n is the number of nodes in the tree.

| Insertion |  Delete  |  Search  |
| :-------: | :------: | :------: |
| O(log n)  | O(log n) | O(log n) |

## AVL Tree Applications

- For indexing large records in databases
- For searching in large databases
