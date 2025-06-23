# Debugging with the Console and Break-Points

## Using the Console

Lets say in a temperature calculations, we need to do conversion to kelvin which is by adding 273 to the temperature in degrees celcius.

So we write this code:

```js
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "degrees",
    value: prompt("Enter Temp in Degrees:"),
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

// lets say we pass 10 to the prompt. We will get 10273 as the output. Now this is a bug.
```

1. We have identified the bug.

2. We find the bug.

Lets inspect the `measurement.value`. When we `console.log` it, we see that its value is still `10`.

We also have other console methods:

- `console.warn()` - generate warnings in the console.
- `console.error()` - generate errors in the console.
  They are just a matter of formatting.

Lets now inspect the object.

> console.log(measurement)

Now we see the problem, the `value` is a string.

The `prompt()` method always returns a string.

There is another handy way of showing objects on the console, called `console.table()`.It shows a nicely formatted table for the console.

3. We fix the Bug.
   We convert it into a `Number` type.

```js
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "degrees",
    value: Number(prompt("Enter Temp in Degrees:")), // Convert to a Number Type
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
```

## Using a Debugger in Google Chrome

We go into the sources tab.

- Click on the `.js` script which will be your current script.
- In the debugger, we can set `break-points` by clicking the left of the code number line. (remember to get rid of the breakpoint when exiting)
- When we execute the page, executions will stop at that breakpoint.

JavaScript allows us to call the debugger in our code.

```js
debugger;
```
