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
