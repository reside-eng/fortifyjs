module.exports = {
  extends: [
    '@side/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsdoc/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  // TODO: [PLAT-827] Create a lint-config configuration for Typescript projects
  settings: {
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'no-console': 0,
    'jsdoc/require-returns-type': 0,
    'jsdoc/require-param-type': 0,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    // TODO: [PLAT-827] Create a lint-config configuration for Typescript projects

    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  overrides: [
    {
      files: ['./jest.setup.js'],
      extends: ['@side/jest'],
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      rules: {
        'jsdoc/require-jsdoc': 0,
      },
    },
    {
      files: ['**/*.ts'],
      rules: {
        'import/prefer-default-export': 0,
      },
    },
  ],
};
