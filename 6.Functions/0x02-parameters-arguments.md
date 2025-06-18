# Parameters vs Arguments

# Parameter

A parameter is a variable declared in a function defination.

- It acts as a placeholder for the value that will be passed to the function when the function will be called.

```js
function greet(/*parameter*/) {}
```

```js
function greet(name) {
  // name is a parameter
  console.log(`Hello ${name}`);
}

greet("John Doe"); // John Doe is an argument
```

## Default Parameters

We can assign default values on parameters and overide them when calling the function.

You add an `=` sign after the parameter and add a default value.

Example:

```js
function calculateTax(cost, taxPercentage = 0.1) {
  console.log(cost * taxPercentage);
}

calculateTax(568);
calculateTax(890, 0.2);
```

Another Example:

`To understand this, first learn arrays`

```js
const bookings = [];

function bookFlight(flightNumber, passengers, price) {
  const book = [flightNumber, passengers, price];
  console.log(book);
  bookings.push(book);
}

bookFlight("A32", 3, "$678"); // [ 'A32', 3, '$678' ]
bookFlight("A33", 2, "$670"); // [ 'A33', 2, '$670' ]

console.log(bookings); // [ [ 'A32', 3, '$678' ], [ 'A33', 2, '$670' ] ]
```

Lets assign a default value to the parameter `price`.

```js
const bookings = [];

function bookFlight(flightNumber, passengers, price = `$100`) {
  const book = [flightNumber, passengers, price];
  console.log(book);
  bookings.push(book);
}

bookFlight("A32", 3, "$678"); // [ 'A32', 3, '$678' ]
bookFlight("A33", 2); // [ 'A33', 2, '$100' ]
```

When calling the function for the second time, we do not specify the price in the argument, it will take the default price value on the `price` parameter.

<hr/>

### You cannot skip and argument when calling a function.

The trick is to set the parameter value when calling the function to `undefined`. The default value of the parameter will be applied.

- `undefined` is the same as not setting it.

```js
const bookings = [];

function bookFlight(flightNumber, passengers = 100, price = passengers * 10) {
  const book = [flightNumber, passengers, price];
  console.log(book);
  bookings.push(book);
}

bookFlight("AHT1", undefined, "$789"); // [ 'AHT1', 100, '$789' ]
```

<hr/>
<hr/>
<hr/>
<hr/>

# Argument

An argument is the actual value that is passed to a function when it is being called.

- It provides the data that the function or the method will work on.

```js
function greet(name) {
  // name is a parameter
  console.log(`Hello ${name}`);
}

greet("John Doe"); // John Doe is an argument
```

## How Passing Arguments Works (Value vs Reference)

`learn objects firsts then come back to learn this`

We want to understand how primitives and objects work in the context of functions.

Lets use this example:

```js
const flight = "LH230";

const francis = {
  name: "Francis Muraya",
  passport: 98765432,
};

const checkIn = function (flightNumber, passenger) {
  flightNumber = "UT897";
  passenger.name = "mr." + passenger.name;

  if (passenger.passport === 98765432) {
    console.log(`Checked In!`);
  } else {
    console.log(`passport mismatch!`);
  }
};

checkIn(flight, francis);

console.log(flight);
console.log(francis);

/* The output will be as follows:
> Checked In!
> LH230
> 98765432
*/
```

Lets analyze the code:

- The `flight` here is a primitive, because it is just a string.

- The `flightNumber` in the function is basically a copy of the original value of the flight variable.

It is the same as writing `flightNumber = flight`.

- `flightNumber` here is a completely different variable.

- So when we changed it inside the function, it did not get reflected in the outside variable.

Now lets see the `francis` object that we passed into the `checkIn` function.

- In the function, it is called passenger. We changed it inside the function and it changed.

> Why did that Happen?

- When we pass a reference type to a function, what is coppied is just the reference to the object in the memory heap.

It is the same as doing this:

```js
const flightNumber = flight;
const passenger = francis; // When we copy an object like this, we are only copying the reference to that object in the memory heap.
```

- In the function, we are manipulating the `francis object`.

- Because `passenger` and `francis` are now the same objects in the memory heap.

### Summary

- Passing a primitive to a function is simply creating a copy outside of the function.

```js
const flightNumber = flight;
```

- When we pass an object to a function, it is copying the object like this:

```js
const passenger = francis;
```

What we change in the copy, will also change in the original since they reference to the same object in the memory heap.

- Objects behave this way when passed to functions and this can lead to unforeseeable consequences in large code bases, especially when collaborating with other developers.
