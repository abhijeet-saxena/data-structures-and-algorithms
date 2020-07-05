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
