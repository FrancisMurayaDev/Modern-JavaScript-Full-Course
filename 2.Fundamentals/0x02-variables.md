## Variables

A variable in JavaScript is like a labeled container that holds a piece of information, the information can be retrived later when needed using the label name.

- A Value is a piece of data stored inside a variable.

- A value could be a number, a text, a list, a function and so on. Values have various data types.

- A `constant` is a value that does not change.

## Declaring Variables

JavaScript provides 3 ways to declare Variables.

### - const - Used for values that should not change.

```js
const name = "Muraya";
```

### - let - Preferred for variables that change.

```js
const age = 23;
```

With `let`, you can update the variable value.

```js
age = 25;
```

### - var - Old way, not recommended for modern JavaScript.

## Declaring VS Initialising Variables

### Declaring a Variable

Creating a variable without assigning it a value. It tells JavaScript that the variable exists but does not have any value.

Its value is `undefined`

```js
let year; // declared but not initialized

console.log(year); // Output will be undefined

// You can later define the variable

year = 2019;

console.log(year); //output will be 2019
```

### Initializing a Variable

Initializing a variable means giving it a value at the time of declaration.

```js
let month = "January";
```

- `const` should be initialized immediately.

## Rules for Naming Variables

Variables names can only start with:

- a small letter
- underscore (`_`)
- dollar-sign (`$`)

Example:

```js
const name = "John";

const $price = 70;

let _month = "January";
```

### JavaScript variables names should not be JavaScript reserved words such as `let, function,name,interface`.

### They should not contain spaces or special charatcter apart from (`$ and _`).

### Use meaningful and descriptive names.

```js
let userName = "John";
let totalPrice = 150;
```

### If a Variable is made up of Multiple Words, use `camelCasing` convention.

camelCasing convention is where you start the first name with a small letter then the next name follows with a capital letter at the beginning.

example:

```js
let isLoggedIn = true;
```

### Dynamic Typing - JavaScript automatically determines the data type of a value stored in a variable.

In JavaScript, it is the value that has a type. Variables store values that have a type.
