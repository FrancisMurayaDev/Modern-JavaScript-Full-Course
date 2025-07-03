# Looping Arrays `forEach()`

Lets compare `for of` and `forEach`

```js
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You Deposited ${movement}`);
  } else if (movement < 0) {
    console.log(`You Widthdrew ${Math.abs(movement)}`);
  }
}
```

- `Math.abs()` converts numbers to absolute values. It removed the negative when displaying.

### Now lets use `forEach()`.

`forEach()` is a higher order function so it requires a `callback` function.

```js
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach(function (movement) {
  if (movement < 0) {
    console.log(`You withdrew ${Math.abs(movement)}`);
  } else if (movement > 0) {
    console.log(`You deposited ${movement}`);
  }
});
```

We will get the same result.

### We can pass a second parameter in the forEach which gets the index.

```js
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach(function (movement, index) {
  if (movement < 0) {
    console.log(`Movment ${index + 1}. You withdrew ${Math.abs(movement)}`);
  } else if (movement > 0) {
    console.log(`Movment ${index + 1}. You deposited ${movement}`);
  }
});

/**
 Movment 1. You deposited 200
Movment 2. You deposited 450
Movment 3. You withdrew 400
Movment 4. You deposited 3000
Movment 5. You withdrew 650
Movment 6. You withdrew 130
Movment 7. You deposited 70
Movment 8. You deposited 1300
 */
```

### We can also pass the third argument which gets the entire array.

`NOTE`: The `continue` and `break` statements do not work in the `forEach` loop.
