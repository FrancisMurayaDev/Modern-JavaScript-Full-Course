# Simple Array Method

## 1. Slice Method

The slice method used with arrays, is very similar to that of `strings`.

We can extract the original array without changing the original array.

- We can take a slice of an array.

`slice` method takes in 1 or 2 parameters and returns an array with the extracted parts, it does not mutate(chnage) the current array.

- the `1st` parameter - index where the slice should start. (index included in the array)
- the `2nd` parameter - index where the slice should end. (index not included in the array)

The length of the parameter is simply the second parameter minus the first parameter.

```js
const arr = ["a", "b", "c", "d", "e", "f"];

console.log(arr.slice(2));

// ["c", "d", "e", "f"];

console.log(arr.slice(2, 5));
// [ 'c', 'd', 'e' ]
```

### Additionally just like in strings we can define a negative `(-)` begin parameter and it will start to copy from the end of the array.

`-1` is the last elmenent of any array.

```js
const arr = ["a", "b", "c", "d", "e", "f"];

console.log(arr.slice(-1));

// ["f"]
```

We can also use a negative index as the end parameter.

```js
const arr = ["a", "b", "c", "d", "e", "f"];

console.log(arr.slice(1, -2));

// [ 'b', 'c', 'd' ]

// Will extract from index 1 expect the last 2 elements.
```

### We can also use the slice method to create a shallow copy of an array.

We call it without any arguments and we get the exact same array.

```js
const arr = ["a", "b", "c", "d", "e", "f"];

console.log(arr.slice());

// [ 'a', 'b', 'c', 'd', 'e', 'f' ]
```

We can also do similar thing using the spread operator.

```js
const arr = ["a", "b", "c", "d", "e", "f"];

console.log([...arr]);

// [ 'a', 'b', 'c', 'd', 'e', 'f' ]
```

## 2. Splice Method

Works almost the same way as slice.

- The diffrence is that, `splice` changes the original array. It mutates that array.

```js
const arr = ["a", "b", "c", "d", "e", "f"];

console.log(arr.splice(2));
// [ 'c', 'd', 'e', 'f' ]

// Note what happens to the original array.

console.log(arr);
// [ 'a', 'b' ]
```

Only the first 2 elements remain in the original array. The extracted elements are gone from the original array. `splice()` deleted them.

Splice is mainly used to delete one or more elements from from an array.

```js
const arr = ["a", "b", "c", "d", "e", "f"];

console.log(arr.splice(-1)); // f

// This will remove the last element from the original array.
```

```js
const arr = ["a", "b", "c", "d", "e", "f"];

console.log(arr.splice(1, 3)); // [ 'b', 'c', 'd' ] will be deleted from original array
```

You can learn more about `splice` in the MDN.
