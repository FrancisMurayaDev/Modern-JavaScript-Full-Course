# Maps

A map data structure is similar to an object.

Unlike an object, key in a map can be of any type.

## Creating a Map

You can create a map using:

const myApp = `new Map()`

## Map Methods.

### `.set (key, value)`

Adds a key value pair to the map or updates if the key-value pair already exists.

```js
const myMap = new Map();
myMap.set("firstName", "Dennis");
myMap.set(1, "number");
myMap.set([1, 2, 3], "array");
myMap.set(true, "boolean value");
myMap.set({ username: "the_user" }, "object");
console.log(myMap);

// Map(5) {
//   'firstName' => 'Dennis',
//   1 => 'number',
//   [ 1, 2, 3 ] => 'array',
//   true => 'boolean value',
//   { username: 'the_user' } => 'object'
// }
```

### `.get(key)`

Returns the value associated with the specific key in the map or undefined if it doesn't exist.

```js
const myMap = new Map();
myMap.set("firstName", "Dennis");
myMap.set(1, "number");
myMap.set([1, 2, 3], "array");
myMap.set(true, "boolean value");
myMap.set({ username: "the_user" }, "object");

console.log(myMap.get(1)); // number
console.log(myMap.get("firstName")); // Dennis
console.log(myMap.get("something")); // undefined
```

### `.has(key)`

Returns true if a map contains the specified key. false otherwise.

```js
const myMap = new Map();
myMap.set("firstName", "Dennis");
myMap.set(1, "number");
myMap.set([1, 2, 3], "array");
myMap.set(true, "boolean value");
myMap.set({ username: "the_user" }, "object");

console.log(myMap.has("firstName")); // true
console.log(myMap.has("middlename")); // false
```

### `.delete(key)`

Removes a specified key-value pair from the map.

```js
const myMap = new Map();
myMap.set("firstName", "Dennis");
myMap.set(1, "number");
myMap.set([1, 2, 3], "array");
myMap.set(true, "boolean value");
myMap.set({ username: "the_user" }, "object");

myMap.delete("firstName");
myMap.delete(1);
```

### `.clear()`

Removes all the key-value pairs from a map.

```js
const myMap = new Map();
myMap.set("firstName", "Dennis");
myMap.set(1, "number");
myMap.set([1, 2, 3], "array");
myMap.set(true, "boolean value");
myMap.set({ username: "the_user" }, "object");

myMap.clear();

console.log(myMap); // Map(0) {}
```

### `.size`

Returns the number of key-value pairs in a map.

```js
const myMap = new Map();
myMap.set("firstName", "Dennis");
myMap.set(1, "number");
myMap.set([1, 2, 3], "array");
myMap.set(true, "boolean value");
myMap.set({ username: "the_user" }, "object");

console.log(myMap.size); // 5
```
