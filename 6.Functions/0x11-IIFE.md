# Imediately Invoked Function Expression (IIFE)

Sometimes in JS, we need a function that is only executed once and then never again.

Basically, a function that disappears after it is called once.

This technique might be useful with things such as `async await`.

```js
function runOnce() {
  console.log(`This will only run once!`);
}

runOnce();
```

For the above code, we can run the function in other parts of the code if we wanted to.

However, that is not what we want to do, we want to run a function immediately and even not have to save it anywhere.

We do it like this:

```js
(function () {
  console.log(`This will only run once!`);
})();
```

We wrap the function into parenthesis, we transform it into an `expression`. Then immediately call it.

- This pattern is called `Imediately Invoked Function Expression`.

It will also work for an arrow function.

```js
(() => {
  console.log(`This too will run only once!`);
})();
```

### Why was this pattern Invented?

- Functions create scope. One scope does not have access to variables from an inner scope.

For instance in this scope, we do not have any access to any variables that are defined in the scope of any of the functions here.

All data defined inside a scope is private (Encapsulated). For example:

```js
(() => {
  console.log(`This too will run only once!`);
  const isPrivate = 23;
})();
```

The variable `isPrivate` is encapsulated inside of the above function scope.

Data privacy and data encapsulation are important concepts in programming.

- Many times we need to protect our variables from accidentally being overidden by some other parts of the program, even with external scripts or libraries.

- Scope is a good tool for hidding variables.
- It is also the reason why IIFE were invented.
