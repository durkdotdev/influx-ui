const withTM = require("next-transpile-modules")(["influx-ui"]);

module.exports = withTM({
  async redirects() {
    return [
      {
        source: '/',
        destination: '/getting-started',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
});
