# Operators

Operators in JavaScript are symbols that perform operations on values (operands).

They are used for `calculations, comparision and logical` operations.

Operators in JavaScript are classified into the following categories:

### 1. Arithmetic Operations - perform basic mathematics operation.

- Used to perform mathematical operations.

They are:

a. Addition (`+`)

Add two numbers:

```js
let a = 10;
let b = 5;
console.log(a + b); // 15
```

Can be used with Strings to Perform String Concantination:

```js
let firstName = "John";
let lastName = "Doe";
console.log(firstName + lastName); // JohnDoe
```

b. Subtraction (`-`)

Subtracts the right operand from the left.

```js
let a = 10;
let b = 5;
console.log(a - b); // 5
```

c. Multiplicatin (`*`)

Calculates the product of 2 numbers.

```js
let a = 10;
let b = 5;
console.log(a * b); // 50
```

d. Division (`/`)

Divides the left with the right operand.

```js
let a = 10;
let b = 5;
console.log(a / b); // 2
```

e. Modulus (`%`)

Returns the reminder of the dividion between the left with the right operand.

```js
let a = 10;
let b = 5;
console.log(a % b); // 0
```

f. Exponential (`**`)

Perfoms a power of the left operand by the right operand.

```js
let a = 10;
let b = 5;
console.log(a ** b); // 100000
```

 <hr/>

### 1. Increment Operator

Increases a variable value by 1.

- It can be used in two ways:

Post-Increment (a++) - returns the original value then increments it.

Pre-Increment (++a) - Increments first, then returns the updated value.

```js
let x = 5;
console.log(x++); // 5 (returns first, then increments)
console.log(x); // 6

let y = 5;
console.log(++y); // 6 (increments first, then returns)
```

### 1. Decrement Operator

Decreases a value by 1.

Can be used in 2 ways:

Post-Decrement (a--) - returns the original value then decrements it.

Pre-decrement (--a) - Decrement first then return the value.

### 1. Assignment Operators - assign values to variables.

```js
let x = 5;
```

- Addition Assignment Operator (+=)

Used to add a value to a variable.

```js
let x = 5;
x += 3; // x = x + 3 → 8
```

- Subtraction Assignment Operator

Used to subtract a value from a variable

```js
let x = 5;
x -= 2; // x = x - 2 → 3
```

- Multiplication Assignment Operator (\*=)

Multiplies a value with the variable.

```js
let x = 5;
x *= 2; // x = x * 2 → 10
```

- Division Assinment Operator

Divides a variable.

```js
let x = 15;
x /= 3; // x = x / 3 → 5
```

<hr/>

### 1. Comparision Operators - compare values.

Used to compare values and they return `true` or `false`.

a. Equality Operator (==) - returns true if the operand on the left is equal to the operand on the right and false otherwise.

```js
let a = 10;
let b = 5;
console.log(a == b); // false
console.log(a == 10); // true
```

NOTE: ` The equality operator ignores the data type of the operands, it only compares the value:`

```js
console.log(10 == "10"); // true
```

b. Strict Equality Operator (===)

Returns true if the operand on the left is equal to the operand on the right and false otherwise.

```js
let a = 10;
let b = 5;
console.log(a === b); // false
console.log(a === 10); // true
```

NOTE: `The strict equality operator checks the data type as well, not just the values:`

```js
console.log(10 === "10"); // false
```

c. Not Equal/ Inequality Operator (!=)

Returns true if the value on the left is not equal to the value on the right.

```js
let a = 10;
let b = 5;
console.log(a != b); // true
console.log(a != 10); // false

console.log(10 != "10"); // false
```

d. Strict Not Equal To (!==)

Returns true when the value on the left is not equal on the value on the right and false otherwise.

It compares the data type of the operands.

```js
let a = 10;
let b = 5;
console.log(a !== b); // true
console.log(a !== 10); // false

console.log(10 !== "10"); // true
```

e. Greater Than (>)

Returns true when the operand on the left is greater than the operand on the right and false otherwise.

f. Less Than (<)

Returns true when the operand on the left is less than the right operand, returns false otherwise.

g. Greater than or Equal to (>=)

Returns true when the operand on the left is greater than or equal to the operand on the right.

```js
let a = 10;
let b = 5;
console.log(a >= b); // true
console.log(b >= a); // false
console.log(10 >= 10); // true
```

h. Less than or equal to (<=)

Returns true when the operand on the left is less than or eqaul to the right operand and false ottherwise.

```js
let a = 10;
let b = 5;
console.log(a <= b); // false
console.log(b <= a); // true
console.log(10 <= 10); // true
```

### 1. Logical Operators - used for boolean logic.

AND (&&) and OR (||)

#### AND (&&)

It returns true when both operators are `true` and false otherwise.

```js
console.log(true && true); // true
console.log(true && false); // false
```

#### OR operator (||)

Returns true if atleast one of the operands is true and returns false otherwise.

#### Logical Not (!)

Used to negate boolean values of an expression. It returns false when the expression is true and false the expression is true.

```js
console.log(!true); // false
console.log(!false); // true
```

### 1. Ternary Operators

### 1. Type Operators

### 1. Bitwise Operators - perform operations at Bitwise level.
