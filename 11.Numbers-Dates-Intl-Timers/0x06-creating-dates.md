# Creating Dates

There are 4 ways of creating dates in JavaScript, they all use the `new Date()` constructor function but they can accept diffrent parameter.

### 1. Using the `new Date()` constructor.

It gives the current date and time at the very moment.

```js
const now = new Date();
console.log(now);

// Fri Jul 04 2025 13:03:30 GMT+0300 (East Africa Time)
```

```js
const now = new Date();
console.log(now);

// To get the year

currentYear = now.getFullYear();

console.log(currentYear); // 2025
```

To get Months, you should note that months is Zero based, for instance `0` means month `1`.

```js
currentMonth = now.getMonth();
console.log(currentMonth); // 6
// In real life it is in month 7 of the year.
```

We can get the day and date of the week:

```js
const currentDay = now.getDay();
console.log(currentDay); // 5 which means Friday

const dateOfMonth = now.getDate();
console.log(dateOfMonth); // 4
```

We can also get the hours, minutes and seconds.

```js
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

console.log(hours, minutes, seconds); // 13, 26, 42
```

We can also get the `ISO string` that follows the international date standards.

```js
const IsoDate = now.toISOString();
console.log(IsoDate);
```

We can also get the `time stamp` for the date. `Timestamp` are milliseconds that have been passed since January 1st 1970.

```js
console.log(now.getTime());
// 1751625179733 this amount has passed since that date
```

Now we can create a date based on those milliseconds and will give us the exact time.

```js
console.log(new Date(1751625179733));

// Fri Jul 04 2025 13:32:59 GMT+0300 (East Africa Time)
```

If you want to create a timestamp for the current moment, you simply call:

```js
console.log(Date.now());
// 1751625547895
```

### 2. Parsing the date from a date string.

```js
console.log(new Date("Fri Jul 04 2025 13:03:30"));
```

This is not a good idea as it can be unreliable.

### 3.
