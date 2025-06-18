# First Class vs Higher Order Functions

## First Class Functions

- In JavaScript, functions are `First Class Citizens`.

This means that, they can be assigned to variables, passed as arguments, returned from other functions, stored in data structures and even created dynamically.

- In simple terms, functions are treated as `values` in JavaScript.

- A function is just another type of `Object`. (since objects are values, functions are values too.)

- Objects have methods too.
- There are also `function methods`, methods that we can call on functions.

Example: `bind()` method.

### Since JavaScript has `first class functions`, this allows us to write and use `high order functions`.

A `higher order function` is a function that `recieves other function(s)` `(callbacks)` as an `argument`, returns a function as its result or both.

- This is possible because functions in JS are treated as first-class citizens.

Example of higher order function:

- `addEventListener()` - it recieves another function as an argument (input).

```js
btnClose.addEventListener('click`, greet)
```

greet is a callback function.

#### High order functions can also return a new function.

```js
function count() {
  let counter = 0;
  return function () {
    counter++;
  };
}

count(); //It will return an anonymous function
```

Lets Create our own higher order functions on the next lecture:
