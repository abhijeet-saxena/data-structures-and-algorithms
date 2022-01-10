# Shell Sort

> ## Shell sort is an algorithm that first sorts the elements far apart from each other and successively reduces the interval between the elements to be sorted.

In shell sort, elements at a specific interval are sorted. The interval between the elements is gradually decreased based on the sequence used.

## How Shell Sort Works?

We are using the shell's original sequence (N/2, N/4, ...1) as intervals in our algorithm.

- In the first loop, if the array size is N = 8 then, the elements lying at the interval of N/2 = 4 are compared and swapped if they are not in order.

- Rearrange the elements at n/2 interval

- This process goes on for all the remaining elements.

- All the elements in the array lying at the current interval are compared.

- Finally, when the interval is N/8 = 8/8 =1 then the array elements lying at the interval of 1 are sorted. The array is now completely sorted.

## Complexity

|    Worst Case    |   Best Case   | Average Case  |
| :--------------: | :-----------: | :-----------: |
| O(n<sup>2</sup>) | O(n \* log n) | O(n \* log n) |

Space complexity is O(1)

## Shell Sort Applications

- calling a stack is overhead. uClibc library uses this sort.
- recursion exceeds a limit. bzip2 compressor uses it.
- Insertion sort does not perform well when the close elements are far apart. Shell sort helps in reducing the distance between the close elements. Thus, there will be less number of swappings to be performed.
