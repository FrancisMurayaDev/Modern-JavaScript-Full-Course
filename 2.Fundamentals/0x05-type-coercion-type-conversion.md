# Type Coercion and Type Conversion

In JavaScript, both `type coercion` and `type conversion` involves changing a value from one data type to another. However, they both happen in diffrent ways.

## Type Coercion (Implicit Conversion)

It happens automatically when JavaScript tries to perform operations between diffrent data types.

This behaviour is common in `addition (+)`, `concantination` and `==`.

Type Coercision leads to unexpected results.

```js
console.log(5 + "5"); // "55" (Number coerced into a string)
console.log("5" - 2); // 3 (String coerced into a number)
console.log(true + 1); // 2 (true coerced into 1)
console.log(false + "10"); // "false10" (false coerced into string)
```

## Type Conversion (Explicit Conversion)

Happens when you manually convert data types of a value.

### Methods of Explicit Conversion

1. Convert to string using `String()` or `toString()`.

```js
console.log(String(382));
console.log((382).toString());
```

2. Convert to Number using `Number(), parseInt() or parseFloat().`

```js
console.log(Number("382"));
console.log(parseInt("382"));
console.log(parseFloat("382"));
console.log(parseInt("42px"));
```

3. Convert to Bolean using `Boolean()`

```js
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean(null)); // false
```

## Falsy and Truthy Values.

### Falsy Values

- 0, null, "", undefined, NaN, false

### Truthy Values

- Everything else is a truthy value.
