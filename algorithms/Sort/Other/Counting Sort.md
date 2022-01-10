# Counting Sort

> ## Counting sort is a sorting algorithm that sorts the elements of an array by counting the number of occurrences of each unique element in the array.

The count is stored in an auxiliary array and the sorting is done by mapping the count as an index of the auxiliary array.

## How Counting Sort Works?

- Find out the maximum element (let it be max) from the given array.
- Initialize an array of length max+1 with all elements 0. This array is used for storing the count of the elements in the array.
  -Store the count of each element at their respective index in count array

- Store cumulative sum of the elements of the count array. It helps in placing the elements into the correct index of the sorted array.

- Find the index of each element of the original array in the count array. This gives the cumulative count.

- After placing each element at its correct position, decrease its count by one.

## Complexity

There is no comparison between any elements, so it is better than comparison based sorting techniques. But, it is bad if the integers are very large because the array of that size should be made.

| Worst Case | Best Case | Average Case |
| :--------: | :-------: | :----------: |
|   O(n+k)   | O(n + k)  |    O(n+k)    |

Space complexity is O(max). Larger the range of elements, larger is the space complexity.

## Counting Sort Applications

The counting sort is used when:-

- there are smaller integers with multiple counts.
- linear complexity is the need.
