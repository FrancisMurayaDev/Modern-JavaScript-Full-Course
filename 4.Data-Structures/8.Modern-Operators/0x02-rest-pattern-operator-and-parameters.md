# Rest Pattern and Parameters

Rest operator looks like spread operator.

- It does the oposite of spread operator.

Rest operator is usually on the left-hand side of the equal `=` sign.

Spread operator is on the right side of `=`.

- We can use the rest operator on the left side of `=` with destructuring.

```js
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(others); // [ 3, 4, 5 ]
```

The `Rest` operator selects all the elements after the last selected variable. It does not include a `skipped` element.

Example:

```js
const fruits = ["banana", "mango", "grapes", "apple", "melon"];

const [banana, , grapes, ...otherFruits] = fruits; //one element skipped.

console.log(banana, grapes, otherFruits);
// banana grapes [ 'apple', 'melon' ]
```

- mango which was skipped is not included.

- `Rest` operator should always be the last in the destructuring assignment.
- There can only be one rest in any destructuring assignment.

<hr>

Rest Operator collects elements that are un-used and condense them into an array.

- Rest packs elements into an array.

<hr/> <hr/>

## Lets do the same for Objects.

The rest operator also works in objects.

The remaining elements will be collected into a new object.

Lets have this object:

```js
const resturant = {
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
};
```

Lets work with the openingHours, let say we want to select only `sat` and then the rest will go to a new object `weekDays`. `thu` and `fri` are the week days.

```js
const { sat, ...weekDays } = resturant.openingHours;
console.log(weekDays);

// { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } }
```

`weekDays` will be an object containig `thu` and `fri`.

## Rest Operator and Function Parameters (Rest Parameter)

Lets create a function that can take any amount of arguments.

```js
const add = function (...numbers) {
  console.log(numbers);
};

add(3, 4, 5, 6);
add(8, 4);
add(8, 4, 2);

// We will see three arrays of the numbers passed into the function.
// The rest operators packs the values into 1 array.
```

Now we can write a simple logic to add all the numbers together.

```js
const add = function (...numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  console.log(sum);
};

add(3, 4, 5, 6);
add(8, 4);
add(8, 4, 2);

// Lets take it further
const x = [8, 0, 8, 7];

add(...x);
```
