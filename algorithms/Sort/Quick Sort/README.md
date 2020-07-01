# Quick Sort

> Quicksort is an algorithm based on divide and conquer approach in which the array is split into subarrays and these sub-arrays are recursively called to sort the elements.

Using the Divide and Conquer technique, we divide a problem into subproblems. When the solution to each subproblem is ready, we 'combine' the results from the subproblems to solve the main problem.

## How Quick Sort Works?

A pivot element is chosen from the array. You can choose any element from the array as the pivot element.

The elements smaller than the pivot element are put on the left and the elements greater than the pivot element are put on the right.

The process goes on until the second last element is reached.

Pivot elements are again chosen for the left and the right sub-parts separately. Within these sub-parts, the pivot elements are placed and previous steps are repeated.

The sub-parts are again divided into smaller sub-parts until each subpart is formed of a single element.
At this point, the array is already sorted.
Quicksort uses recursion for sorting the sub-parts.

---

## Complexity

If pivot element lies in an extreme end of the sorted array, One sub-array is always empty and another sub-array contains n - 1 elements. Thus, quicksort is called only on this sub-array.

However, the quick sort algorithm has better performance for scattered pivots.

|    Worst Case    |   Best Case   | Average Case  |
| :--------------: | :-----------: | :-----------: |
| O(n<sup>2</sup>) | O(n \* log n) | O(n \* log n) |

**Space complexity is O(log n)**

---

## Quick Sort Applications

Quicksort is implemented when

- the programming language is good for recursion
- time complexity matters
- space complexity matters
