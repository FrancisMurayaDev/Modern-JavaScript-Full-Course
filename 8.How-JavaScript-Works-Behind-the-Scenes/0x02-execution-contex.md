# Execution Context and the Call Stack

The top level code is executed first. `top level code` is the code that is not inside a function.

The code inside a function is only executed when the function is called.

- You call the function in the top-level code. Outside the function.

The `global execution context` is created for top level code.

Once the top level code has executed, functions start to execute as well.

A new execution context is crated for each function and methods.

- These execution contexts make the `call stack`.

After functions have executed, the engine will now wait for the callback functions associated with a click event.
