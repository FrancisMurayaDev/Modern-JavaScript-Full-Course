# Styles, Attributes and Classes

# Styles

To set a style, we get the element.style then the property name.

```js
message.style.backgroundColor = `red`;
```

The styles are set inline.

### We can also read the styles using the style property.

```js
console.log(message.style.backgroundColor);
// You will get the background color
```

However, we cannot get a style that does not exist or hidden in a class.

To get all the style properties and values of an element we use `getComputedStyle(element)`.

- To specify the target property use `getComputedStyle(element).property`.

### To change the style of a CSS Variable

```js
document.documentElement.style.setProperty = `--color-orange``orangeRed`;
```

## Attributes

In JS we can change and access diffrent attributes.

```js
const logo = document.querySelector(`.nav-logo`);
```

We can access the elements attribute.

```js
logo.src;
logo.alt;
logo.className;
```

We can also use `getAttribute`

```js
logo.getAttribute(`src`);
```

### We can also set the values of this attributes.

```js
logo.alt = `minimalist logo`;

logo.setAttribute = (`company`, `bankist`);
```

Always use getAttribute.

### Data Attributes are a special kind of Attributes that start with the word `data`.
