# How to SetUp Prettier and VS Code

## Prettier

Prettier is a code formatter.

- It makes code look better.

## There are 4 ways you can set-up prettier on your VS-code.

### 1. Install Prettier as an Extension in VS-Code

On the extensions part of VS code, search for prettier and download it.

On your file, where you have written code, right click, then select `format document with prettier`.

### 2. Install Prettier as an NPM package.

On the terminal run:

```bash
npm i prettier
```

- You should have node installed.

There are 2 ways to install dependendencies:

1. development dependency - using it for development only.

2. production dependency - using it for development and production.

By passing a `-g` - the dependency is installed globally, you dont have to install it again when working with another project.

```bash
npm i prettier -g
```

We pass `-D` to install it in development.

```bash
npm i prettier -D
```

To use prettier run:

```bash
prettier --write FILE_NAME
```

EG:

```bash
prettier --write index.html
```

#### To format all files use:

```bash
prettier --write *
```

When we look in `package.json` in dependencies, prettier will be updated there.

### 3. Setting a Script

In `package.json`, we have `script`.

- `scripts` are run by using `npm run NAME_OF_SCRIPT`

Example:

```bash
npm run dev
```

#### Now write your own script:

Example:

```bash
"format": "prettier --write *"
```

### 4. Setting Format on Save to be `Active`.

- Go to `settings`
- Search `default formatter`
- Select `prettier`

then

- set `format on save` to be active.

When you google prettier, you will see it documentation and more about it.

#### Now we need to configure prettier to prevent the following 2 behaviours.

1. Prettier transforms all single quotes to double quotes.

2. It also adds parenthesis in arrow functions where there is a single line of code and we want to ommit the parenthesis.

The fonfiguration is simple.

Create a file called:
`.prettierrc`

Inside put this configuration:

```js
{
  "singleQuote": false,
  "arrowParens": "avoid"
}

```
