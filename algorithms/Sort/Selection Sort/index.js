const { performance } = require("perf_hooks");

const inputArray = [36, 89, 97, 45, 26, 20, 33, 92, 49, 22, 83];

const selectionSort = (input) => {
  const op = [...input];
  const beginTime = performance.now();
  const len = op.length;

  for (let i = 0; i < len - 1; i++) {
    let min = i;
    for (let ii = i; ii < len - 1; ii++) {
      if (op[min] > op[ii + 1]) {
        [op[min], op[ii + 1]] = [op[ii + 1], op[min]];
      }
    }
  }
  console.log(`Selection Sort => ${performance.now() - beginTime} ms`);

  return op;
};

console.log(selectionSort(inputArray));
