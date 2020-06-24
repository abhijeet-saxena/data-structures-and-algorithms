// Create a Map
let myMap = new Map();

// Setting the Values
myMap.set("String", "value associated with a string"); // String as Key
myMap.set({}, "value associated with keyObj"); // Object as Key
myMap.set(function () {}, "value associated with keyFunc"); // Function as Key

// Size of Map
myMap.size; // 3

// getting the values
myMap.get(keyString); // "value associated with 'a string'"
myMap.get(keyObj); // "value associated with keyObj"
myMap.get(keyFunc); // "value associated with keyFunc"

// Check if map has a key present
console.log(myMap.has("String")); // true

// Remove a Key
myMap.delete("String"); // Returns true. Successfully removed.
