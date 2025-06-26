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
