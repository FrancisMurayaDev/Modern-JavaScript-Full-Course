# Changing DOM Elements

We can change the `content`, `atttributes` and `styling` of DOM elements.

## Changing the Content of HTML Elements

JavaScript gives us 3 ways to change the content of HTML elements. `innerText`, `innerHTML` and `textContent`.

### 1. innerHTML

- It gets or sets the inner HTML content of an element. It preserves the html tags.

html:

```html
<div id="my-div">
  <p>Good Morning</p>
  <p>JavaScript is awesome</p>
</div>
```

js:

```js
// Start by getting the element
const myDiv = document.querySelector("#my-div");
// get the inner HTML content of the div
console.log(myDiv.innerHTML);

/*
<p>Good Morning</p>
<p>JavaScript is awesome</p>
*/
```

We will get the innerHTML of the div. We can also set the innerHTML of the DIV if we want.

```js
myDiv.innerHTML = `<h2>This was set with inner HTML</h2>

<a href="https://www.google.com/">Visit google from innerHTML</a>
`;
```

### 2. innerText

It sets or gets the text content of a html element without presserving the html tags.

html:

```html
<div id="my-div">
  <p>Good Morning</p>
  <p>JavaScript is awesome</p>
</div>
```

js:

```js
// Start by getting the element
const myDiv = document.querySelector("#my-div");
// get the inner HTML content of the div
console.log(myDiv.innerText);

/*
Good Morning
JavaScript is awesome
*/

// We will only get the inner-text.
```

We can set the innerText:

```js
myDiv.innerText = `This is a text set by the innerText`;
```

### 3. textContent

Sets or gets the text content of an element and its descendants without presserving the HTML tags.

- It is more consistent among browsers compared to `innerText`.

### 4. In Input Elements we read the `value` property.

```js
document.querySelector("input").value;
```

Whenever we get something from an interface such as an `input field`, it is always a `string`. Incase of numbers, we convert to number using `Number()`.

## Changing the Attributes of HTML elements.

We use `element.attribute = value`

```html
<h1 class="title" id="main-heading">I am a Heading</h1>
```

```js
const mainHeading = document.querySelector(".title");
mainHeading.className = "new-title";
console.log(mainHeading); //  The class will change from title to new-title.

mainHeading.id = "new-id";
console.log(mainHeading); // The id will change from main-heading to new-id
```

### We can also use `element.setAttribute("attribute", "value")`

```html
<h1 class="title" id="title">Hello, world</h1>
```

```js
const title = document.getElementById("title");
console.log(title); // <h1 class="title" id="title">Hello, world</h1>
title.setAttribute("id", "awesome-title");
console.log(title);
```

## Changing the Styling of HTML Elements

We can use `element.style.property = "value"`

It is important to put the value in double quotes even if it is a number.

```js
const title = document.getElementById("title");
title.style.border = "3px solid red";
title.style.fontSize = "48px";
title.style.borderRadius = "5px";
```

## Changing Styling in JavaScript Using CSS classes.

1. `element.classList.add()`: adds one or more class names to an element without removing the existing classes.

2. `element.classList.remove()`: removes one or more classes from an element.

3. `element.classList.toggle()`: toggles the specified class, it is present, it is removed, if it is absent, it is added.

4. `element.classList.contains()`: returns true if an element contains the specified class(es), false otherwise.

5. `element.classList.replace()`: replaces an existing class with a new class.

6. `element.style.setProperty()`: sets a CSS property on an element (first parameter) and its value (second parameter).
