/*
  Configuration to run only tests that are inside app/ folder
*/
module.exports = {
  "roots": [
    "<rootDir>/app"
  ],
  "testMatch": [
    "**/app/__tests__/**/*.+(ts|tsx|js)",
    "**/app/**/?(*.)+(spec|test).+(ts|tsx|js)"
  ]
}
