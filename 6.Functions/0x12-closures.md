# Closures

Closure is not a future that we explicitly use. We dont create closures manually.

A closure happens automatically in certain situations

Lets create one of those situations.

```js
const secureBooking = function () {
  let passengerCount = 0;
  // passengerCount variable cannot be manipulated or accessed from the outside.

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
```

Now use the `booker` function and see the closure in action.

Lets call it 3 times.

```js
booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers
```

Remeber, the `secureBookings` function already finished its execution.

### How did the `booker` function update the passengerCount variable defined in `secureBookings` function that has already finished executing. Its gone, its execution context is no longer on the stack.

What makes this possible is a `closure`.

A closure makes a function remember all the variables that existed at the function birth place.

- `secureBookings` is the birth place of the `booker` function.

Closure :

- giving a function access to all the variables of its parent function even after the parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time.
