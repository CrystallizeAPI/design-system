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
yarn add @crystallize/ui styled-components
```

Note: You also need React to be able to work with this library.

### How to import and use Button component

```js
import {Button} from "@crystallize/ui";

function App() {
  return (
    <div className="App" style={{justifyContent: "space-between", alignItems: "center", marginTop: "10vh"}}>
      <Button color={"primary"} variant="filled" size={"large"}>Add to Cart</Button>
    </div>
  );
}
```

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

### How to import and use Typography component

```js
import {Typography} from "@crystallize/ui";

function App() {
    return (
        <div className="App" style={{justifyContent: "space-between", alignItems: "center", marginTop: "10vh"}}>
            <Typography color={"primary"} style={"h3"} align={"center"}>Headless e-Commerce is the future!</Typography>
        </div>
    );
}
```