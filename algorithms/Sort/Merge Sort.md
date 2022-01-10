# Merge Sort

> ## Merge sort recursively divides the input into halves until we reach the base case of input with 1 element. After that, it picks up the sorted sub-arrays and merges them to gradually sort the entire array.

Using the Divide and Conquer technique, we divide a problem into subproblems. When the solution to each subproblem is ready, we 'combine' the results from the subproblems to solve the main problem.

## How Merge Sort Works?

- If it is only one element in the list it is already sorted, return.

- Divide the list recursively into two halves until it can no more be divided.

- Merge the smaller lists into new list in sorted order.

## Complexity

|  Worst Case   |   Best Case   | Average Case  |
| :-----------: | :-----------: | :-----------: |
| O(n \* log n) | O(n \* log n) | O(n \* log n) |

Space complexity is O(n)

## Merge Sort Applications

- Inversion count problem
- External sorting
- E-commerce applications

## Implementation

```js
const { performance } = require("perf_hooks");

const inputArray = [36, 89, 97, 45, 26, 20, 33, 92, 49, 22, 83];
let timeToExecute = 0;

// This is a helper function that is called recursively
const merge = (left, right) => {
  let resultArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat all because there will be one element remaining
  // from either left OR the right
  return [...resultArray, ...left.slice(leftIndex), ...right.slice(rightIndex)];
};

const mergeSort = (input) => {
  if (input.length === 1) return input;

  const beginTime = performance.now();
  const middle = Math.floor(input.length / 2);
  const left = input.slice(0, middle);
  const right = input.slice(middle);

  output = merge(mergeSort(left), mergeSort(right));
  timeToExecute = performance.now() - beginTime;

  return output;
};

console.log(`\nINPUT = [${inputArray}]\n`);
const sortedArray = mergeSort(inputArray);
console.log(`\nOUTPUT = [${sortedArray}]\n`);
console.log(`Quick Sort => ${timeToExecute} ms`);
```
