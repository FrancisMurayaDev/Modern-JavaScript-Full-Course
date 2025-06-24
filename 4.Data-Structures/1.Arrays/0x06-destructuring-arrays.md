# Destructuring Arrays

Destructuring is a way of unpacking values from an array or an aobject, to separate variables.

- Destructuring helps retrieve elements from an array and store them in a variable in an easier way.

Lets say we have an array:

```js
const arr = [2, 3, 4];
```

To retrieve each element in this array, we would do this:

```js
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
```

Using destructuring, this can be made more easier. We can declare all the 3 variables at the same time.

```js
const [a, b, c] = arr;
console.log(a, b, c); // 2, 3, 4
```

`const [a, b, c]` - this is a destructuring assignment, not an array. We declare the variables using `const`.

- When JavaScript sees an `=` sign in the right of `[]`, it knows that this is `destructuring`.

After destructuring, the original array is not affected.

- We are only unpacking the array, but not destroying it.

### We can also work with data from objects to destructure an array inside an object.

```js
const resturant = {
  name: "Picco",
  categories: ["Pizza", "Chicken", "Soup", "Rice"],
  location: "Nairobi",
};
```

Also, we dont have to take all elements out of an array.

In the array inside the object, lets take the first and the second elements only.

```js
const [first, second] = resturant.categories;
console.log(first, second); // pizza  chicken
```

To skip an element in an array, we add a `comma` after a `comma`. It creates a hole and skips an element.

```js
const [first, , third] = resturant.categories;
console.log(first, third); // Pizza Soup
```

Destructuring is powerful and cool.

### Lets say we want to switch the first and the second categories of the array. (the first becomes the second, and the second becomes the first)

Without destructuring, we would need to create a temporary variable, to be able to switch the values.

Lets use `main` and `secondary` variables.

```js
const [main, secondary] = resturant.categories;

console.log(main, secondary); // Pizza Chicken
```

```js
let [main, secondary] = resturant.categories;

console.log(main, secondary); // Pizza Chicken

const temp = main;
main = secondary;
secondary = temp;

console.log(main, secondary); // Chicken Pizza
```

With dstructuring, it becomes easier.

```js
let [main, secondary] = resturant.categories;

console.log(main, secondary); // Pizza Chicken

[main, secondary] = [secondary, main];

console.log(main, secondary); // Chicken Pizza
```

`Note`: remember to switch `const` to `let`.

### We can also set default values for variables when destructuring them.

It is useful where we do not know the length of the array in real-world applications.

`For example:` When we get data from an `API` (Application Programming Interface).

Lets say we have this array: `[3, 7]`.

We will destructure it like this:

```js
const [p, q, r] = [3, 7];
console.log(p, q, r);
// p = 3
//q = 7
// r = undefined;
```

Now we can set default values for each variable.

```js
const [p = 1, q = 1, r = 1] = [3, 7];
console.log(p, q, r);
// p = 3
//q = 7
// r = 1;
```

The default value will be applied to `r`.

### Another trick with destructuring is that we can have a function return an array and immediately destructure the results into diffrent variables.

- This allows us to return multiple values from a function.

Lets introduce a method into our object.

```JS
const resturant = {
  name: "Classico",
  location: "Nairobi",
  categories: ["Chicken", "Pizza", "Soup", "Vegeterian", "Organic"],
  starterMenu: ["Focaccia", "Bruscheta", "Garlic", "Bread", "Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

resturant.order(2, 0); // we will recieve an array with Garlic and Pizza.

//Now we can destructure that:

const [starter, main] = resturant.order(2, 0);

console.log(starter, main);

```

### Lets take destructuring further, what happens if we have a Nested array.

An array inside an array.

```js
const nested = [2, 4, [7, 9]];

const [i, , j] = nested;
console.log(i, j);

//i = 2
//j = [7,9]
```

To destruture a dested array, we use destructuring inside destructuring.

```js
const nested = [2, 4, [7, 9]];

const [i, , [j, k]] = nested;
console.log(i, j, k);

//i = 2
//j = 7
//k = 9
```
