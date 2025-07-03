# Array Grouping `Object.GroupBy()`

It allows us to group values in an array based on a condition.

Object.groupBy recieves 2 arguments.

1. The array that we want to group.
2. A callback function that determines how exactly we want to group the values in the array.

```js
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const groupedMovements = Object.groupBy(movements, function (move) {
  return move > 0 ? `deposits` : `withdrawals`;
});

console.log(groupedMovements);
```

We get an object as a result. That is why it is called `Object.GroupBy()`.

- The object will have the keys that we created. `ie`: deposits and withdrawals. The names of the groups that will be created in the object.
