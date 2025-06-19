# Higher Order Array Methods

JavaScript provides a range of powerful tools to work with arrays, and the `high-order` methods are among the most versatile and expressive.

- These methods simplify operations on arrays by allowing us to apply functions to elements directly inproving both maintainability and readability.

- High order array methods take in a callback function.

They Include:

## 1. forEach()

- `forEach()` executes a function on each array element but does not return anything.

- Best used when you want to perform an action on each item.

- It does not create a new array.

`forEach()` takes in a callback function. The callback function takes in a `parameter` that represent current individual element in the array.

- Each element is recieved as a parameter to the callback function.

example:

```js
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

myArray.forEach(function (element) {
  console.log(element);
});

// The output will be the individual elements, 1 - 10
```

Now you can do whatever you want with the individual element.

Example:

```js
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (num) {
  console.log(num * 2);
});

// Output: 2, 4, 6, 8, 10
```

<hr/> <hr/> <hr/>

## 2. map()

The map method creates a new array generated from the current array which is as a result of calling a provided function on each element.

- What is returned from the callback function is added to a new array.

- We can save the array to a variable.

`map` method is best used to transform array elements without modifying the original array.

- Instead it provides a new array with the transformed elements from the call-back function.

Example:

```js
const myArray = [1, 2, 3, 4, 5];

const newArray = myArray.map(function (element) {
  return element * 3;
});

console.log(newArray);
//Output: [ 3, 6, 9, 12, 15 ]
```

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.map(function (num) {
  if (num % 2 === 0) {
    return num;
  }
});

console.log(evenNumbers);
```

<hr/> <hr/><hr/>

## 3. `filter()`

The `.filter()` method creates a new array with all the arrays that pass the test implimented by the provided function.

- Best for selecting specific elements from an array.
- It returns a new array of elements that pass a particular test.
- You can save the new variable in a variable.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, , 9];

const oddNumbers = numbers.filter(function (num) {
  if (num % 2 !== 0) {
    return num;
  }
});

console.log(oddNumbers);

// Output: [ 1, 3, 5, 7, 9 ]
```

#### Note: If the body of an `if-statement` has only one line of code, you can remove the curly braces (`{}`) as shown:

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, , 9];

const oddNumbers = numbers.filter(function (num) {
  if (num % 2 !== 0) return num;
});

console.log(oddNumbers);

// Output: [ 1, 3, 5, 7, 9 ]
```

<hr/> <hr/> <hr/>

## 4. `reduce()`

`not much used, let me put it aside a bit`

## 5. `find()`

The `.find` method returns the very first element in the array that satisfies the provided callback function test.

- once an element the meets a particular condition, the execution stops.

- It does not return a new array.
- the element can be saved in a variable.

```js
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const firstEvenNumber = myArray.find(function (num) {
  if (num % 2 === 0) return num;
});

console.log(firstEvenNumber);
//  Output: 2
```

## 6. `findIndex()`

The `findIndex` method returns the very first Index of an element that matches a condition specified in the callback function.

Instead of returning the element itself, it will return the index of the element.

- You can save the index in a variable.

```js
const numbers = [20, 40, 60, 100];

const myIndex = numbers.findIndex(function (num) {
  if (num > 50) return num;
});

console.log(myIndex);

// It will return index 2.
```

## 7. `some()`

The `some` method check if atleast one element passes a condition.

- It returns true, otherwise, false.

```js
const myNumbers = [1, 2, 3, 4, 5, , 6, 7, , 8, 9, 10];

const result = myNumbers.some(function (num) {
  if (num % 7 === 0) return num;
});

console.log(result);

// Output: true
```

Another example:

```js
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = myNumbers.some(function (num) {
  if (num % 11 === 0) return num;
});

console.log(result);

// Output: fasle
```

## 8. `every()`

Checks if all elements in an array pass a condition.

- It returns true, otherwise false.

```js
const numbers = [2, 4, 6, 8, 10];

const isEven = numbers.every(function (num) {
  if (num % 2 === 0) return num;
});

console.log(isEven);

// Output: true
```

Another example:

```js
const numbers = [2, 4, 6, 7, 8, 10];

const isEven = numbers.every(function (num) {
  if (num % 2 === 0) return num;
});

console.log(isEven);

//Output: false
```

If even one element does not pass the criteria, it will return false.
