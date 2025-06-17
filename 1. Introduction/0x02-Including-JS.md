#Including JavaScript

There are 2 main ways to include JavaScript.

- Internal JavaScript

- External JavaScript

## Internal JavaScript

JavaScript written within the `<script> </script>` tags in HTML file.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>JavaScript</h1>
    <script>
      console.log("Hello, world!");
      console.log("JavaScript is fun");
    </script>
  </body>
</html>
```

The script is placed before the closing of the `<body>` tag to increase the display speed since script interpretation slows down the display.

## External JavaScript

JavaScript is stored in an external `.js` file linked to the HTML document using the `<script src="">` with a `src` attribute.

### index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="app.js"></script>
  </head>
  <body>
    <h1>JavaScript</h1>
  </body>
</html>
```

### app.js

```js
console.log("Hello, world!");
console.log("JavaScript is fun");
```

## To Optimize Script Loading

Use the `defer keyword`

- It ensures the script is loaded after the html has been loaded.

```html
<script src="app.js" defer></script>
```