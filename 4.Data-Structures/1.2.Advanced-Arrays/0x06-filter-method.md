# Filter Method

Used to filter elements that satisfy a passed condition using a callback function.

It gets access to the current array element, index and the entire array.

```js
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(mov => {
  return mov > 0;
});

console.log(deposits);
// [ 200, 450, 3000, 70, 1300 ]
```

```js
const withdrawals = movements.filter(mov => {
  return mov < 0;
});

console.log(withdrawals);
```
