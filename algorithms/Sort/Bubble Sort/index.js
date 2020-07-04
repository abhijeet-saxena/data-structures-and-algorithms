const { performance } = require("perf_hooks");

const inputArray = [36, 89, 97, 45, 26, 20, 33, 92, 49, 22, 83];

const bubbleSort = (input) => {
  const op = [...input];
  const beginTime = performance.now();
  const len = op.length;

  for (let i = 0; i < len; i++) {
    for (let ii = 0; ii < len; ii++) {
      if (op[ii] > op[ii + 1]) {
        [op[ii], op[ii + 1]] = [op[ii + 1], op[ii]];
      }
    }
  }
  console.log(`Normal Bubblesort => ${performance.now() - beginTime} ms`);

  return op;
};

const bubbleSortOptimised = (input) => {
  const op = [...input];
  const beginTime = performance.now();
  const len = op.length;

  for (let i = 0; i < len; i++) {
    let swapped = true;
    for (let ii = 0; ii < len; ii++) {
      if (op[ii] > op[ii + 1]) {
        [op[ii], op[ii + 1]] = [op[ii + 1], op[ii]];
        swapped = false;
      }
    }
    if (swapped) break;
  }
  console.log(`Optimised Bubblesort => ${performance.now() - beginTime} ms`);

  return op;
};

console.log(bubbleSort(inputArray));
console.log("");
console.log(bubbleSortOptimised(inputArray));
