# Types of Functions

## 1. Function Declaration

```js
function add(a, b) {
  console.log(a + b);
}

add(5, 2);
```

## 2. Function Expression/ Anonymous Function

It involves saving a function to a variable.

```js
let add = function (a, b) {
  console.log(a + b);
};

add(5, 2);
```

## 3. Arrow Functions

Arrow functions were introduced to ES6 to simplify how we write functions.

```js
let add = (a, b) => {
  return a + b;
};

console.log(add(5, 2));
```

- If an arrow function has only one line of code in the body, we can get rid of the curly braces.

```js
let add = (a, b) => console.log(a, b);
add(6, 8);
```

- If an arrow function has only one line of code, and that line of code happens to be a `return statement`, we can get rid of the `return` keyword.

```js
let add = (a, b) => a + b;

console.log(add(4, 7));
```

- If an arrow function has only `one parameter`, we can get rid of the parenthesis.

```js
let square = (number) => number * number;

console.log(square(5)); //25
```

- Arrow functions do not get a `.this` keyword. (More about this later).

## 4. Immediately Invoked Function Expression

This functions are executed immediately after being defined.

```js
(function () {
  console.log("Hello, World!");
})();
```

These functions also take parameters.

```js
(function (a, b) {
  let sum = a + b;
  let product = a + b;
  console.log(`The sum of ${a} and ${b} is ${sum}`);
  console.log(`The product of ${a} and ${b} is ${product}`);
})(5, 6);
```

## 5. Callback Functions

These are functions that are passed as an argument to other functions.

```js
function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

greet("Dennis", function () {
  console.log("Welcome back");
});
```
