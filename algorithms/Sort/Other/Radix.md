# Radix Sort

> ## Radix sort is a sorting technique that sorts the elements by first grouping the individual digits of the same place value and then sorting the elements according to their increasing/decreasing order.

## How Radix Sort Works?

- Find the largest element in the array, i.e. max. Let X be the number of digits in max. X is calculated because we have to go through all the significant places of all elements.

- Now, go through each significant place one by one and Use any stable sorting technique to sort the digits at each significant place.

- Now, sort the elements based on digits at tens place and then hundreds place and so on .

## Complexity

If d is the number cycle and O(n+k) is the time complexity of counting sort.

Time complexity is O(d(n+k)).

Space complexity is O(max).

Larger the range of elements, larger is the space complexity.

## Radix Sort Applications

- DC3 algorithm (Kärkkäinen-Sanders-Burkhardt) while making a suffix array.
- places where there are numbers in large ranges.
