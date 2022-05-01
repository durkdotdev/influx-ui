const withTM = require("next-transpile-modules")(["influx-ui"]);

module.exports = withTM({
  reactStrictMode: true
});
