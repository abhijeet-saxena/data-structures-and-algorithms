# Maps

> ## The Map data structure holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

When we iterate over the map object it returns the key,value pair in the same order as inserted.

JavaScript provides an Out Of The Box implementation of Maps.

## Maps

To see a list of all properties and methods supported, visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

## WeakMaps

> ## The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced. Keys of WeakMaps are of the type Object only and the values can be arbitrary values. Primitive data types as keys are not allowed.

WeakMaps hold "weak" references to key objects, which means that they do not prevent garbage collection in case there would be no other reference to the key object.

Because the references are weak, WeakMap keys are not enumerable. There is no method to obtain a list of the keys. If you want to have a list of keys, you should use a Map.

To see a list of all properties and methods supported, visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
