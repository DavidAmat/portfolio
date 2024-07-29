This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Installation

- Install Next.js from the web page
- Install yarn
- Ensure right versions of npx, npm, node and yarn
- Create app

```bash
npx create-next-app@latest portfolio-david --typescript --use-yarn\
```

See all the files

```bash
tree -I 'node_modules
```

## Tailwind

Add tailwind in Yarn

```bash
yarn add -D tailwindcss
npx tailwindcss init
```

Yarn run

```bash
yarn run dev
```

## React Social Icons

```bash
nvm use 20
yarn add react-social-icons
```

# Install Prettier

To set up VSCode to prettify `.tsx` files on save, you need to configure both VSCode settings and install the necessary extensions. Follow these steps:

### 1. Install Prettier Extension

1. Open VSCode.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or pressing `Ctrl+Shift+X`.
3. Search for "Prettier - Code formatter" and install it.

### 2. Configure VSCode Settings

1. Open the VSCode settings (`Ctrl+,`).
2. Add the following settings to your `settings.json` file to enable format on save and configure Prettier for your project:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "prettier.requireConfig": true
}
```

### 3. Create a Prettier Configuration File

Create a `.prettierrc` file in the root of your project to configure Prettier according to your preferences. Here's an example configuration:

```json
{
  "semi": true,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "printWidth": 80
}
```

### 4. Ensure Prettier is Installed in Your Project

To ensure Prettier is installed in your project, run:

```sh
yarn add --dev prettier
```

or if you use npm:

```sh
npm install --save-dev prettier
```

### 5. Create a Prettier Ignore File

You might also want to create a `.prettierignore` file to ignore files or directories that should not be formatted by Prettier. Here's an example `.prettierignore`:

```
node_modules
build
dist
```

### Summary

By following these steps, VSCode will automatically prettify your `.tsx` files (as well as other supported file types) on save using Prettier. The configuration ensures that Prettier is used as the default formatter for JavaScript, TypeScript, and React files.

```bash
yarn run dev
```

### Framer Motion

```bash
yarn add framer-motion
```

# Issues

### Framer motion

See error [here](https://stackoverflow.com/questions/76369521/how-does-the-use-client-directive-work-in-next-js-13).

Solve it b y adding to `header.tsx`

```bash
// app/components/header.tsx
'use client';
```

# Font installation

```bash
nvm use 20
yarn add @fontsource-variable/raleway
yarn add @fontsource/montserrat
```

On the `tailwind.config.js` add:

```bash
theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
```

Import it in your .tsx script:

```bash
import '@fontsource/montserrat';
```

Use it in your className:

```bash
<h2 className='text-sm uppercase text-gray-500 tracking-[5px] font-extrabold font-montserrat'>
    Full Stack Scientist
</h2>
```

```bash

```

```bash

```

```bash

```

```bash

```

```bash

```

```bash

```
