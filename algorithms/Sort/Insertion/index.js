const { performance } = require("perf_hooks");

const inputArray = [36, 89, 97, 45, 26, 20, 33, 92, 49, 22, 83];

let timeToExecute = 0;

const insertionSort = (input) => {
  const op = [...input];
  const beginTime = performance.now();
  const len = op.length;

  for (let i = 0; i < len - 1; i++) {
    let key = i;
    let j = i + 1;
    while (key >= 0 && op[key] > op[j]) {
      [op[key], op[j]] = [op[j], op[key]];
      key--;
      j--;
    }
    console.log(op);
  }

  console.log(`\nOUTPUT = [${op}]\n`);
  console.log(`Insertion Sort => ${performance.now() - beginTime} ms`);
  return op;
};

console.log(`\nINPUT = [${inputArray}]\n`);
insertionSort(inputArray);
