const path = require('path')

module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'react-app',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
}
