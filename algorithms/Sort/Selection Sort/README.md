# Selection Sort

> Selection sort is an algorithm that selects the smallest element from an unsorted list in each iteration and places that element at the beginning of the unsorted list.

## How Selection Sort Works?

Set the first element as minimum.

Compare minimum with the second element. If the second element is smaller than minimum, assign the second element as minimum.

Compare minimum with the third element. Again, if the third element is smaller, then assign minimum to the third element otherwise do nothing.

The process goes on until the last element.

## Complexity

The time complexity of the selection sort is the same in all cases. At every step, you have to find the minimum element and put it in the right place. The minimum element is not known until the end of the array is not reached.

|    Worst Case    |    Best Case    |   Average Case   |
| :--------------: | :-------------: | :--------------: |
| O(n<sup>2</sup>) | O(n<sup>2</sup> | O(n<sup>2</sup>) |

**Space complexity is O(1)** because an extra variable temp is used.

## Selection Sort Applications

The selection sort is used when:-

- a small list is to be sorted
- cost of swapping does not matter
- checking of all the elements is compulsory
- cost of writing to a memory matters like in flash memory (number of writes/swaps is O(n) as compared to O(n2) of bubble sort)
