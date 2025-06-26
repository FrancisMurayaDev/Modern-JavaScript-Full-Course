# `this` keyword

`this` keyword takes the values of the owner of a function. It points to the owner of a function.

- The value of `this` keyword is not static. It depends on how the function is called, and its value is assigned only when the function is actually called.

## 4 ways Functions can be called.

### 1. As a `method`. A function attached to an object.

The this keyword inside that method will point to the object on which the object is called. In other words, it points to the object, that is calling the method.

```js
const francis = {
  firstName: "Francis",
  lastName: "Muraya",
  birthYear: 1987,
  calcAge: function () {
    console.log(2087 - this.birthYear); // the value of this keyword here is francis object. this.year is same as francis.year as well.
  },
};

francis.calcAge();
```

Doing it this way, it is better to use `this.year` than `francis.year`.

## 2. As a Normal Function

Calling a function not attached to anything.

- In this case, the `this` keyword will be undefined. That is only valid for strict mode.

If you are not in `strict mode`, `this` will point to the global object which is the `window` object.

Another good reason to use strict-mode since this could be problematic.

## 3. Arrow Functions

Not a way of calling functions, but an important kind of function that we need to consider.

- Arrow functions do not get their own `this` keyword.

## 4. Event Listener

When a function is called as an event listener, the `this` keyword will point the DOM element that the handler is attached to.

### There are other way that we can call a function. For example using the following keywords:

- new
- call
- apply
- bind
