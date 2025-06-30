# Button Inside a Form

When a button is inside a form, it is treated as a `Submit Button`.

- When the button is clicked, it will submit that form, and the page will end up refreshing.

There are 2 ways to prevent that default behaviour.

### 1. Telling the browser that the button is not a submit button by setting a `type` attribute to be equal to `button` inside the button.

```js
<button type="button" class="submit-btn">
  Submit
</button>
```

It will not refresh the page anymore.

### 2. Using DOM, recieve the event object `e` and then call a method on it called `preventDefault()`. It will prevent the default behaviour of that button.

```js
const submitButton = document.querySelector(".submit-btn");
submitButton.addEventListener("click", function (e) {
  e.preventDefault();
});
```
