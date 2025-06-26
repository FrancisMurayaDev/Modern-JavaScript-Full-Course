# The Nullish Coalescing Operator (??)

A recap: We used the `OR` operator to set the second value, incase the first value is a falsy value.

`??` operator works as `||` operator however for `??` we get the real value even if it is a falsy value.

- It will provide the next value only when the value does not exist.

```js
const resturant = {
  resturantName: "Coasto",
  location: "Mexico",
};

resturant.guests = 0;

const numberOfGuests = resturant.guests ?? 10;

console.log(numberOfGuests);
// 0
```

If the value exists, the value will be provided even if it is 0. If the value does not exist, it will provide the next one.

```js
const resturant = {
  resturantName: "Coasto",
  location: "Mexico",
};

const numberOfGuests = resturant.guests ?? 10;

console.log(numberOfGuests);
// 10
```

`Nullish` (`??`) operator works with the idea of `nullish values` but not falsy values.

- Nullish values include `null` and `undefined`. `0` and `''` are treated as truthy.

- Only if the first is `null` and `undefined`, that is when the second will be executed.
