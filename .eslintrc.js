module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["simple-import-sort", "unused-imports"],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "simple-import-sort/imports": "error",
    "unused-imports/no-unused-imports": "error"
  }
};
