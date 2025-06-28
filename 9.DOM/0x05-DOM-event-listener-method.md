# DOM Event Listener Method

Event Listeners wait for an event to happen and then react to it.

The <b>`addEventListener()`</b> method attaches an `event` listener to a specific element.

- It attaches an event handler without overwriting existing handlers.

- It takes in 3 paramters, for now we will focus with first 2.

The first parameter is the `type of event` passed in as a string. eg: `click, mousedown`

The second parameter is the `function` we want to call when the specified event occurs.

```js
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  console.log("Button Clicked");
});
```
