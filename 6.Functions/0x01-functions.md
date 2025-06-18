# Functions

A funciton is a block of code that performs a specific task.

Functions help in holding modular, re-usable and maintainable code.

Functions can hold more than one line of code.

- In JavaScript, functions are `First Class Citizens`.

This means that, they can be assigned to variables, passed as arguments, returned from other functions, stored in data structures and even created dynamically.

Basic syntax of declaring a function:

```js
function functionName() {
  // function body
}
```

```js
function printHello() {
  console.log("Hello, world");
}
```

To use a function, you must `call/ invoke/ run` the function for it to be executed as shown:

```js
function printHello() {
  console.log("Hello, world");
}

// calling/invoking a function
printHello();
```

## Function Declaration vs Function Expression

### Function declaration

We use the function keyword to declare a function the way we declare a variable.

```js
function calcAge(birthYear) {
  return 2067 - birthYear;
}

let age1 = calcAge(1965);
```

This is a function declaration.

### Function Expression

- Also referred to as an anonymous function.
- It is a function without a name.

```js
let calcAge2 = function (birthYear) {
  return 2067 - birthYear;
};

let age2 = calcAge2(1967);

console.log(age2);
```

An expression produces a value. We store than value in a variable. Now the varible will be the function.

- To call the function, we will call the variable the exact way we call a variable.
- Expressions are recommended since they enforce a good structure (`follow your prference though`)

### Main diffrence between `Function declaration` and `Function Expression`

- We can call function declarations before they are defined in the code:
  You call it first, then define it later.

```js
greet(); //you call it first

function greet() {
  // here we declare it later
  console.log("Hello, Good Morning!");
}
```

- With a function expression, this will not work.

## This process is called `Hoisting.`
