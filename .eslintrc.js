const fs = require('fs');

const commonJSAndTSRules = {
  'array-bracket-newline': ['error', 'consistent'],
  'array-element-newline': ['error', 'consistent'],
  'function-paren-newline': ['error', 'multiline-arguments'],
  'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  'import/order': ['error', {
    alphabetize: { order: 'asc' },
    'newlines-between': 'always',
  }],
  'import/prefer-default-export': 'off',
  'object-curly-newline': ['error', { consistent: true }],
};

const defaultTSRules = {
  '@typescript-eslint/explicit-function-return-type': 'error',
  'max-len': ['error', 120, 2, {
    ignoreUrls: true,
    ignoreComments: false,
    ignoreRegExpLiterals: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true,
  }],
  'no-restricted-imports': ['error', { patterns: ['../*', './*'] }],
};

const defaultTSExtends = [
  'plugin:@typescript-eslint/eslint-recommended',
  'plugin:@typescript-eslint/recommended',
  'airbnb-typescript/base',
];

const baseTSConfig = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    project: 'tsconfig.json',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
};

module.exports = {
  root: true,
  ignorePatterns: fs.readFileSync('.gitignore', 'utf8').split('\n').filter(Boolean),
  overrides: [
    // Javascript
    {
      files: [
        '*.js',
      ],
      extends: [
        'airbnb-base',
      ],
      rules: {
        ...commonJSAndTSRules,
      },
    },
    // TypeScript
    {
      files: [
        '*.ts',
      ],
      extends: [
        ...defaultTSExtends,
      ],
      ...baseTSConfig,
      rules: {
        ...commonJSAndTSRules,
        ...defaultTSRules,
      },
    },
  ],
};
