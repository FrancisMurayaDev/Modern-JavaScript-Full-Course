# Enhanced Object Literars

Object literal

```js
const objectName = { property: Value };
```

Lets say we have 2 objects:

```js
const openingHours = {
  thur: {
    open: 1200,
    close: 1800,
  },

  fri: {
    open: 1100,
    close: 2100,
  },
  sat: {
    open: 1000,
    close: 2300,
  },
};

const resturant = {
  name: "Coasto",
  location: "Mexico",
};
```

If I want to include the `openingHours` object in the `resturant` object, I will do it like this:

```js
const resturant = {
  name: "Coasto",
  location: "Mexico",
  openingHours: openingHours,
};
```

However, there is not need to repeat the name twice, we can just write it once.

```js
const resturant = {
  name: "Coasto",
  location: "Mexico",
  openingHours, // write once
};

console.log(resturant);
```

It will create a property name with exactly that variable name. (ES6).

### The second enhancement to Object Literals is about writing Methods.

In ES6, we dont need to create a property and set it to a function expression like we have been doing.

Example:

```js
const resturant = {
  name: "Coasto",
  location: "Mexico",

  order: function (food) {
    console.log(`You have ordered ${food}`);
  },
};

resturant.order("Chapati");
```

Instead we can have:

```js
const resturant = {
  name: "Coasto",
  location: "Mexico",

  order(food) {
    console.log(`You have ordered ${food}`);
  },
};

resturant.order("Chapati");
```

Getting rid of the colon and function name.
