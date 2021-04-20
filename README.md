# How to install this library?

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