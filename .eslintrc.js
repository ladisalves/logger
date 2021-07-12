module.exports = {
  env: {
    browser: false,
    es2021: true,
  },
  extends: ["standard"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/quotes": ["error", "single", { avoidEscape: true }],
    "@typescript-eslint/semi": ["error", "never"],
  },
};
