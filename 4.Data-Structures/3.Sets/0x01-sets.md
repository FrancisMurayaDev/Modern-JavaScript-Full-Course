# Sets

A set is a data structure that represents a collection of unique values.

Unlike arrays which allow duplicate elements, sets only allow unique values.

## Properties of a Set

1. Unique Elements - sets cannot contain duplicate elements.

2. No indexing - Elements in a set are not accessed by their position

3. No Order - Unlike arrays, elements in a set dont maintain their order.

## Creating a Set

To create a set we use

`new Set()`

```js
const mySet = new Set([1, 2, true, "Francis"]);
console.log(mySet);

// Set(4) { 1, 2, true, 'Francis' }
```

## Set methods

### `.add(value)`

Add a new element with the specified value to the set.

```js
const newSet = new Set();
newSet.add("Good Morning");
newSet.add(true);
newSet.add(56);
console.log(newSet);
// Set(3) { 'Good Morning', true, 56 }
```

### `.delete(value)`

Removes a specific element from the set.

```js
const mySet = new Set(["John", 44, "Doe", true, false]);
mySet.delete("John");
mySet.delete(true);
mySet.delete(44);
console.log(mySet); // Set(2) { 'Doe', false }
```

### `.has(value)`

Returns true if a specified value exists in a set, false otherwise.

```js
const mySet = new Set(["John", 44, "Doe", true, false]);
console.log(mySet.has("John")); // true
console.log(mySet.has("June")); // false
```

### `.size`

Returns the number of elements in a set.

```js
const mySet = new Set(["John", 44, "Doe", true, false]);
console.log(mySet.size); // 5
```
