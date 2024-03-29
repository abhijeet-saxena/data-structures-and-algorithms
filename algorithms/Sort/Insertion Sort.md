# Insertion Sort

> ## Insertion sort is a sorting algorithm that places an unsorted element at its suitable place in each iteration. Insertion sort works similarly as we sort cards in our hand in a card game.

## How Insertion Sort Works?

- The first element in the array is assumed to be sorted. Take the second element and store it separately in key.

- Compare key with the first element. If the first element is greater than key, then key is placed in front of the first element. Now, the first two elements are sorted.

- Take the third element and compare it with the elements on the left of it. Placed it just behind the element smaller than it. If there is no element smaller than it, then place it at the beginning of the array.

- Similarly, place every unsorted element at its correct position.

## Complexity

Each element has to be compared with each of the other elements so, for every nth element, (n-1) number of comparisons are made. Thus, the total number of comparisons = n\*(n-1) ~ n<sup>2</sup>

|    Worst Case    | Best Case |   Average Case   |
| :--------------: | :-------: | :--------------: |
| O(n<sup>2</sup>) |   O(n)    | O(n<sup>2</sup>) |

Space complexity is O(1) because an extra variable temp is used.

## Insertion Sort Applications

- the array is has a small number of elements
- there are only a few elements left to be sorted

## Implementation

```js
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
```
