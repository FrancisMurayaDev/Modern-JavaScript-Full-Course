# Basic Array Methods

## 1. `.length`

The length property returns the length of an array.

- The length of an array refers to the number of items in an array.

```js
const students = ["John", "Ken", "June", "Jack"];
console.log(students.length); // 4
```

## 2. `.pop()`

The pop method removes the last element of an array.

```js
const students = ["John", "Ken", "June", "Jack"];
students.pop();
console.log(students); //[ 'John', 'Ken', 'June' ]
```

#### The `.pop()` method returns the element that was removed.

3. ## `.push()`

The `.push()` method adds a new element at the end of an array.

- You can also add multiple elements using the `.push` method.

```js
const students = ["John", "Ken", "June", "Jack"];
students.push("Nancy", "Miriam", "Simon");
```

#### The `.push` method returns the new length of an array.

4. ## `.shift()`

The `.shift()` method removes the first element of an array.

```js
const students = ["John", "Ken", "June", "Jack"];
students.shift();
console.log(students); // ['Ken', 'June', 'Jack']
```

- It returns the element that was removed.

5. ## `.unshift()`

The `.unshift()` method adds a new element at the start of an array.

```js
const students = ["John", "Ken", "June", "Jack"];
students.unshift("Nancy");
console.log(students); // ['Nancy', 'John', 'Ken', 'June', 'Jack']
```

6. ## `.at()`

The `.at()` method returns an element at a specific index.
Also used with strings.

```js
const students = ["John", "Ken", "June", "Jack"];
console.log(students.at(2)); // June
console.log(students.at(0)); // John
console.log(students.at(-1)); // Jack

// -1 will get the last elmenet of an array.
```

7. ## `.join()`

The join method joins all the array methods into a string.

```js
const students = ["John", "Ken", "June", "Jack"];
console.log(students.join('"++"')); // John++Ken++June++Jack
```

8. ## `.cancat()`

The concat method creates a new array by joining (concantinating) the existing arrays.

```js
const arr1 = ["jack", "franklin", "june"];
const arr2 = ["andrew", "alex", "ken"];
console.log(arr1.concat(arr2));
// [ 'jack', 'franklin', 'june', 'andrew', 'alex', 'ken' ]
```

we can also do this:

```js
[...arr1, ...arr2];
```

9. ## `.flat()`
   The flat method converts a multidimensional array into a one dimensional array.

```js
const students = [
  ["jack", "franklin"],
  ["june", "andrew"],
  ["alex", "ken"],
];
console.log(students.flat());
// ['jack', 'franklin', 'june', 'andrew', 'alex', 'ken']
```

10. ## `.indexOf()`

Used to find the index of an element.

It returns `-1` if the element is not found.

```js
const students = ["John", "Ken", "June", "Jack"];
console.log(students.indexOf("June")); // 2
```

11. ## `.includes`

The includes method checks if an element exists in an array.

It returns true if it exists and false if it does not.

12. ## `.reverse()`

Reverses the elements of an array.

It changes the original array.

```js
const students = ["John", "Ken", "June", "Jack"];
console.log(students.reverse());
```
