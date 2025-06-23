/*
1. Undestanding the Problem

- What type of array is passed? Number
- How to display each value with the day.


2. Break the problem into sub-problems.


*/

const printForecast = function (arr) {
  let degrees = 0;
  let day = 0;
  let print = [];
  for (let i = 0; i < arr.length; i++) {
    degrees = arr[i];
    day = i + 1;
    print.push = `... ${degrees}°C in ${day} days.`;
  }
  console.log(print);
};

printForecast([1, 2, 3]);
