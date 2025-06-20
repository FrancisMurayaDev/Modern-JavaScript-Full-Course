# Iterating over an Object Using `for.. in`

You can use for ..in loop to iterate over an Object.

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

for (let key in student) {
  console.log(key);
}
```

### The `for --in` loop can also be used to loop over arrays.
