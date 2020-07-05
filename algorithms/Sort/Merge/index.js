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
