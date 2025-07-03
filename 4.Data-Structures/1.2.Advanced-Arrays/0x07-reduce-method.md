# Reduce Method

Used to boil all elements in an array to one single value.

The first parameter of the reduce callback function is the `accumulator` then followed by element, index and the entire array.

The reduce method takes in the `callback`as the first parameter and `initial value of the accumulator` in the first loop iteration as the second parameter.

In this example, we start adding from `0`.

```js
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const totalBalance = movements.reduce(function (acc, value) {
  return acc + value;
}, 0);

console.log(totalBalance);

// 3840
```

When using the `reduce` method, it is important to ask yourself, what is the purpose of the `accumulator value`. In the example above, the accumulator keeps track of the current sum.

```js
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const maxValue = movements.reduce(function (acc, currValue) {
  if (acc > currValue) {
    return acc;
  } else {
    return currValue;
  }
}, movements[0]);

console.log(maxValue); // 3000
```

You have to think what the accumulator value and current value should be and how they should interact.

`reduce` can be powerful and also difficult to use.
