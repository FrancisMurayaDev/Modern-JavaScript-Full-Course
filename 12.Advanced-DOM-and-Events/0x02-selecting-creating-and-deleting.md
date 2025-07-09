# Selecting, Creating and Deleting Elements with JavaScript

## Selecting

Selecting the entire document of an entire webpage.

We select the `documentElement`.

```js
document.documentElement;
```

We can also select the head and the body.

```js
document.head;
```

```js
document.body;
```

We can also select an element using its class or ID.

```js
document.querySelector(`.header-top`);
```

You can also select multiple elements:

```js
document.querySeletorAll(`.section`);
```

We use this alot when we want to select child elements.

## Insert and Creating Elements

We can create HTML elements using the `insertAdjacentHTML` function.

Its better to insert and create elements more programatically.

We can use.

```js
const message = document.createElement(`<div>`);
```

We can also add classes to it.

```js
message.classList.Add(`.cookie-message`);
```

Adding text to the element:

```js
message.textContent = `We use cookies for improved functionality`;
```

- We can insert HTML by using `.innerHTML`.

We can then add that message to an element, for example:

```js
myHeader.prepend(message);
```

We inserted the element into our html.

`prepend()` adds the element as the first child of the element.

`append()` adds the element as the last child.

A DOM element can only exist at one place at a time.

- If we want to have a DOM element in multiple places, we first have to clone it/copy it.

Example:

```js
myHeader.append(message.cloneNode(true));
```

We can also insert a DOM Element `before` and `after` an HTML element. They will be siblings.

```js
myHeader.before(message);
myHeader.after(message);
```

## Deleting Elements

You can add it inside an event listener.

```js
message.remove;
```
