// Create an array
let fruits = ["Apple", "Banana"]; // Using Array Literal Notataion
let fruits = new Array("Apple", "Banana"); // Using Constructor Notation

// Accessing an element
let first = fruits[0]; // Apple

// Length Of Array
console.log(fruits.length); // 2

// Add an item to the end of an Array
let newLength = fruits.push("Orange"); // ["Apple", "Banana", "Orange"]

// Remove an item from the end of an Array
let last = fruits.pop(); // ["Apple", "Banana"]

// Remove an item from the beginning of an Array
let first = fruits.shift(); // ["Banana"]

// Add an item to the beginning of an Array
let newLength = fruits.unshift("Strawberry"); // ["Strawberry", "Banana"]

// Find the index of an item in the Array
let pos = fruits.indexOf("Banana"); // 1

// Remove an item by index position
let removedItem = fruits.splice(pos, 1); // ["Strawberry", "Mango"]
