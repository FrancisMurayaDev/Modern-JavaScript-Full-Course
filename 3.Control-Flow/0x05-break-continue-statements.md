# Break and Continue Statements

Break and continue statements are statements used inside a loop.

## `break` statement

Break is used to terminate a running loop when a particular conditon occurs.

- When a `break` occurs, the loop stops executing.
- Break Statement exits a loop completely.

```js
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}
//Output: 0, 1, 2, 3, 4
```

## `Continue` statement is used when we want to skip a particular iteration.

- The loop skips the current iteration and moves to the next.

```js
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

// 5 will be skipped.
```

## Diffrence between Statements and Expressions

### Statement is a code that does not provide a value on its own.

Example: if-else statement

## An expression is a code that produces a value.
