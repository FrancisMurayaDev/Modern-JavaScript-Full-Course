const add = function (...numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  console.log(sum);
};

const x = [8, 0, 8, 7];

add(...x);

// We will see three arrays of the numbers passed into the function.
// The rest operators packs the values into 1 array.
