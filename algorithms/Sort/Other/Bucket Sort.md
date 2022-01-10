# Bucket Sort

> ## Bucket Sort is a sorting technique that sorts the elements by first dividing the elements into several groups called buckets. The elements inside each bucket are sorted using any of the suitable sorting algorithms or recursively calling the same algorithm.

The process of bucket sort can be understood as a scatter-gather approach. The elements are first scattered into buckets then the elements of buckets are sorted. Finally, the elements are gathered in order.

## How Bucket Sort Works?

- Create an array of size 10. Each slot of this array is used as a bucket for storing elements.

- Insert elements into the buckets from the array. The elements are inserted according to the range of the bucket.

- Everytime, the floor value of the floating point number is taken. If we take integer numbers as input, we have to divide it by the interval (10 here) to get the floor value.

- The elements of each bucket are sorted using any of the stable sorting algorithms.

- Similarly, other elements are inserted into their respective buckets.

- The elements from each bucket are gathered.

## Complexity

O(n) is the complexity for making the buckets and O(k) is the complexity for sorting the elements of the bucket using algorithms having linear time complexity at the best case.

Even if the elements are not distributed uniformly, bucket sort runs in linear time. It holds true until the sum of the squares of the bucket sizes is linear in the total number of elements.

|    Worst Case    | Best Case | Average Case |
| :--------------: | :-------: | :----------: |
| O(n<sup>2</sup>) | O(n + k)  |     O(n)     |

Space complexity is O(n + k)

## Bucket Sort Applications

- input is uniformly distributed over a range.
- there are floating point values
