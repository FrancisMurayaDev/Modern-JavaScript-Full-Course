// Calculate the amplitude of the temperatures in an array. Ignore the errors.

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
