# Objects

In JavaScript, an object is a collection of key-value pairs.

- It is as datas ctructure that stores values as a collection of key value pairs.

- The `key` must be always a string, but the `value` can be of any type.

- `Keys` are also referred to as properties.

Objects are one of the most important Data Structures in JavaScript.

- A `function` inside an object is called a `method`.

## How to Create Objects

JavaScript provides the following ways to create an object.

### 1. An Object Literal

Creating an object using curly braces.

```js
const student = {
  firstName: "Francis",
  lastName: "Muraya",
  age: 25,
  major: "BBIT",
  studying: true,
  institution: "MUT",
  greet: function () {
    console.log("Hello!");
  },
};
```

### 2. Using `new Object()`

- The `new Object` creates an empty object.
- Its function is equivalent to object literal but rarely used in modern JavaScript.

```js
const student = new Object();
student.firstName = "Francis";
student.lastName = "Muraya";
student.age = 23;
student.major = "BBIT";
student.studying = true;
student.greet = function () {
  console.log("Hello");
};
```

### 3. Using a `constructor function`.

A constructor function in JavaScript is a regular function used with the `new` keyword to create multiple objects with shared properties and methods.

- Constructor's function name starts with a capital lettter.

```js
function Student(firstName, lastName, age, studying, major) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.studying = studying;
  this.major = major;
  this.greet = function () {
    console.log(`Hello`);
  };
}

const francis = new Student("francis", "Muraya", 25, true, `BBIT`);
```

In most of the times, opt for object literals for creating objects in JavaScript.

Objects can hold any type of value, either an `array, function (`as an expression`), number, boolean or string`.
