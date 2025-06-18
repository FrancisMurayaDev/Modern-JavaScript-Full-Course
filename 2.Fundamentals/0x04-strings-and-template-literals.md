# Strings Concanttination and Template Literals

String concantination is the process of joining two or more strings together.

JavaScript provides multiple ways to concantinate strings.

1. Using the `+` operator.

```js
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + lastName;
console.log("My full name is " + fullName);
```

2. Using the `+=` operator to append the existing link.

- it allows adding a string to an existing string.

```js
let message = "Hello ";
message += "Dennis.";
console.log(message);
```

2. Using Template Literals ` (``) `

Template Literars uses backticks ` (``) ` and `${}` placeholder for variables (interpolation).

```js
let firstName = "John";
let lastName = "Doe";
console.log(`My name is ${firstName} ${lastName}`);
```
