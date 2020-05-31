# Maps

> ## The Set object lets you store unique values of any type, whether primitive values or object references. Set objects are collections of values.

You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.

JavaScript provides an Out Of The Box implementation of Sets.

## Sets

To see a list of all properties and methods supported, visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

## WeakSets

> ## The WeakSet is weak, meaning references to objects in a WeakSet are held weakly. If no other references to an object stored in the WeakSet exist, those objects can be garbage collected.

This also means that there is no list of current objects stored in the collection. WeakSets are not enumerable.

To see a list of all properties and methods supported, visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet

## Implementation (ES6)

```js
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
```
