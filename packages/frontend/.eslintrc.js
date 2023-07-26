module.exports = {
  extends: '../../.eslintrc.json',
  overrides: [
    {
      files: ['*'],
      excludedFiles: ['**/src/build/**/*.ts'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            name: '@XCHAIN/shared',
            message:
              'Do not use @XCHAIN/shared in frontend code. Use @XCHAIN/shared-pure instead.',
          },
        ],
      },
    },
  ],
}
