# Regular Functions vs Arrow Functions

An arrow function does not get its own `this` keyword. Itwill use the `this` keyword from its parent.

- Never use an arrow function as a method.

## Memory Management: Primitives vs Objects

How and where variables are created in JS.

JS automatically manages the memory behind the scenes.

- Every value created in JS, goes through memory life-cycle. The value stored by the variable we created.

### Memory Allocation

A value is either a `primitive` or an `object`.

Primitives include: number, string, boolean, undefined, null, bigInt, symbol.

Everything else is object: objects created with object literals, arrays, functions, etc..\

In the JavaScript Engine:

- Functions are stored in the `call stack` while other objects are stored in the `memory heap`.
- Primitive values are called in the `call stack` where functions run.

- `References to Objects` are stored in the `call stack`.

## What are Object References ?

You can copy a reference to an object, but not the object itself.

Changing an object in one of the variables will also get reflected in the other one.

The original object also changes.

The variables point to the same object. That is why we can change properties on an object even when it is declared using a `const`.

We cannot change the value of a constant but we can change the property values.

## Memory Management(Garbage Collection)

The way memory is released in JavaScript engine in step 3.

How is memory freed up after we no longer need a certain value?

Memory heap is cleared by garbage collection, automatically in the JavaScript engines.

### Mark and Sweep Algorithim

### Memory Leaks
