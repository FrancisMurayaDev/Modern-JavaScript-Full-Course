# Categories of Functions

In programming, functions can be categorized as follows.

### Functions that don't take a parameter and dont return a value.

```js
function add() {
  let a = 55;
  let b = 68;
  console.log(a + b);
}

add();
```

### Functions that don't take parameter but return a value.

```js
function add() {
  let a = 55;
  let b = 68;
  return a + b;
}

console.log(add());
```

### Functions that take parameters but dont return a value.

```js
function add(a, b) {
  console.log(a + b);
}
add(5, 3);
```

### Functions that take parameters and return a value.

```js
function add(a, b) {
  return a + b;
}
console.log(add(5, 3));
```
