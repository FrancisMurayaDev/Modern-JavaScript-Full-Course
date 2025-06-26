# Hoisting and TDZ (Temporal Dead Zone)

Execution context includes:

- Variable Environment
- Scope chain
- `this` keyword

Hoisting - makes some type of variables accessible/usable in the code before they are actually declared.

Or Variables lifted to the top of their scope.

- Function declarations are hoisted.

`let and const` variables are not hoisted, the are instead placed in a TDZ.

- `var` variables are hoisted but they return the value `undefined`. In modern JavaScript, avoid using `var`.

- Functions declarations and arrow functions created with `let` or `const` cannot be accessed before they are declared because of the `temporal dead zone`, unless the function is created using `var` which is not a good practice in modern JS.

## Why TDZ

Makes it easier to find and avoid errors. Accesing variables before declaration is a bad practice and should be avoided.

Makes `const` variables work the way they are supposed to. (Not reassigned and hence need to be accessed after initialization.)

## Why Hoisting

To allow to use function declarations before we declare them.
