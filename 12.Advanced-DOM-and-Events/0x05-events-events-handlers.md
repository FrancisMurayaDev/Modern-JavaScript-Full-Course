# Types of Events and Event Handlers

## mouseenter

Its like the hover event in CSS.

lets say we are selecting a h1.

```js
const h1 = document.querySelector(`h1`);

h1.addEventListener(`mouseenter`, function (e) {
  alert(`You are hovering on the heading!`);
});
```

You can also do it like this:

```js
const h1 = document.querySelector(`h1`);
h1.onmouseenter = function () {
  alert(`You are hovering on the heading!`);
};
```

It is recommended to use `addEventListener`.

### With `addEventListener` we can add multiple listeners to an event.

And we can remove an event listener if we dont need it anymore.

We need to export the function.

```js
const h1 = document.querySelector(`h1`);

const alertH1 = function () {
  alert(`You are hovering on the H1`);
};

h1.addEventListener(`mouseenter`, alertH1);
```

We can now remove the event in a more precise way.

We remove the event listener in the same event handler function.

```js
const h1 = document.querySelector(`h1`);

const alertH1 = function () {
  alert(`You are hovering on the H1`);
  h1.removeEventListener(`mouseenter`, alertH1);
};

h1.addEventListener(`mouseenter`, alertH1);
```

It means we can only listen to an event once.
