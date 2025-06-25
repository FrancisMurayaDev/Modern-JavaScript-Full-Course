# Spread Operator

It is used to expand an array into all its elements.

- Basically unpacking all array elements at one.

Lets say we have an array.

```js
const arr = [7, 8, 9];
```

Now lets say we want to create a new array based on the above array, but with new elements at the begining.

The longest way to do this will be:

```js
const arr = [7, 8, 9];
const newArr = [1, 2, 3, arr[0], arr[1], arr[2]];
console.log(newArr);
// [ 1, 2, 3, 7, 8, 9 ]
```

We can use the `spread operator` in ES6 in a much better way:

- We use 3 dots `...` and the name of the array to extract it values into individual elements.

```js
const arr = [7, 8, 9];
const newArr = [1, 2, 3, ...arr];
console.log(newArr);
// [ 1, 2, 3, 7, 8, 9 ]
```

`Spread Operator` takes all the elements out of the array.

- When we want the individual elements of an array we use the Spread Operator (`...`).

It is also useful when we pass arguments into functions.

- Lets say we want to log the individual elements of the new array.

```js
const arr = [7, 8, 9];
const newArr = [1, 2, 3, ...arr];
console.log(...newArr); // It will log the individual elements.
// 1 2 3 7 8 9
```

Lets see a more useful example:

- Lets say we want to add more items in the `mainMenu` list of the following object.

```js
const resturant = {
  name: "Classico",
  location: "Nairobi",
  categories: ["Chicken", "Pizza", "Soup", "Vegeterian", "Organic"],
  starterMenu: ["Focaccia", "Bruscheta", "Garlic", "Bread", "Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  orderDelivery: function ({
    address,
    time = "22:00",
    mainIndex = 1,
    starterIndex = 1,
  }) {
    console.log(
      `Order recieved, ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will be delivered to ${address} at ${time}`
    );
  },
};
```

It will be:

```js
const newMenu = [...resturant.mainMenu, "Salad", "Garlic"];
console.log(newMenu);

// [ 'Pizza', 'Pasta', 'Risotto', 'Salad', 'Garlic' ]
```

- Here we are creating a completely new array, not manipulating the `resturant.mainMenu` array.

The `spread operator` is abit similar to destructuring since it helps get elements out of an array.

- However the spread operator does not create new variables.
- We use it were we write values separated by comma.

## 2 main use cases of `spread operator`.

### 1. To Create shallow copies of arrays.

- To create a copy of an array.

```js
const mainMenuCopy = [...resturant.mainMenu];
console.log(mainMenuCopy); // [ 'Pizza', 'Pasta', 'Risotto' ]
```

### 2. To merge 2 or more arrays together.

```js
const wholeMenu = [...resturant.mainMenu, ...resturant.starterMenu];
console.log(wholeMenu);

/*
[
  'Pizza',     'Pasta',
  'Risotto',   'Focaccia',
  'Bruscheta', 'Garlic',
  'Bread',     'Salad'
]
*/
```

We will have an array containing all the items of startMenu and mainMenu.

### The spread operator works on iterables exept objects.

That is: arrays, strings, maps, sets.

In JavaScript, an iterable is an object that can be iterated over, meaning its elements can be accessed one by one in a sequence.

<hr/>

We can use a spread operator on a string, as well. Each letter of the string will become an individual elements.

```js
const myName = "Francis";
const letters = [...myName];
console.log(letters);

/*
 [
  'F', 'r', 'a',
  'n', 'c', 'i',
  's'
]
 */
```

### Keep in mind that we can only use `spread operator` when:

1. Building an array.
2. Passing values into a function.

Multiple values separated by a comma are only expected when we are passing `arguments` into a function or when building a new array.

- `Interpolation` ${} for instance does not expect multiple values separated by a comma.

### Function Example: A function that accepts multiple arguments and use the spread operator to pass those arguments.

Lets add a method `orderPasta` into the resturant object.

```js
const resturant = {
  name: "Classico",
  location: "Nairobi",
  categories: ["Chicken", "Pizza", "Soup", "Vegeterian", "Organic"],
  starterMenu: ["Focaccia", "Bruscheta", "Garlic", "Bread", "Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  orderDelivery: function ({
    address,
    time = "22:00",
    mainIndex = 1,
    starterIndex = 1,
  }) {
    console.log(
      `Order recieved, ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};
```

Lets call the function and get the ingridients from a prompt window.

```js
const ingridients = [
  prompt(`ingridient 1`),
  prompt(`ingridient 2`),
  prompt(`ingridient 3`),
];
```

Then call the `orderPasta` function.

In old way, we would write:

```js
resturant.orderPasta(ingridients[0], ingridients[1], ingridients[2]);
```

We can do better with spread operator.

```js
const ingridients = [
  prompt(`ingridient 1`),
  prompt(`ingridient 2`),
  prompt(`ingridient 3`),
];

resturant.orderPasta(...ingridients);
```

From ES2018, we can use `spread operator` on objects.

```js
const newResturant = { founder: "Cruz", ...resturant, manager: "Mathew" };
console.log(newResturant);
```

This will make a new object not affecting the original one.

### Spread operator is also used to overwrite object properties.

```js
const user = { name: "John", role: "User" };
const updatedUser = { ...user, role: "Admin" };

console.log(updatedUser); // { name: "John", role: "Admin" }
```
