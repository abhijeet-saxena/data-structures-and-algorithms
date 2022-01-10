# Quick Sort

> ## Quicksort is an algorithm based on divide and conquer approach in which the array is split into subarrays and these sub-arrays are recursively called to sort the elements.

Using the Divide and Conquer technique, we divide a problem into subproblems. When the solution to each subproblem is ready, we 'combine' the results from the subproblems to solve the main problem.

## How Quick Sort Works?

- A pivot element is chosen from the array. You can choose any element from the array as the pivot element.

- The elements smaller than the pivot element are put on the left and the elements greater than the pivot element are put on the right.

- The process goes on until the second last element is reached.

- Pivot elements are again chosen for the left and the right sub-parts separately. Within these sub-parts, the pivot elements are placed and previous steps are repeated.

- The sub-parts are again divided into smaller sub-parts until each subpart is formed of a single element. At this point, the array is already sorted.

-Quicksort uses recursion for sorting the sub-parts.

## Complexity

If pivot element lies in an extreme end of the sorted array, One sub-array is always empty and another sub-array contains n - 1 elements. Thus, quicksort is called only on this sub-array.

However, the quick sort algorithm has better performance for scattered pivots.

|    Worst Case    |   Best Case   | Average Case  |
| :--------------: | :-----------: | :-----------: |
| O(n<sup>2</sup>) | O(n \* log n) | O(n \* log n) |

Space complexity is O(log n)

## Quick Sort Applications

- the programming language is good for recursion
- time complexity matters
- space complexity matters

## Implementation

```js
const { performance } = require("perf_hooks");

const inputArray = [36, 89, 97, 45, 26, 20, 33, 92, 49, 22, 83];
let timeToExecute = 0;

// This is a helper function that is called recursively
const sort = (array, start, end) => {
  let pivot = array[end]; // Setting pivot to be the last element of array
  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    if (array[i] < pivot) {
      [array[pivotIndex], array[i]] = [array[i], array[pivotIndex]];
      pivotIndex++;
    }
  }
  [array[end], array[pivotIndex]] = [array[pivotIndex], array[end]];

  // sort left of pivot
  let leftArr = array.slice(start, pivotIndex);
  if (leftArr.length > 1) sort(array, start, pivotIndex - 1);

  // sort reft of pivot
  let rightArr = array.slice(pivotIndex + 1, end + 1);
  if (rightArr.length > 1) sort(array, pivotIndex, end);
};

const quickSort = (input) => {
  const output = [...input];
  const beginTime = performance.now();
  sort(output, 0, output.length - 1); // Begin Sorting, pivot is last element of array
  timeToExecute = performance.now() - beginTime;

  return output;
};

console.log(`\nINPUT = [${inputArray}]\n`);
const sortedArray = quickSort(inputArray);
console.log(`\nOUTPUT = [${sortedArray}]\n`);
console.log(`Quick Sort => ${timeToExecute} ms`);
```
