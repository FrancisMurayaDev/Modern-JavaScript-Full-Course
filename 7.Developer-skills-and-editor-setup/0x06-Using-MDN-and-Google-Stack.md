# Using Google Stack Overflow and MDN

Understand the problem and break it into sub-problems.

Problem: <i>Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error. </i>

```js
const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
```

### 1. Understanding the problem

- what is temperature amplitude? Answer: the diffrence between the highest and lowest temperature in the array.
- How to compute the max and min temperature
- What is a sensor error looks like? its a string
- What to do when it occurs. Answer: Ignore the errors.

### 2. Breaking up into sub-problems.

- How to ignore the error.
- Find next value in the temperature array.
- Find max value.
- Find min value.
- Subtract min from max and return it (amplitude.)

With tasks like this, its a good idea to write a function for it.

```js
const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcAmplitude = function (temps) {
  let maxTemp = temps[0];
  let minTemp = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== "number") continue;
    if (currentTemp > maxTemp) maxTemp = currentTemp;

    if (currentTemp < minTemp) minTemp = currentTemp;
  }
  console.log(maxTemp, minTemp);
  return maxTemp - minTemp;
};

const amplitude = calcAmplitude(temperature);
console.log(amplitude);
```

To understand a problem, understand it correctly and then break it into sub-problems.

### Now lets say the project manager says that the function should recieve 2 arrrays of temperature rather than one.

#### 1. Understanding the problem

- With 2 arrays, do we need to impliment the same functionality twice? No. we merge the 2 arrays at the begining.

#### 2. Break up into sub-problems.

- Merge 2 arrays? (research) Most likely you will find the `.concat()` method.

```js
const temperature1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperature2 = [9, 18, "error", -1];

const calcAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);
  let maxTemp = temps[0];
  let minTemp = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== "number") continue;
    if (currentTemp > maxTemp) maxTemp = currentTemp;

    if (currentTemp < minTemp) minTemp = currentTemp;
  }
  console.log(maxTemp, minTemp);
  return maxTemp - minTemp;
};

const amplitude = calcAmplitude(temperature1, temperature2);
console.log(amplitude);
```

Hopefully you now understand how to solve problems and do research.
