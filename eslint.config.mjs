import globals from 'globals'
import pluginJs from '@eslint/js'
import  prettierConfig from 'eslint-config-prettier'
import  prettierPlugin from 'eslint-plugin-prettier'
import tsEslint from 'typescript-eslint'

export default [
  prettierConfig,
  pluginJs.configs.recommended,
  ...tsEslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: globals.node
    },
    rules: {
      semi: [ 'error', 'always' ],
      'prettier/prettier': 'error',
    },
    plugins: {
      prettier: prettierPlugin,
    },
    ignores: ['dist/**/*', 'coverage/**/*', 'node_modules/**/*'],
  }
]
