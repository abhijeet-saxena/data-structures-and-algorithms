# Binary Search

> ## Binary Search is a searching algorithm for finding an element's position in a sorted array. In this approach, the element is always searched in the middle of a portion of an array.

Binary search can be implemented only on a sorted list of items. If the elements are not sorted already, we need to sort them first.

Binary Search Algorithm can be implemented in two ways which are discussed below.

1. Iterative Method
2. Recursive Method

## How Binary Search Works?

- The array in which searching is to be performed is initial array and let x be the element to be searched.

- Set two pointers low and high at the lowest and the highest positions respectively.

- Find the middle element mid of the array ie. (arr[low + high]) / 2

- If x == mid, then return mid. Else, compare the element to be searched with m.

- If x > mid, compare x with the middle element of the elements on the right side of mid. This is done by setting low to low = mid + 1.

- Else, compare x with the middle element of the elements on the left side of mid. This is done by setting high to high = mid - 1.

- Repeat above steps until low meets high.

## Complexity

| Worst Case | Best Case | Average Case |
| :--------: | :-------: | :----------: |
|  O(log n)  |   O(1)    |   O(log n)   |

Space complexity is O(n)

## Linear Search Applications

- In libraries of Java, .Net, C++ STL
- While debugging, the binary search is used to pinpoint the place where the error happens.
