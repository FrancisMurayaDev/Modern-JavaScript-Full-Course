# The Call and Apply Methods

Lets go back to `this` keyword and learn how we can set it mannualy and why we would want to do that.

Lets have an object:

```js
const jomoKenyatta = {
  airlineName: "Jomo Kenyatta",
  flightCode: "JK",
  bookings: [],
  book(flightNum, passName) {
    console.log(
      `${passName} booked a flight on ${this.airlineName}, flight ${this.flightCode}${flightNum}`
    );

    this.bookings.push(
      `${passName} booked a flight on ${this.airlineName}, flight ${this.flightCode}${flightNum}`
    );
  },
};

jomoKenyatta.book(347, "Francis Muraya");
jomoKenyatta.book(674, "John Doe");
/*
Francis Muraya booked a flight on Jomo Kenyatta, flight JK347
John Doe booked a flight on Jomo Kenyatta, flight JK674
*/
console.log(jomoKenyatta);
*/
```

The `this` keyword here points to the `jomoKenyatta` object.

Lets say, after some years, `Jomo Kenyatta` created a new airline, lets call it Uhuru Kenyatta.

It will have a similar object, with the new airline name.

```js
const uhuruKenyatta = {
  airlineName: "Uhuru Kenyatta",
  flightCode: "UH",
  bookings: [],
};
```

We also want to take bookings for a `Uhuru Kenyatta Flight`.

Taking the `Jomo Kenyatta` method and copying it in `Uhuru Kenyatta` object will be a bad practice.

We will take the function and store it in an external function and re-use it in our airlines.

We will simply do this:

```js
const book = jomoKenyatta.book;

book(890, "James Kim"); // It will not work, since book is just a copy of a method. this keyword in it will point to undefined.
```

This `book` function is not a method anymore, it is just a copy, so when we call it `this` properties will be undefined in strict mode.

How do we tell JavaScript we want to book on our current or new airline?

- If we want to book Jomo Kenyatta flight the this keyword should point to `jomoKenyatta` and if we want to book a Uhuru Kenyatta flight, the this keyword should point to `uhuruKenyatta`.

## How do we do that?

Since functions are objects, they also have methods too.

There are 3 function methods to do that:

1. call
2. apply
3. bind

Instead of using `book(890, "James Kim");` which does not work,

### 1. call() method

```js
book.call(uhuruKenyatta, 890, "James Kim");
console.log(uhuruKenyatta);
```

- call method takes in the name of the object, and the method arguments.

We can now even call the original object.

```js
book.call(jomoKenyatta, 734, "Kevin Williams");
console.log(jomoKenyatta);
```

- We now have a way of manipulating the `this` keyword using the `call method`.

Now we can go ahead and create more airline groups. However the Object properties should have the same format.

```js
const francisFlights = {
  airlineName: "Francis Flights",
  flightCode: "FF",
  bookings: [],
};

book.call(francisFlights, 321, "Jack Beur");
console.log(francisFlights);
```

### 2. Apply Method

The `apply` method does exactly same thing as `call` method, however `apply` does not recieve a list of arguments after the `this` keyword, Instead it takes an `array of the arguments`.

```js
const data = [678, "Abraham Doe"];
book.apply(francisFlights, data);
book.apply(francisFlights, [908, "Angela Yu"]);
console.log(francisFlights);
```

The apply method is not anymore used in JavaScript since we have a better way of doing the exact same thing using `call` by using `spread` operator to take data out of an array.

```js
const data2 = [645, "Jonas Swisman"];

book.call(francisFlights, ...data2);
console.log(francisFlights);
```

With modern JS, it can be better to use the `call` method and then spread out the data from an array.

There is another more important method called the `bind method`.

<hr> <hr>  <hr>  <hr>

```js
const jomoKenyatta = {
  airlineName: "Jomo Kenyatta",
  flightCode: "JK",
  bookings: [],
  book(flightNum, passName) {
    console.log(
      `${passName} booked a flight on ${this.airlineName}, flight ${this.flightCode}${flightNum}`
    );

    this.bookings.push(
      `${passName} booked a flight on ${this.airlineName}, flight ${this.flightCode}${flightNum}`
    );
  },
};

jomoKenyatta.book(347, "Francis Muraya");
jomoKenyatta.book(674, "John Doe");
/*
Francis Muraya booked a flight on Jomo Kenyatta, flight JK347        
John Doe booked a flight on Jomo Kenyatta, flight JK674
*/
console.log(jomoKenyatta);

const uhuruKenyatta = {
  airlineName: "Uhuru Kenyatta",
  flightCode: "UH",
  bookings: [],
};

const book = jomoKenyatta.book;

// CALL METHOD

book.call(uhuruKenyatta, 890, "James Kim");

console.log(uhuruKenyatta);

book.call(jomoKenyatta, 734, "Kevin Williams");
console.log(jomoKenyatta);

const francisFlights = {
  airlineName: "Francis Flights",
  flightCode: "FF",
  bookings: [],
};

book.call(francisFlights, 321, "Jack Beur");
console.log(francisFlights);

// APPLY METHOD

const data = [678, "Abraham Doe"];
book.apply(francisFlights, data);
book.apply(francisFlights, [908, "Angela Yu"]);
console.log(francisFlights);

// Better Way Using Call rather than apply method

const data2 = [645, "Jonas Swisman"];

book.call(francisFlights, ...data2);
console.log(francisFlights);
```
