# Loops

Loops enable you to execute a block of code multiple times.

The basic loops in JavaScript are:

## - for loop

for loop is used when the number of times a block of code should be executed is known.

syntax:

```js
for (initialization; condition; update) {
  // code
}
```

Initialization - used to initialize the variable used in the loop.

Condition - used to evaluate the condition of the initial variable. If the condition returns true, the loops starts over again, if the condition returns false, the loop ends.

Update - is used to update the initialized variable.

```js
for (let i = 1; i <= 5; i++) {
  console.log("Iteration:", i);
}
```

## - while loop

While loop runs as long as a specified condition remains true.

- Used when you don't know how many iterations you will have.
- It does not really need a counter, making it more versatile.
- It only needs a condition to remain true for it to keep running.

syntax:

```js
while (condition) {
  // code block to be executed if condition is true
}
```

- It keeps running while a condition is true.

example code:

```js
let num = 1;

while (num <= 5) {
  console.log("Number ", num);
  num++;
}
```

EXAMPLE: Where we dont need a counter.

- lets say we want to roll a dice until it is 6 to stop.
- We dont know how many times it should roll.

## - do while loop

Executes a condition atleast once, even if the condition is `fasle from start`.

syntax:

```js
do {
  /* code of block that will be
     executed at least once even if
     condition is false */
} while (condition);
```

example code:

```js
let x = 1;

do {
  console.log("x ", x);
  x++;
} while (x <= 5);
```
