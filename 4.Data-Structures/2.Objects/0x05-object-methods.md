# Object Methods

## Object.keys(`objectName`)

Returns an array containing all the keys of an object.

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

console.log(Object.keys(student));

// [ 'firstName', 'lastName', 'age', 'studying', 'greet' ]
```

## Object.values(`objectName`)

Returns an array containing all the values of an object.

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

console.log(Object.values(student));

// [ 'Francis', 'Muraya', 20, true, [Function: greet] ]
```

## Object.entries(`objectName`)

Returns an array of key-value pairs from an object, making it useful for `iteration`.

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

console.log(Object.entries(student));

/*

[
  [ 'firstName', 'Francis' ],
  [ 'lastName', 'Muraya' ],
  [ 'age', 20 ],
  [ 'studying', true ],
  [ 'greet', [Function: greet] ]
]
*/
```

## Object.freeze(`objectName`)

Freezes an object, preventing new properties from being added to it and existing ones from being removed.

- It prevents an object modification.

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

Object.freeze(student);

student.middleName = "Doe"; // this wont work
```
