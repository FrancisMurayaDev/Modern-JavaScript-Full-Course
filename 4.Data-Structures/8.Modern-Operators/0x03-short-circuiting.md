# Short Circuiting (&& and ||)

We can do more with `&&` and `||` logical operators.

We can do something called `short circuiting`.

```js
console.log(4 || "Francis");
// 4
```

We get the result as 3, meaning the result of a `OR` operator does not have to always be a boolean.

### 3 properties about Logical Operators.

1. They can use any data type.
2. They can return any data type.
3. They do short-circuit evaluations (short circuiting).

## OR operator

In `OR` operator, `Short-Circuiting` means, if the first value is a truthy value, it will imediately return that value.

```js
console.log(4 || "Francis");
// 4

console.log("Francis" || 8);
// Francis
```

If the first operand is truthy, it will be returned, the second operand will not be evaluated. JavaScript will not even look at it.

```js
console.log("" || "Muraya"); // Muraya
console.log(true || 0); //true
console.log(undefined || null); // null
console.log(false || true); //true
console.log("" || null || false || "Hello" || 23 || 0); // Hello
```

Here `null` is returned `console.log(undefined || null);` even if it is a falsy value, since the first is falsy, it moves to the next, it will return the next available even if falsy.

In an `OR` operation, the result is `true` when atleast one operand is true. If JavaScript finds one truthy value, it does not have to look at other values.

- Because the result expression is already true anyway.

It is used to set default values where a value does not exist.

```js
const resturant = {
  resturantName: "Coasto",
  location: "Mexico",
};

const numGuests = resturant.guests ? resturant.guests : 10;
console.log(numGuests);

// Result will be 10 since resturant.guests does not exist.
```

But if we set the property, the property value will be the result.

```js
const resturant = {
  resturantName: "Coasto",
  location: "Mexico",
};

const numGuests = resturant.guests ? resturant.guests : 10;
console.log(numGuests);

// Result will be 23
```

Instead of doing all this, we can take advantage of `short circuiting` and the `OR` operator.

```js
const resturant = {
  resturantName: "Coasto",
  location: "Mexico",
};

const numGuests = resturant.guests || 10;
console.log(numGuests);

// 10
```

Another thing is, even if the default value is set to `0`, its a falsy value too. And in situations that `0` is the default value, this might not be recommended.

```js
const resturant = {
  resturantName: "Coasto",
  location: "Mexico",
};
resturant.guests = 0;
const numGuests = resturant.guests || 10;
console.log(numGuests);

// 10
```

## AND operator (&&)

Works in opposite way of `OR`.

```js
console.log(0 && "Francis");
// 0
console.log("Jonas" && "Francis");
// Francis
```

`AND` will short circuit when the first value is falsy. It will return that value without evaluating the second operand.

- It means that, if the first value is falsy, then the entire is falsy and no need to look.

- If the first value is truthy, the evaluation continues, until it finds a falsy value or last value.

The end operator is only true if all operators are true.
