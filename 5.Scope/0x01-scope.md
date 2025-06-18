# Scope

Scope in JavaScript, determines where variables are accessible.

- It determines the accessibility (visibility) of a variable.

## JavaScript has the following types of Scope.

### 1. Global Scope

A variable declared outside a function or block is considered globally scoped.

It means, it can be accessed anywhere in the JavaScript program.

```js
let age = 25;

function exampleFunction() {
  console.log(age); // accessible inside function
}

exampleFunction(); // 25
console.log(age); // accessible outside function too
```

### 2. Function Scope (Local Scope)

Variables declared within a function body are only accessible within that function.

They cannot be accessed outside the function.

```js
function exampleFunction() {
  let age = 25;
  console.log(age); // works inside the function
}

console.log(age); // ReferenceError: age is not defined
```

### 3. Block Scope (`let` and `const`)

Before ES6, JavaScript only had global and local scope.

- The `var` keyword did not support block scope.
- ES6 introduced `let` and `const` which have block scope.
- A `block` is any code inside the `curly braces` `{}`. Example: `if, while, and for statements`.

```js
if (true) {
  let age = 25;
  console.log(age); // works inside the block
}
console.log(age); // age is not defined
```

- Variables declared with `let` and `const` are only acessible within the block they are declared in.
- `var` does not follow block scope.

### 4. Lexical Scope

Lexical Scope means that, a function can access variables from its parent scope. Eg: `parent function`.

```js
function parentFunction() {
  let age = 25;
  function innerFunction() {
    console.log(age); // 25
  }
  innerFunction();
}

parentFunction();
```
