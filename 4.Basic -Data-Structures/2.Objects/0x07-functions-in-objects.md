# Functions in Objects

A function in an object is called a `method`.

It is written as a function `expression`

```js
const francis = {
  firstName: "Francis",
  lastName: "Muraya",
  birthYear: 1950,
  hadDriversLicense: true,
  friends: ["John", "Wick", "Doe"],
  calcAge: function (birthYear) {
    birthYear - 2089;
  },
};
```

- We can call the function like this.

```js
const francis = {
  firstName: "Francis",
  lastName: "Muraya",
  birthYear: 1950,
  hadDriversLicense: true,
  friends: ["John", "Wick", "Doe"],
  calcAge: function (birthYear) {
    return 2089 - birthYear;
  },
};

console.log(francis.calcAge(1950));
```

- You will notice the 1950 that we passed in the `francis` object when calling the function is already defined in the object.

However, we are repeating ourselves. We need to keep our code `DRY` (Dont Repeat Yourself) principle.

### JavaScript gives us accesss to a special variable called `.this`.

The `this` keyword is equal to the varible name of the object. Or the object calling the method.

In our instance, the `this` keyword will be equal to the `francis` object.

```js
francis.calcAge();
```

Here, francis is the object calling the method.

So the code will be like this:

```js
const francis = {
  firstName: "Francis",
  lastName: "Muraya",
  birthYear: 1950,
  hadDriversLicense: true,
  friends: ["John", "Wick", "Doe"],
  calcAge: function () {
    return 2089 - this.birthYear;
  },
};

console.log(francis.calcAge());
```

`this` points to the entire object.

We could also have used `francis.birthYear` but this would violate `DRY principles` and it wont be consistent if we change the object name in future.

- Using `this` will be consistent when we change the object name.

`this` is a reference to the object itself.

### We can also create a new property on the object to store data.

Remeber we can use dot notation to create new properties.

Lets create a new age property.

```js
const francis = {
  firstName: "Francis",
  lastName: "Muraya",
  birthYear: 1950,
  hadDriversLicense: true,
  friends: ["John", "Wick", "Doe"],
  calcAge: function () {
    this.age = 2089 - this.birthYear;
    return this.age;
  },
};

francis.calcAge(); // call the method

console.log(francis.age); // age property now exists in francis object
```

Arrays are also a special type of objects, that is why they can have objects as well.

`Challenge: `

Using the francis object above, write a method called `summary` to summarize everything about the object.

`solution:`

```js
const francis = {
  firstName: "Francis",
  lastName: "Muraya",
  birthYear: 1950,
  hadDriversLicense: true,
  friends: ["John", "Wick", "Doe"],
  summary: function () {
    this.summary = `My name is ${this.firstName} ${
      this.lastName
    }, I was born in ${this.birthYear}, I ${
      this.hadDriversLicense ? "have" : "dont have"
    } a driver's license. My friends are ${this.friends[0]}, ${
      this.friends[1]
    }, and ${this.friends[2]}`;

    return this.summary;
  },
};

francis.summary();

console.log(francis.summary);
```
