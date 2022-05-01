module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nested",
    tailwindcss: "./components/tailwind.config.js",
    autoprefixer: {},
    cssnano: {}
  }
};
