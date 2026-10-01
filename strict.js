const babelEslintPlugin = require('@babel/eslint-plugin');
const eslintPluginEnact = require('eslint-plugin-enact');
const stylisticEslintPlugin = require('@stylistic/eslint-plugin');
const eslintPluginReact = require('./react-compat');

const basicConfig = require('./index.js');

module.exports = [
	...basicConfig,
	{
		plugins: {
			react: eslintPluginReact,
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

			// react plugin (./react-compat)
			'react/void-dom-elements-no-children': 'error',

			// eslint-plugin-react rules without a replacement in ESLint React or @stylistic. They are registered as
			// no-ops in ./react-compat so existing disable directives stay valid.
			// 'react/default-props-match-prop-types': 'warn',
			// 'react/forbid-foreign-prop-types': 'warn',
			// 'react/sort-comp': ['warn', {
			// 	order: [
			// 		'static-variables',
			// 		'static-methods',
			// 		'lifecycle',
			// 		'everything-else',
			// 		'render'
			// 	]
			// }],
			// 'react/sort-default-props': ['warn', {
			// 	ignoreCase: true
			// }],
			// 'react/sort-prop-types': ['warn', {
			// 	ignoreCase: true,
			// 	requiredFirst: true,
			// 	sortShapeProp: true
			// }],

			// react plugin - jsx rules
			'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
			'react/jsx-curly-spacing': ['warn', 'never'],
			'react/jsx-equals-spacing': ['warn', 'never'],
			'react/jsx-first-prop-new-line': ['warn', 'multiline'],
			// Covered by the core `indent` rule above
			// 'react/jsx-indent': ['warn', 'tab'],
			'react/jsx-indent-props': ['warn', 'tab'],
			'react/jsx-props-no-multi-spaces': 'warn',
			'react/jsx-tag-spacing': ['warn', {
				closingSlash: 'never',
				beforeSelfClosing: 'always',
				afterOpening: 'never'
			}],

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
