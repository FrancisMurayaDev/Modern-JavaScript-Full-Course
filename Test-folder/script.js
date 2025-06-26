const secureBooking = function () {
  let passengerCount = 0;
  // passengerCount variable cannot be manipulated or accessed from the outside.

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers
