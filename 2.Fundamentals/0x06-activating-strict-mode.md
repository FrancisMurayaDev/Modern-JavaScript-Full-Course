# Activating Strict Mode

`Strict mode` is a special mode in JavaScript that makes it easier to write secure JavaScript code.

At the begining of your `.js` script, use this:

```js
"use strict"; // use single or double quotes.
```

`use strict` helps avoid bugs.

- it creates visible error in the developer console.
- It prevents use of JavaScript reserved keywords such as `interface, private, function, const`.
- forbits us to do things that will introduce unseen bugs in JS.

```js
"use strict";

let interface = "audio";

// this will print an error in the developer console.
```

```console
Uncaught SyntaxError: Unexpected strict mode reserved word
```
