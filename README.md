Influx UI is a [Tailwind CSS plugin](https://v1.tailwindcss.com/docs/plugins). To get started, simply install the following:

```bash
npm install influx-ui
# Or
yarn add influx-ui
```

## Add to `tailwind.config.js`

In your `tailwind.config.js`, add Influx UI within `plugins`:

```js
// tailwind.config.js

module.exports = {
  // ...
  plugins: [require("influx-ui")]
  //...
};
```

## Import Influx UI CSS

Import the following CSS file into your app:

```js
import "influx-ui/influx-ui.css";
```

That's it! You're ready to start using Influx UI.

## Documentation

Visit the [documentation](https://influx-ui.durk.dev) for more demos and information on Influx UI components.