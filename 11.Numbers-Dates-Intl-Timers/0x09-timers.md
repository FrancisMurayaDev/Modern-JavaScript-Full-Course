# Timers: setTimeout and setInterval

## `setTimeout()`

It takes in 2 arguments, a `callback function` and `time` in milliseconds that will be passed until the callback function is called.

```js
setTimeout(() => {
  console.log(`Here is your Pizza🍕`);
}, 3000);
```

We can also pass parameters to the callback function, however, the parameters will be passed as arguments of the `setTimeout()`. That is from the third argument.

- Here is the example:

```js
setTimeout(
  (ing1, ing2) => {
    console.log(`Here is your Pizza🍕 made of ${ing1} and ${ing2}`);
  },
  3000,
  `spinach`,
  `beef`
);

// Here is your Pizza� made of spinach and beef
```

We use `clearTimeout()` to clear a `setTimeout()`.

```js
const ingridients = ["spinach", "beef"];

const orderPizza = setTimeout(
  (ing1, ing2) => {
    console.log(`Here is your Pizza🍕 made of ${ing1} and ${ing2}`);
  },
  3000,
  ...ingridients
);

if (ingridients.includes(`spinach`)) {
  clearTimeout(orderPizza);
}
```

## `setInterval()`

Runs the function over and over after a speficic time.

```js
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
```
