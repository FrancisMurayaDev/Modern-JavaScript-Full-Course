# Accessing / Finding DOM Elements

To access any element on a HTML page, we start by accessing the `document` object.

The `document` object is the owner of all other objects on the page.

## Methods of Accessing DOM Elements

1. `document.getElementById(`elementID`)`

Finds an element with Id equivalent to elementID.

html:

```html
<button id="my-button">Click Me</button>
```

js:

```js
const button = document.getElementById("btn");
console.log(button);

// <button id="my-button">Click Me</button>
```

2. `document.getElementsByTagName(`name`)`

Finds elements that match the tag name passed. eg. finding all paragraphs in a page.

It returns a Node List of all the elements that match the tag name passed.

You can `index` the specific element you want from this element the same way you would index an array.

html:

```html
<p>Hello JavaScript</p>
<p>JavaScript is awsome</p>
<p>Lets keep learning</p>
```

JS:

```js
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
// HTMLCollection(3) [p, p, p]
```

3. `document.getElementByClassName(`className`)`

Finds and returns a NodeList of all HTML elements with class attribute similar to the class specified.

You can index the specific element you want from this element the same way you would index an array.

html:

```html
<p class="text">Hello JavaScript</p>
<p class="text">JavaScript is awsome</p>
<p>Lets keep learning</p>
```

JS:

```js
const text = document.getElementsByClassName("text");
console.log(text);
// HTMLCollection(2) [p.text, p.text]
```

4. `document.querySelector(`selector`)`

Selects the first element in the document that matches a specified CSS selector, id, class or tag name.

```html
<p class="text">Hello JavaScript</p>
<p class="text">JavaScript is awsome</p>
<p>Lets keep learning</p>
```

```js
const firstText = document.querySelector(".text");
console.log(firstText);
```

5. `document.querySelectorAll(`selector`)`

Selects all elements in the document that match the specified class, id or tag name and returns a NodeList of them.

html:

```html
<p class="text">Hello, World</p>
<p class="text">JavaScript is awesome</p>
<p>JavaScript is great</p>
```

JS:

```js
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs); // [p.text, p.text, p]
```
