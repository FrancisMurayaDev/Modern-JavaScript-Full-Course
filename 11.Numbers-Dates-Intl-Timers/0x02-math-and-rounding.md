# Math and Rounding

### Finding the square-root

`Math.sqrt()` - square root.

```js
console.log(Math.sqrt(24));

console.log(25 ** (1 / 2));
// 5
```

### Finding the cube root

```js
console.log(8 ** (1 / 3));
// 2
```

### Maximum Value

`Math.max()`

```js
console.log(Math.max(2, 6, 9, 45, 6));
// 45
```

Math.max() also does type coercion.

```js
console.log(Math.max(3, 8, "23", 6));
// 23
```

### Minimum Value

```js
console.log(Math.min(3, 8, 23, 6));
// 3
```

There are also constants in Math such as `PI` for calculating the radius of a circle.

### Math.PI

### Math.randon()

Lets regenarate a randomNumber function generator which is an important use case when building apps in the future.

- A function that can generate random numbers between certain numbers passed into it.

```js
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + 1) + min;
};

// console.log(randomInt(10, 20));
console.log(randomInt(5, 10));
```

### Rounding Integers

1. Math.trunc () - remove any decimal places.

```js
console.log(Math.trunc(23.6));
// 23
```

2. Math.round() - rounds to the nearest integer.

```js
console.log(Math.round(45.6)); // 46
console.log(Math.round(45.3)); // 45
```

3. Math.ceil - it rounds up a number.

```js
console.log(Math.ceil(45.6)); // 46
console.log(Math.ceil(45.3)); // 46
```

4. Math.floor - rounds a number down.

```js
console.log(Math.floor(45.6)); // 45
console.log(Math.floor(45.3)); // 45
```

All this method do type-coercion, even if we pass the numbers as strings, they would still work.

### Rounding Floating point numbers/ decimals

- .toFixed(`number of decimal places`)
