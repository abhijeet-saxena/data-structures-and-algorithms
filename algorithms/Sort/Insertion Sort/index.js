const { performance } = require("perf_hooks");

const inputArray = [36, 89, 97, 45, 26, 20, 33, 92, 49, 22, 83];

const insertionSort = (input) => {
  const op = [...input];
  const beginTime = performance.now();
  const len = op.length;

  for (let i = 1; i < len; i++) {
    let key = op[i];
    let j = i - 1;
    while (j >= 0 && op[j] > key) {
      op[j + 1] = op[j];
      j = j - 1;
    }
    op[j + 1] = key;
  }
  console.log(`Insertion Sort => ${performance.now() - beginTime} ms`);

  return op;
};

console.log(insertionSort(inputArray));
