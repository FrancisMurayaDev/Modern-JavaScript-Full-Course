# Looping Arrays

When looping an array, we start looping from `zero` as an array is `zero based` when it comes to reading elements.

The first element in an array is at index `0`.

- A loop keeps running while a condition is true.

Lets say, we want to log each element of an array to the console using a loop.

```js
const francisArray = [`muraya`, `software engineer`, `BBIT`];

for (let i = 0; i < francisArray.length; i++) {
  console.log(francisArray[i]);
}

/*Output:
muraya
software engineer
BBIT
*/
```

## Looping Backwards

```js
const francisArray = [`muraya`, `software engineer`, `BBIT`];

for (let i = francisArray.length - 1; i >= 0; i--) {
  console.log(francisArray[i]);
}

/*Output:
BBIT
software engineer
muraya
*/
```

### We can also have a loop inside a loop

```js
for (let excercise = 1; excercise < 5; excercise++) {
  console.log(`---starting excercise ${excercise}`);

  for (let rep = 1; rep < 4; rep++) {
    console.log(`starting rep ${rep}`);
  }
}
```
