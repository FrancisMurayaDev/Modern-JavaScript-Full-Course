# Data Types

JavaScript has the following Primitive Data Types, which are also the `Primitive Data Types`:

(A value is a primitive when it is not an object).

- Strings

String refers to a sequence of character enclosed insie double-quotes `""` or single-quotes `''`.

example:

```js
let name = "Francis";
const userName = "John Doe";
```

- Number

JavaScript has only one type of number. It can store Integers or Decimals (floats).

example:

```js
let age = 67;
let totalPrice = 99.97;
```

- Boolean

Bolean represnt true or false values. Usually used for decision making.

A bolean can either be `true` or `false`.

```js
let isLoggedIn = false;
let isMale = true;
```

- Undefined

Undefined referrs to a variable that has been declared but not defined.

```js
let year;
console.log(year); // undefined
```

- Null

Null is intentional absence of a value.
Unlike undefined, `null` means empty on purpose.

```JS
let car = null; //no car yet

```

- Bigint

Used for numbers beyond JavaScript `Number.Max_Safe_Integer`.

Integers that are too long to be represented by the number type.

```js
let bigNumber = 98367839947799737n; // n at the end.
```

## Check the type of a Variable using the `typeof` operator in JS.

```js
console.log(typeof bigNumber); // bigNumber

console.log(typeof isMale); //Boolean
```

- Symbol

Not used in ES6, IT is a unique value that cannot be changed.
