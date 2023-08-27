module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    '@electron-toolkit/eslint-config-ts/recommended',
    '@electron-toolkit/eslint-config-prettier'
  ],
  "rules": {
    "no-unused-vars": "off",
    '@typescript-eslint/no-unused-vars': 'off',
    "react/no-unescaped-entities": 0,
    "react/react-in-jsx-scope": "off",
  }
}
