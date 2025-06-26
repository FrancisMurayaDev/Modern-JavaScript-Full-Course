# The Bind Method

The bind method also helps us manually set the `this` keyword for any function call.

The diffrence is that `bind` does not immediately call the function, instead it returns a new function where the `this keyword` is bound.

- It is set to whatever value we pass into bind.

Lets say we want to use the book function for `uhuruKenyatta` all the times.

```js
book.bind(uhuruKenyatta); // we use the bind method and set it to the object name.
```

- It will not call the `book` function, instead it will return a new function with `this` keyword always set to `uhuruKenyatta`.

Lets save the returned function in a variable.

```js
const bookUH = book.bind(uhuruKenyatta);
```

Now lets use the `bookUH` function.

```js
const bookUH = book.bind(uhuruKenyatta);

bookUH(789, "Trick Williams"); // it looks like the normal book function again
```

### Now we can go ahead and create booking functions for each of the airlines.

```js
const JK = book.bind(jomoKenyatta);
const FF = book.bind(francisFlights);

JK(101, "Cody Uso");
FF(200, "Gunther Kaffe");

console.log(jomoKenyatta);
console.log(francisFlights);
```

This is great and we can even take this even further.

## There are other situations we can use the bind method.

1. When we use objects together with event listeners.

lets add a new property and method to `francisFlight` object.

- We want to add a new plane, when we click on a button.

(to be completed...)

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

// Bind Method

const bookUH = book.bind(uhuruKenyatta);

bookUH(789, "Trick Williams"); // it looks like the normal book function again

console.log(uhuruKenyatta);

const JK = book.bind(jomoKenyatta);
const FF = book.bind(francisFlights);

JK(101, "Cody Uso");
FF(200, "Gunther Kaffe");

console.log(jomoKenyatta);
console.log(francisFlights);

// Using Event Listeners with Objects.(bind)

francisFlights.planes = 300;
francisFlights.buyNewPlane = function () {
  console.log(this.planes++);
};
```
