# Sorting Arrays

Using `.sort()` method.

- It mutates (changes) the original array.

### 1. With Srings

```js
const owners = ["John", "Martha", "Peter", "Adam", "Francis"];
console.log(owners.sort()); // [ 'Adam', 'Francis', 'John', 'Martha', 'Peter' ]
console.log(owners); // [ 'Adam', 'Francis', 'John', 'Martha', 'Peter' ]
```

### 2. With Numbers

```js
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements.sort());

// [  -130, -400, -650,  1300,  200, 3000,   450,   70]
```

The result is not what we were expecting. The numbers are not ordered in a certain way.

The reason is that, the `sort` method does the sorting based on `strings` by default.

- Basically it converts everything to strings and does the sorting itself.

In strings, the `-` occurs first, then `1` `2` .....

If they were strings, this result would make sense. Since they are not strings, then we have to fix this.

- We pass in a compare `callback` function into the `sort` method. The callback function is called with 2 arguments.

These parameters are `the current value` and `the next value` if we imagine the sort method looping over the array. Think of them as 2 consequtive numbers in the array.

```js
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.sort(function (a, b) {
  if (a > b) return 1; //keep order
  if (b > a) return -1; // switch order
});

console.log(movements);

// [-650, -400, -130, 70,  200, 450, 1300, 3000]
```

To sort the other way round:

```js
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.sort(function (a, b) {
  if (a > b) return -1;
  if (b > a) return 1;
});

console.log(movements);

// [3000, 1300,  450, 200, 70, -130, -400, -650]
```
