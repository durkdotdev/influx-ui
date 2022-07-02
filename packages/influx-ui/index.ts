const plugin = require("tailwindcss/plugin");

const colors = {
  "primary-200": "var(--primary-200)",
  "primary-400": "var(--primary-400)",
  "primary-700": "var(--primary-700)",
  "secondary-200": "var(--secondary-200)",
  "secondary-400": "var(--secondary-400)",
  "secondary-700": "var(--secondary-700)",
  "tertiary-200": "var(--tertiary-200)",
  "tertiary-400": "var(--tertiary-400)",
  "tertiary-700": "var(--tertiary-700)"
};

module.exports = plugin(
  function () {
    // ...
  },
  {
    theme: {
      extend: {
        colors
      }
    }
  }
);
