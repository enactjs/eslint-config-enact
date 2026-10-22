const babelEslintPlugin = require('@babel/eslint-plugin');
const eslintPluginEnact = require('eslint-plugin-enact');
const stylisticEslintPlugin = require('@stylistic/eslint-plugin');

const basicConfig = require('./index.js');

module.exports = [
	...basicConfig,
	{
		plugins: {
			'@babel': babelEslintPlugin.default,
			'@stylistic': stylisticEslintPlugin,
			enact: eslintPluginEnact,
		},
		rules: {
			'camelcase': ['warn', {
				allow: [
					'^UNSAFE_'
				]
			}],
			'max-nested-callbacks': ['warn', 4],
			'no-array-constructor': 'error',
			'no-cond-assign': ['error', 'except-parens'],
			'no-console': 'warn',
			'no-debugger': 'warn',
			'no-extend-native': 'error',
			'no-extra-semi': 'warn',
			'no-fallthrough': 'error',
			'no-func-assign': 'error',
			'no-lonely-if': 'warn',
			'no-mixed-spaces-and-tabs': ['warn', false],
			'no-nested-ternary': 'warn',
			'no-new': 'warn',
			'no-new-object': 'error',
			'no-new-wrappers': 'error',
			'no-return-assign': ['error', 'except-parens'],
			'no-sequences': 'error',
			'no-shadow': ['error', {
				builtinGlobals: true,
				hoist: 'all',
				allow: [
					'context'
				]
			}],
			'no-undefined': 'error',
			'no-use-before-define': ['error', {
				functions: false
			}],
			'no-useless-call': 'error',
			'no-useless-escape': 'warn',
			'no-useless-return': 'warn',
			'prefer-spread': 'warn',
			// ESLint 10 ignores the deprecated `as-needed` option and always requires a radix
			'radix': 'off',
			'semi-spacing': ['warn', {
				before: false,
				after: true
			}],
			'use-isnan': 'error',
			'vars-on-top': 'warn',
			'array-bracket-spacing': ['warn', 'never', {}],
			'arrow-spacing': ['warn', {
				before: true,
				after: true
			}],
			'brace-style': ['warn', '1tbs', {}],
			'comma-dangle': ['warn', 'never'],
			'comma-spacing': ['warn', {
				after: true
			}],
			'comma-style': 'warn',
			'computed-property-spacing': ['warn', 'never'],
			'dot-location': ['warn', 'property'],
			'eol-last': 'warn',
			'indent': ['warn', 'tab', {
				SwitchCase: 1,
				FunctionDeclaration: {
					body: 1,
					parameters: 2
				},
				FunctionExpression: {
					body: 1,
					parameters: 2
				},
				ignoredNodes: [
					'TemplateLiteral *'
				]
			}],
			'jsx-quotes': ['warn', 'prefer-double'],
			'keyword-spacing': 'warn',
			'linebreak-style': ['warn', 'unix'],
			'operator-linebreak': ['warn', 'after'],
			'space-before-blocks': ['warn', 'always'],
			'space-before-function-paren': ['warn', 'always'],
			'space-infix-ops': ['warn', {
				int32Hint: true
			}],
			'space-unary-ops': ['warn', {
				words: true,
				nonwords: false
			}],
			'spaced-comment': ['warn', 'always', {
				markers: [
					'*'
				]
			}],

			// TODO: switch back to eslint-plugin-react rules once it supports ESLint 10 (see the TODO in index.js)
			// ESLint React https://eslint-react.xyz
			'@eslint-react/dom-no-void-elements-with-children': 'error',

			// @stylistic plugin https://eslint.style
			'@stylistic/jsx-closing-bracket-location': ['warn', 'line-aligned'],
			'@stylistic/jsx-curly-spacing': ['warn', 'never'],
			'@stylistic/jsx-equals-spacing': ['warn', 'never'],
			'@stylistic/jsx-first-prop-new-line': ['warn', 'multiline'],
			// jsx-indent is covered by the core `indent` rule above
			'@stylistic/jsx-indent-props': ['warn', 'tab'],
			'@stylistic/jsx-tag-spacing': ['warn', {
				closingSlash: 'never',
				beforeSelfClosing: 'always',
				afterOpening: 'never'
			}],

			// eslint-plugin-react rule without a non-deprecated replacement, provided by eslint-plugin-enact
			'enact/jsx-props-no-multi-spaces': 'warn',

			// @babel/eslint-plugin 8 dropped its object-curly-spacing and semi rules.
			// The core object-curly-spacing rule misreports `export Foo from './Foo'`, @stylistic handles it.
			'@stylistic/object-curly-spacing': ['warn', 'never'],
			// According to spec, class properties should end with semicolon
			// https://github.com/tc39/proposal-class-public-fields/issues/25
			'semi': ['warn', 'always'],

			// enact plugin https://github.com/enactjs/eslint-plugin-enact/
			'enact/display-name': 'warn',
			'enact/kind-name': 'warn'
		}
	},
	{
		// Strict Typescript overrides
		files: ['**/*.ts?(x)'],
		rules: {
			'no-array-constructor': 'off',
			'@typescript-eslint/no-array-constructor': 'error',
			'no-use-before-define': 'off',
			'@typescript-eslint/no-use-before-define': ['error', {
				functions: false,
				classes: false,
				variables: false,
				typedefs: false
			}]
		}
	},
	{
		// Strict testfile overrides
		files: [
			'**/__tests__/**/*.{js,jsx,ts,tsx}',
			'**/*.+(spec|test).{js,jsx,ts,tsx}',
			'**/*-specs.{js,jsx,ts,tsx}',
			'**/tests/screenshot/**/*',
			'**/tests/ui/**/*'
		],
		rules: {
			// Lots of callbacks can occur in tests
			'max-nested-callbacks': 'off',
			// disallow describe.only and test.only
			"no-restricted-properties": ['error', {
				"object": "describe",
				"property": "only"
			}, {
				"object": "test",
				"property": "only"
			}, {
				"object": "it",
				"property": "only"
			}]
		}
	}
];
