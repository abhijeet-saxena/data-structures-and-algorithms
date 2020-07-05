const { performance } = require("perf_hooks");
const inputArray = [36, 89, 97, 45, 26, 20, 33, 92, 49, 22, 83];

const bubbleSort = (input) => {
  const op = [...input];
  const beginTime = performance.now();
  const len = op.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (op[j] > op[j + 1]) [op[j], op[j + 1]] = [op[j + 1], op[j]];
    }
    console.log(op);
  }

  console.log(`\nOUTPUT = [${op}]\n`);
  console.log(`Normal Bubblesort => ${performance.now() - beginTime} ms\n`);
  return op;
};

const bubbleSortOptimised = (input) => {
  const op = [...input];
  const beginTime = performance.now();
  const len = op.length;

  for (let i = 0; i < len; i++) {
    let swapped = true;
    for (let j = 0; j < len; j++) {
      if (op[j] > op[j + 1]) {
        [op[j], op[j + 1]] = [op[j + 1], op[j]];
        swapped = false;
      }
    }
    console.log(op);
    if (swapped) break;
  }

  console.log(`\nOUTPUT = [${op}]\n`);
  console.log(`Optimised Bubblesort => ${performance.now() - beginTime} ms\n`);
  return op;
};

console.log(`\nINPUT = [${inputArray}]\n`);

bubbleSort(inputArray);
bubbleSortOptimised(inputArray);
