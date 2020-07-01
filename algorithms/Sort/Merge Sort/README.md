# Merge Sort

> Merge sort recursively divides the input into halves until we reach the base case of input with 1 element. After that, it picks up the sorted sub-arrays and merges them to gradually sort the entire array.

Using the Divide and Conquer technique, we divide a problem into subproblems. When the solution to each subproblem is ready, we 'combine' the results from the subproblems to solve the main problem.

## How Merge Sort Works?

If it is only one element in the list it is already sorted, return.

Divide the list recursively into two halves until it can no more be divided.

Merge the smaller lists into new list in sorted order.

---

## Complexity

|  Worst Case   |   Best Case   | Average Case  |
| :-----------: | :-----------: | :-----------: |
| O(n \* log n) | O(n \* log n) | O(n \* log n) |

**Space complexity is O(n)**

---

## Merge Sort Applications

- Inversion count problem
- External sorting
- E-commerce applications
