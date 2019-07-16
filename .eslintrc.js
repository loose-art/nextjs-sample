module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:prettier/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  globals: {
    'ga': true
  },
  rules: {
    'global-require': 'off',
    'lines-between-class-members': ['error', 'always', {
      'exceptAfterSingleLine': true
    }],
    'no-console': ['warn', {
      'allow': [
        'warn',
        'error'
      ]
    }],
    'camelcase': ['error', {
      'allow': ['main_contents']
    }],
    'no-underscore-dangle': ['error', {
      'allowAfterThis': true
    }],
    "no-unused-vars": 'error',
    'no-param-reassign': ['error', {
      'props': false
    }],
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-filename-extension': 'off',
    '@typescript-eslint/no-unused-vars': 'off'
  }
}
