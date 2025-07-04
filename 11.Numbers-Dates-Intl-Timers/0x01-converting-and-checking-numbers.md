# Converting and Cheking Numbers

All numbers are represented internally as `floating points` numbers. As decimals.

Numbers are represented internally in a 64 base 2 format.

```js
console.log(23 === 23.0);
// true
```

It means that numbers are usually stored in a binary format. 0 and 1s.

- `Base 10` are numbers from 0 -9.
- Binary is `base 2` which is 0 - 1.

<hr>

To convert a string to a number we use `Number()` or `+`.

```js
let sum = Number("56") + Number("67");
console.log(sum); // 123
```

We can also replace `Number()` with `+`, JavaScript will basically perform type coercion.

```js
let sum = +"56" + +"67";
console.log(sum); // 123
```

# Parsing a Number from a String using `Number.parseInt()`

We can even pass some symbols to the string number and JavaScript will automaticllay try to determine the number.

```js
console.log(Number.parseInt("56px"));
// 56
```

- For this to work the string has to start with a number. It will get rid of the symbols that are not numbers. If the numbers begins with a symbol, it will result to `NaN`.

- It is always good practice to pass a second parameter of `10` since we are using `base10` numbers to avoid bugs in some situations. If working with binary we would write `2`.

```js
console.log(Number.parseInt("56px", 10));
// 56
```

### There is also `parseFloat()`

```js
console.log(Number.parseFloat("2.5rem"));
// 2.5
```

It reads the decimal number from our string.

- If we used Int we would only get the integer part.

#### `Number.isNaN()`

Checks if a value is a number.
