# Modifying Objects

## Adding Properties to an Object

You can use the dot or bracket notation to add a property to an object.

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

student.location = "Nairobi";
student["major"] = "BBIT";

console.log(student);
```

## Updating a Property

You can use the bracket or dot notation to update an object property.

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

student.firstName = "John";
student["studying"] = false;
```

## Deleting a Property

Use the `delete` key word to delete a property.

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

delete student.firstName;
delete student["age"];
```
