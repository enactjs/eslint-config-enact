const babelEslintPlugin = require('@babel/eslint-plugin');
const eslintPluginEnact = require('eslint-plugin-enact');
const eslintPluginReact = require('eslint-plugin-react');
const stylisticEslintPluginRaw = require('@stylistic/eslint-plugin');
const stylisticEslintPlugin = stylisticEslintPluginRaw.default || stylisticEslintPluginRaw;

const basicConfig = require('./index.js');

module.exports = [
	...basicConfig,
	{
		plugins: {
			react: eslintPluginReact,
			'@babel': babelEslintPlugin,
			'@stylistic': stylisticEslintPlugin,
			enact: eslintPluginEnact
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
			'radix': ['warn', 'as-needed'],
			'semi-spacing': ['warn', {
				before: false,
				after: true
			}],
			'use-isnan': 'error',
			'vars-on-top': 'warn',

			// @stylistic plugin https://github.com/eslint-stylistic/eslint-stylistic
			'@stylistic/array-bracket-spacing': ['warn', 'never', {}],
			'@stylistic/arrow-spacing': ['warn', {
				before: true,
				after: true
			}],
			'@stylistic/brace-style': ['warn', '1tbs', {}],
			'@stylistic/comma-dangle': ['warn', 'never'],
			'@stylistic/comma-spacing': ['warn', {
				after: true
			}],
			'@stylistic/comma-style': 'warn',
			'@stylistic/computed-property-spacing': ['warn', 'never'],
			'@stylistic/dot-location': ['warn', 'property'],
			'@stylistic/eol-last': 'warn',
			'@stylistic/indent': ['warn', 'tab', {
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
			'@stylistic/jsx-quotes': ['warn', 'prefer-double'],
			'@stylistic/keyword-spacing': 'warn',
			'@stylistic/linebreak-style': ['warn', 'unix'],
			'@stylistic/operator-linebreak': ['warn', 'after'],
			'@stylistic/space-before-blocks': ['warn', 'always'],
			'@stylistic/space-before-function-paren': ['warn', 'always'],
			'@stylistic/space-infix-ops': ['warn', {
				int32Hint: true
			}],
			'@stylistic/space-unary-ops': ['warn', {
				words: true,
				nonwords: false
			}],
			'@stylistic/spaced-comment': ['warn', 'always', {
				markers: [
					'*'
				]
			}],

			// react plugin https://github.com/yannickcr/eslint-plugin-react
			'react/default-props-match-prop-types': 'warn',
			'react/sort-comp': ['warn', {
				order: [
					'static-variables',
					'static-methods',
					'lifecycle',
					'everything-else',
					'render'
				]
			}],
			'react/sort-prop-types': ['warn', {
				ignoreCase: true,
				requiredFirst: true,
				sortShapeProp: true
			}],
			'react/void-dom-elements-no-children': 'error',

			// react plugin - jsx rules
			'react/forbid-foreign-prop-types': 'warn',
			'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
			'react/jsx-curly-spacing': ['warn', 'never'],
			'react/jsx-equals-spacing': ['warn', 'never'],
			'react/jsx-first-prop-new-line': ['warn', 'multiline'],
			'react/jsx-indent': ['warn', 'tab'],
			'react/jsx-indent-props': ['warn', 'tab'],
			'react/jsx-props-no-multi-spaces': 'warn',
			'react/sort-default-props': ['warn', {
				ignoreCase: true
			}],
			'react/jsx-tag-spacing': ['warn', {
				closingSlash: 'never',
				beforeSelfClosing: 'always',
				afterOpening: 'never'
			}],

			// babel plugin https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin
			'@babel/object-curly-spacing': ['warn', 'never'],
			// According to spec, class properties should end with semicolon
			// https://github.com/tc39/proposal-class-public-fields/issues/25
			'@babel/semi': ['warn', 'always'],

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
