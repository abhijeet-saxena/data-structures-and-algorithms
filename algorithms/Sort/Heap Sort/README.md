# Heap Sort

> Heap sort is a comparison based sorting technique based on Binary Heap data structure.

## How Heap Sort Works?

Since the tree satisfies Max-Heap property, then the largest item is stored at the root node.

**Swap**: Remove the root element and put at the end of the array (nth position) Put the last item of the tree (heap) at the vacant place.

**Remove**: Reduce the size of the heap by 1.

**Heapify**: Heapify the root element again so that we have the highest element at root.

The process is repeated until all the items of the list are sorted.

## Complexity

|  Worst Case   |   Best Case   | Average Case  |
| :-----------: | :-----------: | :-----------: |
| O(n \* log n) | O(n \* log n) | O(n \* log n) |

**Space complexity is O(1)**

## Heap Sort Applications

Systems concerned with security and embedded systems such as Linux Kernel use Heap Sort because of the O(n log n) upper bound on Heapsort's running time and constant O(1) upper bound on its auxiliary storage.

It's underlying data structure, heap, can be efficiently used if we want to extract the smallest (or largest) from the list of items without the overhead of keeping the remaining items in the sorted order.

For e.g Priority Queues.
