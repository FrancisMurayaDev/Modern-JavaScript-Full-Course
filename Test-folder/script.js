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
