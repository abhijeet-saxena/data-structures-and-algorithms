# Bubble Sort

> Bubble sort is an algorithm that compares the adjacent elements and swaps their positions if they are not in the intended order.

## How Bubble Sort Works?

Starting from the first index, compare the first and the second elements. If the first element is greater than the second element, they are swapped. Now, compare the second and the third elements. Swap them if they are not in order.

The above process goes on until the last element.
Bubble Sort Steps
Compare the adjacent elements
The same process goes on for the remaining iterations. After each iteration, the largest element among the unsorted elements is placed at the end.

In each iteration, the comparison takes place up to the last unsorted element.

The array is sorted when all the unsorted elements are placed at their correct positions.

---

## Optimized Bubble Sort

In tnormal bubble sort, all possible comparisons are made even if the input is already sorted. It increases the execution time.

The code can be optimized by introducing an extra variable swapped. After each iteration, if there is no swapping taking place then, there is no need for performing further loops.

In such a case, variable swapped is set false. Thus, we can prevent further iterations.

---

## Complexity

Bubble Sort is one of the simplest sorting algorithms. Two loops are implemented in the algorithm.

|    Worst Case    | Best Case |   Average Case   |
| :--------------: | :-------: | :--------------: |
| O(n<sup>2</sup>) |   O(n)    | O(n<sup>2</sup>) |

**Space complexity is O(1)** because an extra variable temp is used for swapping. (O(2) for optimized algorithm).

---

## Bubble Sort Applications

Bubble sort is used in the following cases where -

- the complexity of the code does not matter.
- a short code is preferred.
