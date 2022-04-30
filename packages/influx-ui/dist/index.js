// index.ts
var plugin = require("tailwindcss/plugin");
var colors = {
  "primary-200": "#18ffff",
  "primary-400": "#00e5ff",
  "primary-700": "#00b8d4",
  "secondary-200": "#e040fb",
  "secondary-400": "#d500f9",
  "secondary-700": "#aa00ff",
  "tertiary-200": "#536dfe",
  "tertiary-400": "#3d5afe",
  "tertiary-700": "#304ffe"
};
module.exports = plugin(function() {
}, {
  theme: {
    extend: {
      colors
    }
  }
});
