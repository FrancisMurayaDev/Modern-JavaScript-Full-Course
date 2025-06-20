# Accessing Object Properties

There are 2 ways of accessing object properties.

## Dot Notation (`.`)

Dot notation allows access to an object properties using a dot, followed by the property name.

```js
const student = {
  firstName: "Francis",
  secondName: "Muraya",
  studying: true,
  major: "BBIT",
  age: 22,
  greet: function () {
    console.log("Good Morning!");
  },
};

console.log(student.firstName); //Francis
console.log(student.studying); // true
console.log(student.age); // 22
console.log(student.greet); // [Function: greet]
```

## Bracket Notation (`[]`)

Accesses object properties using a bracket notation `[]`, with the property name as a `string`.

```js
const student = {
  firstName: "Francis",
  secondName: "Muraya",
  studying: true,
  major: "BBIT",
  age: 22,
  greet: function () {
    console.log("Good Morning!");
  },
};

console.log(student["firstName"]); //Francis
console.log(student["studying"]); // true
console.log(student["age"]); // 22
console.log(student["greet"]); // [Function: greet]
```
