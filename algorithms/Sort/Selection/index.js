const { performance } = require("perf_hooks");

const inputArray = [36, 89, 97, 45, 26, 20, 33, 92, 49, 22, 83];

const selectionSort = (input) => {
  const op = [...input];
  const beginTime = performance.now();
  const len = op.length;

  for (let i = 0; i < len - 1; i++) {
    let selection = i;
    for (let j = i; j < len; j++) {
      if (op[selection] > op[j]) selection = j;
    }
    if (selection !== i) [op[selection], op[i]] = [op[i], op[selection]];
    console.log(op);
  }

  console.log(`\nOUTPUT = [${op}]\n`);
  console.log(`Selection Sort => ${performance.now() - beginTime} ms\n`);
  return op;
};

console.log(`\nINPUT = [${inputArray}]\n`);
selectionSort(inputArray);
