# Optional Chaining (?.)

Used with arrays and objects.

Only if the property that is before the `optional chaining` exists, then the next property will be read.

Lets say we have an object:

```js
const resturant = {
  name: "Coasto",
  location: "Mexico",
  openingHours: {
    mon: { open: 1200, close: 2300 },

    tue: {
      open: 1000,
      close: 2200,
    },
  },
};
```

```js
const resturant = {
  name: "Coasto",
  location: "Mexico",
  openingHours: {
    mon: { open: 1200, close: 2300 },

    tue: {
      open: 1000,
      close: 2200,
    },
  },
};

console.log(resturant.openingHours.mon?.open);
// It will read open if monday exists first
// 1200
```

It helps remove an error if an object does not exist.
