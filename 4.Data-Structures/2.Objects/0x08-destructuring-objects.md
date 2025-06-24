# Destructuring Objects

We can also destructure objects.

- Remember, we can also have objects, inside objects. (`nested objects`).

We use curly braces `{}` to destructure objects, because this is also how we create objects.

Here we have a resturant object with an `openingHours object` inside.:

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
};
```

We use curly braces `{}` to destructure objects, because this is also how we create objects.

- In destructuring objects, we provide `variables` names that `match` the `property names` that we want to retrieve from the object.

In ourcase, the object we are destructuring is `resturant`.

- Lets take the `name`, `categories` and `openingHours`.

- We dont need to manually skip elements like we did in an array, since the order of elements does not matter in objects.

```js
const { name, openingHours, categories } = resturant; //creates new variables based on the resturant object.

console.log(name, openingHours, categories);

/*
Classico 

{
  thu: { open: 12, close: 22 },
  fri: { open: 11, close: 23 },
  sat: { open: 0, close: 24 }
} 

[ 'Chicken', 'Pizza', 'Soup', 'Vegeterian', 'Organic' ]
*/
```

That is the basics of destructuring objects.

- It is useful especially when dealing with the results of an API call which is getting data from another web application such as `weather data`.

- This data usually comes inform of an object.
- It also helps write less code in modern applications.

### Now, what if we wanted the variables names to be diffrent from the Property Names.

- We need to reference the property names like we did before so that JS knows what we want. The use a `colon` `:`, then specify a new name.

Like this:

```js
const {
  name: resturantName,
  openingHours: hours,
  categories: servings,
} = resturant; //creates new variables based on the resturant object.

console.log(resturantName, hours, servings);

/*
Classico 

{
  thu: { open: 12, close: 22 },
  fri: { open: 11, close: 23 },
  sat: { open: 0, close: 24 }
} 

[ 'Chicken', 'Pizza', 'Soup', 'Vegeterian', 'Organic' ]
*/
```

This is useful when dealing with third-party data such as API call.

### We can also have default values for the case that we are trying to read a property that does not exist on an object.

Reading a property that does not exist will result to undefined.

For instance `resturant.menu` would return undefined since the `menu` property does not exist in our object.

So we can set default values, just like we can in arrays.

```js
const { menu = [], starterMenu: starters = [] } = resturant;
//We have given empty arrays as default values, since starterMenu exists, default value will not apply.

console.log(menu, starters);
/*
[] 
[ 'Focaccia', 'Bruscheta', 'Garlic', 'Bread', 'Salad' ] 
*/
```

Without the empty array, we would get undefined from `menu`.

- This is useful if we dont have our data hard coded in the object.
- In real world, we get the data from somewhere else.
- It is used to set default data where we dont know how a certain data looks like.

## Mutating Variables while Destructuring Objects.

Mutating Variables - changing the value that a variable holds without reassigning the variable to a new value.

Lets say we have the following 2 variables and an object:

```js
let a = 97;
let b = 32;
const myObject = { a: 23, b: 7, c: 19 };
```

Now we want to destruture this Object.

We cannot say: `const {a, b , c} ` since `a` and `b` are already declared.

We cannot say `let {a, b} = myObject` since this will again create new variables.

- To mutate our variables: `a to be 23 and b to be 7`

```js
{a, b} = myObject;

console.log(a, b); // we will get a syntax error
```

The reason is that:
When we start a line of code with curly brace `{}`, JavaScript expects a code-block.

- We cannot assign anything to a `code-block` as we did here with the `=`. We will get an error.

To solve this, the trick is to wrap all this into parenthesis `()`.

```js
({ a, b } = myObject); //This will work

console.log(a, b); // 23  7
```

To over-ride the two initial variables, we had to wrap the destructuring assignment in parenthesis.

## Nested Objects

```js
const resturant = {
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
};
```

Lets say we want to create 2 variables, `open` and `close`. To contain the opening and closing hours for friday.

`openingHours` is an object containing objects.

```js
const { openingHours } = resturant;
const { fri } = openingHours;
console.log(fri); // { open: 11, close: 23 }
```

Since we know friday is an object, we can further destructure it like this:

```js
const {
  fri: { open, close },
} = openingHours;

console.log(open, close); // 11   23
```

You can also reassign the variable names if you want to:

```js
const {
  fri: { open: signIn, close: signOut },
} = openingHours;
console.log(signIn, signOut); // 11   23
```

## Practical Application

Lets create a method in our object. `orderDelivery`.

- Many times in JS, we have functions that have alot of parameters.
- It can be hard to know the order of parameters for someone using the function.
- Instead of defining the parameter manually, we pass an object in the function as an argument, the function will immediately destructure that object.

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
  orderDelivery: function (obj) {
    console.log(obj);
  },
};
```

```js
resturant.orderDelivery({
  address: "Kasarani",
  time: "22:30",
  mainIndex: 2,
  starterIndex: 2,
});
// { address: 'Kasarani', time: '22:30', mainIndex: 2, starterIndex: 2 }
```

This is a standard thing in JavaScript, especially 3rd party libraries.

- With the function arguments, we can do `destructuring` right away.

Like this:

```js
 orderDelivery: function ({ address, time, mainIndex, starterIndex }) {
    //Here
    console.log(
      `Order recieved, ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will be delivered to ${address} at ${time}`
    );
  }
```

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
  orderDelivery: function ({ address, time, mainIndex, starterIndex }) {
    //Here
    console.log(
      `Order recieved, ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

resturant.orderDelivery({
  address: "Kasarani",
  time: "2230hrs",
  mainIndex: 2,
  starterIndex: 2,
});
// { address: 'Kasarani', time: '22:30', mainIndex: 2, starterIndex: 2 }

// Output: Order recieved, Risotto and Garlic will be delivered to Kasarani at 2230hrs.
```

We did, not pass 4 arguments in this function, just one argument which is an object.

In the function, when we recieve the object, we do immediately destructuring. That is why the names there are exaclty the names we have in the object.

### We can also set default values. When not specified, the default values will be used.

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
    //Here
    console.log(
      `Order recieved, ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

resturant.orderDelivery({
  address: "Kivu",
  mainIndex: 0,
});

// Order recieved, Pizza and Bruscheta will be delivered to Kivu at 22:00
```

In the object that we passed as an argument, there is not property for the `time` and `starterIndex`. JavaScript will take the default values.
