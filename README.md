# React component library for Crystallize using TypeScript and Storybook

This React component library is published to NPM.

## Start the project

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run either Storybook or the example playground:

> NOTE: 
> 
> 1. Install the peer dependencies from the `package.json` before running this project. 
> 
> 2. Stories should reference the components as if using the library. This has been aliased in the tsconfig and the storybook webpack config as a helper.

### Install dependencies

Then run the example inside another:

```bash
npm i # or yarn to install dependencies
npm start # or yarn start
```

### Storybook

Run inside another terminal the command and it will load the stories from `./stories`.

```bash
yarn storybook
```

The project imports and live reloads whatever is in `/dist`, so if you are seeing an out of date component, make sure TSDX is running in watch mode.

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.

## Configuration

Code quality is set up for you with `prettier`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.

### Jest

Jest tests are set up to run with `npm test` or `yarn test`.

### Bundle analysis

Calculates the real cost of your library using [size-limit](https://github.com/ai/size-limit) with `npm run size` and visulize it with `npm run analyze`.

#### Setup Files

This is the folder structure we set up for you:

```txt
/example
  index.html
  index.tsx       # test your component here in a demo app
  package.json
  tsconfig.json
/src
  index.tsx       # Main file to export the components
/test             # Jest tests
/stories          # Stories for the components 

/.storybook       # Storybook consfiguration files 
  main.js
  preview.js
.gitignore
package.json
README.md
tsconfig.json
```

#### React Testing Library

`react-testing-library` is already set up and configured.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`.

## Continuous Integration

### GitHub Actions

Two actions are added by default:
- `chromatic` which publishes the stories to Chromatic using the token.
- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request using [size-limit](https://github.com/ai/size-limit)

## Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js` accordingly.

## Deploying the Example Playground

## Named Exports

Per Palmer Group guidelines, [always use named exports.](https://github.com/palmerhq/typescript#exports) Code split inside your React app instead of your React library.

## Including Styles

For vanilla CSS, you can include it at the root directory and add it to the `files` section in your `package.json`, so that it can be imported separately by your users and run through their bundler's loader.