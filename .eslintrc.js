module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': ["standard", "plugin:react/recommended"],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
    'jest': true,
    'describe': true,
    'it': true,
    'expect': true,
    'beforeEach': true
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'jest'
  ],
  'rules': {
  }
}
