module.exports = {
	extends: './index.js',
	plugins: ['react', '@babel', '@stylistic/js', 'enact'],
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

		// @stylistic/js plugin https://github.com/eslint-stylistic/eslint-stylistic
		'@stylistic/js/array-bracket-spacing': ['warn', 'never', {}],
		'@stylistic/js/arrow-spacing': ['warn', {
			before: true,
			after: true
		}],
		'@stylistic/js/brace-style': ['warn', '1tbs', {}],
		'@stylistic/js/comma-dangle': ['warn', 'never'],
		'@stylistic/js/comma-spacing': ['warn', {
			after: true
		}],
		'@stylistic/js/comma-style': 'warn',
		'@stylistic/js/computed-property-spacing': ['warn', 'never'],
		'@stylistic/js/dot-location': ['warn', 'property'],
		'@stylistic/js/eol-last': 'warn',
		'@stylistic/js/indent': ['warn', 'tab', {
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
		'@stylistic/js/jsx-quotes': ['warn', 'prefer-double'],
		'@stylistic/js/keyword-spacing': 'warn',
		'@stylistic/js/linebreak-style': ['warn', 'unix'],
		'@stylistic/js/operator-linebreak': ['warn', 'after'],
		'@stylistic/js/space-before-blocks': ['warn', 'always'],
		'@stylistic/js/space-before-function-paren': [
			'warn',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always'
			}
		],
		'@stylistic/js/space-infix-ops': ['warn', {
			int32Hint: true
		}],
		'@stylistic/js/space-unary-ops': ['warn', {
			words: true,
			nonwords: false
		}],
		'@stylistic/js/spaced-comment': ['warn', 'always', {
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
		'enact/kind-name': 'warn',
		'enact/prop-types': ['warn', {'ignore': ['children', 'className', 'style']}]
	},
	overrides: [
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
				}],
				// PropType validation is not a priority in tests
				'enact/prop-types': 'off'
			}
		}
	]
};
