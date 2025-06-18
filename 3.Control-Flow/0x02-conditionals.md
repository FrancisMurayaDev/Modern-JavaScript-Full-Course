# Conditionals (if/else and switch statement)

Conditionals allows you to execute diffrent block of codes based on a specific conditions.

Conditional Statements in JavaScript are:

## if statement

If statement is used to execute a block of code, if a specific condition is true.

The syntax is as follows:

```js
if (condition) {
  // block of code to be executed if the condition is true
}
```

Example in a code:

```js
let age = 22;
if (age > 18) {
  console.log("You are an adult");
}
```

## if else statement

If else - executes the code in the if block if the condition is true, otherwise executes the code in the code block if the condition is false.

```js
if (condition) {
  // block of code to be executed if the condition is true
} else {
  // block of code to be executed if the condition is false
}
```

Example in code:

```js
let age = 16;
if (age > 18) {
  console.log("You are an adult");
} else {
  console.log("You are a child");
}
```

## if else ladder

It is used when multiple conditions need to be checked sequentially.

The syntax is as follows:

```js
if (condition1) {
  // block of code to be executed if condition1 is true
} else if (condition2) {
  // block of code to be executed if condition1 is false and condition2 is true
} else {
  // block of code to be executed if both condition1 and condition2 are false
}
```

example in code:

```js
let marks = 85;
if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 80 && marks < 90) {
  console.log("Grade: B");
} else if (marks >= 70 && marks < 80) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
```

## switch statement

Used when a varibale has multiple possible values. Usually cleaner than using if else ladder.

syntax:

```js
switch (expression) {
  case value1:
    // block of code to be executed if expression === value1
    break;
  case value2:
    // block of code to be executed if expression === value2
    break;
  default:
  // block of code to be executed if expression doesn't match any case
}
```

code example:

```js
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the work week.");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  case "Sunday":
    console.log("It's a rest day.");
    break;
  default:
    console.log("It's a regular day.");
}
```
