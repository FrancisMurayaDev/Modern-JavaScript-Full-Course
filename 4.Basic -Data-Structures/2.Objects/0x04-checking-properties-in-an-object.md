# Checking Properties in an Object

To check whether a certain property is available in an object, you can use:

- `in` keywords or
- `hasOwnProperty()` method

## The `in` keyword

It checks whether an object as a certain property.

It returns true or false.

```js
const student = {
  firstName: "Francis",
  lastName: "Muraya",
  age: 20,
  studying: true,
  greet: function () {
    console.log("Hello!");
  },
};

console.log(student.hasOwnProperty("firstName")); //true
console.log(student.hasOwnProperty("middleName")); //false
```
