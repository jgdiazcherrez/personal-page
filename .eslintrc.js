module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'implicit-arrow-linebreak': ['off'],
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'comma-dangle': ['off'],
    'arrow-parens': ['error', 'always'],
    quotes: [2, 'single', { avoidEscape: true }],
    'global-require': 0
  }
};
