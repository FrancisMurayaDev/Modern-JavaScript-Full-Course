# DOM Events

An event in the DOM is an action or occurence that happens in the browser which the browser can respond to.

Events are triggered by users interactions such as `clicks`, `scroll`, `key presses` and `mouse movements`.

## Popular DOM events

### 1. onclick

Triggered when an element is clicked.

```js
const btn = document.getElementById("btn");
btn.onclick = function () {
  console.log("Button Clicked");
};
```

### 2.onmouseover

Triggered when the mouse moves over an element.

### 3. onkeydown

Triggered when a key is pressed down.

- It is usually called on the document.

`document.onkeydown = function () {}`

### 4. onkeyup

Triggered when a key is released.

- usually called on the document.

`document.onkeyup = function () {}`

### 5. onload

Triggered when the entire page has finished loading.

called on `window`.

`window.onload() = function () {}`

### 6. onfocus

Triggered when an element gains focus.
