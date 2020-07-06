# B+ Tree

> ## A B+ tree is an advanced form of a self-balancing tree in which all the values are present in the leaf level. It has multilevel indexing, which makes accessing the data easier and faster.

Some of of it's properties are:

- All leaves are at the same level.
- The root has at least two children.
- Each node except root can have a maximum of m children and at least m/2 children.
- Each node can contain a maximum of m - 1 keys and a minimum of ⌈m/2⌉ - 1 keys.

## Comparison between a B Tree and a B+ Tree

The data pointers are present only at the leaf nodes on a B+ tree whereas the data pointers are present in the internal, leaf or root nodes on a B-tree.

The leaves are not connected with each other on a B-tree whereas they are connected on a B+ tree.

Operations on a B+ tree are faster than on a B-tree

## Operations

- `Searching` : The following steps are followed to search for data in a B+ Tree of order m. Let the data to be searched be k.

  1. Start from the root node. Compare k with the keys at the root node [k1, k2, k3,......km - 1].
  2. If k < k1, go to the left child of the root node.
  3. Else if k == k1, compare k2. If k < k2, k lies between k1 and k2. So, search in the left child of k2.
  4. If k > k2, go for k3, k4,...km-1 as in steps 2 and 3.
  5. Repeat the above steps until a leaf node is reached.
  6. If k exists in the leaf node, return true else return false.

- [`Insert`](https://www.programiz.com/dsa/insertion-on-a-b-plus-tree) : Inserting an element into a B+ tree consists of three main events: searching the appropriate leaf, inserting the element and balancing/splitting the tree.

- [`Delete`](https://www.programiz.com/dsa/deletion-from-a-b-plus-tree) : Deleting an element on a B+ tree consists of three main events: searching the node where the key to be deleted exists, deleting the key and balancing the tree if required.

## Complexities

|          Search           |          Insert           |          Delete           |
| :-----------------------: | :-----------------------: | :-----------------------: |
| O(t \* log<sub>t</sub> n) | O(t \* log<sub>t</sub> n) | O(t \* log<sub>t</sub> n) |

Search complexity if using Binary Search will be O(log<sub>2</sub>t \* t \* log<sub>t</sub> n)

## B+ Tree Applications

- Multilevel Indexing
- Faster operations on the tree (insertion, deletion, search)
- Database indexing
