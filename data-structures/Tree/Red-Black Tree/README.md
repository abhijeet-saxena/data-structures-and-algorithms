# Red-Black Tree

> Red-Black tree is a self-balancing binary search tree in which each node contains an extra bit for denoting the color of the node, either red or black.

The limitations put on the node colors ensure that any simple path from the root to a leaf is not more than twice as long as any other such path. It helps in maintaining the self-balancing property of the red-black tree.

Some of it's properties are:

- `Red/Black Property` : Every node is colored, either red or black.
- `Root Property` : The root is black.
- `Leaf Property` : Every leaf (NIL) is black.
- `Red Property` : If a red node has children then, the children are always black.
- `Depth Property`: For each node, any simple path from this node to any of its descendant leaf has the same black-depth (the number of black nodes).

## Operations

- `Rotation` : In rotation operation, the positions of the nodes of a subtree are interchanged. Rotation operation is used for maintaining the properties of a red-black tree when they are violated by other operations such as insertion and deletion.

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

- [`Insert`](https://www.programiz.com/dsa/insertion-in-a-red-black-tree) : While inserting a new node, the new node is always inserted as a RED node. After insertion of a new node, if the tree is violating the properties of the red-black tree then, we do the following operations.

  1. Recolor
  2. Rotation

- [`Delete`](https://www.programiz.com/dsa/deletion-from-a-red-black-tree) : This operation removes a node from the tree. After deleting a node, the red-black property is maintained again.

## Red-Black Tree Applications

- To implement finite maps
- To implement Java packages: java.util.TreeMap and java.util.TreeSet
- To implement Standard Template Libraries (STL) in C++: multiset, map, multimap
- In Linux Kernel
