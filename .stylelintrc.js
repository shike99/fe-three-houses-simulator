module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
  ],
  ignoreFiles: [
    'node_modules',
  ],
  rules: {
    'at-rule-no-unknown': null,
    'at-rule-no-vendor-prefix': true,
    'font-weight-notation': 'named-where-possible',
    'function-url-quotes': 'always',
    'media-feature-name-no-vendor-prefix': true,
    'no-empty-source': null,
    'no-descending-specificity': null,
    'property-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'string-quotes': 'single',
    'value-no-vendor-prefix': true,
  },
}
