# Linear Search

> ## Linear search is the simplest searching algorithm that searches for an element in a list in sequential order. We start at one end and check every element until the desired element is not found.

## How Linear Search Works?

The following steps are followed to search for an element in a given array. Initial array - Array to be searched for

- Start from the first element, compare k with each element x.

- Compare with each element, If x == k, return the index.

- Else, return not found.

## Complexity

| Time Complexity | Space Complexity |
| :-------------: | :--------------: |
|      O(n)       |       O(1)       |

## Linear Search Applications

For searching operations in smaller arrays (<100 items).

## Implementation

```js
const inputArray = [36, 89, 97, 45, 26, 20, 33, 92, 49, 22, 83];

const linearSearch = (input, elem) => {
  let index = -1;
  for (let i = 0; i < input.length; i++) {
    if (elem === input[i]) return i;
  }
  return index;
};

const search = 92;
const elementFoundAt = linearSearch(inputArray, search);

console.log(
  elementFoundAt >= 0
    ? `Element found at ${elementFoundAt} index`
    : `Element not found`
);
```
