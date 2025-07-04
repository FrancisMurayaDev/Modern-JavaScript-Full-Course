# Working with BigInt

```js
console.log(Number.MAX_SAFE_INTEGER);
// 9007199254740991
```

This is the maximum safe number in JavaScript.

However, we may recieve bigger numbers than that from databases or APIs which we will need to work with.

`BigInt` is used to store integers as long as you want. We use an `n` to transform a number into a `BigInt`.

```js
console.log(54537587757883775883758883748848n);
```

We can also create `BigInts` by using the BigInt function and now without the `n`.

```js
console.log(BigInt(54537587757883775883758883748848));
```

- The constructor function should only be used with smaller units.

## Operators

The operators work just the same with `BigInt`.

```js
console.log(10000n + 10000n);
// 20000n
```

It is not possible to mix, BigInt with regular numbers. Unless you convert the number to a BigInt using the constructor `BigInt()`.
