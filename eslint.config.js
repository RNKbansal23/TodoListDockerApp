// eslint.config.js
const globals = require("globals"); // <-- ADD THIS LINE
const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,

  // This block tells ESLint about Node.js global variables
  {
    languageOptions: {
      globals: {
        ...globals.node, // <-- ADD THIS LINE
      },
    },
  },

  // We can add our own rules here later if we want
  {
    rules: {
      // "no-unused-vars": "warn"
    },
  },
];