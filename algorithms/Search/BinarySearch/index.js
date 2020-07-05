const inputArray = [20, 22, 26, 33, 36, 45, 49, 83, 89, 92, 97];

const binarySearch = (input, elem) => {
  let middle = Math.floor(input.length / 2);
  if (input.length === 1 && input[middle] !== elem) return -1;

  if (input[middle] === elem) return middle;
  else if (input[middle] > elem)
    return binarySearch(input.slice(0, middle), elem);
  else if (input[middle] < elem)
    return binarySearch(input.slice(middle + 1), elem);
};

const search = 92;
const elementFoundAt = binarySearch(inputArray, search);

console.log(elementFoundAt >= 0 ? `Element found` : `Element not found`);
