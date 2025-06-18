# Arrays

An array is a type of data structure.

An array is a collection of elements, stored at a contagious memory location.

It can hold many values under a single name, you an access a value by referring to its `index` number.

## Creating an Array

We can create an array using the following ways:

### 1. Using an Array Literal.

```js
const arrayName = [item1, item2, item3.....]
```

You can also `nest arrays` within arrays (`multidimensional arrays`).

```js
const arr = [1, 2, 3, [4, 5, 6, [90, 80]], [20, 30, 40]];
```

### 2. Using the `new Array()` constructor.

```js
const newArray = new Array(item1, item2, item3, item4......)
```

ex:ample

```js
const students = new Array("John", "Ken", "June", "Jack");
```

The `new Array` constructor can also be nested.

```js
const arr = new Array(1, 2, new Array(5, 6, new Array(30, 40)));
```

- It is recommended to always use an array literal when creating an array.
