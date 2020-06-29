// Create a Set
let mySet = new Set();

// Setting the Values
mySet.add(1); // Set [ 1 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add("some text"); // Set [ 1, 5, 'some text' ]

// Size of Map
mySet.size; // 5

// Check if set has a key present
mySet.has(1); // true

// Remove a Key
mySet.delete(5); // removes 5 from the set
