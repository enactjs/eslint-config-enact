module.exports = {
	extends: './index.js',
	plugins: ['react', 'babel', 'jest', 'enact'],
	rules: {
		'array-bracket-spacing': ['warn', 'never', {}],
		'comma-dangle': ['warn', 'never'],
		'no-cond-assign': ['error', 'except-parens'],
		'no-console': 'warn',
		'no-debugger': 'warn',
		'no-extra-semi': 'warn',
		'no-func-assign': 'error',
		'use-isnan': 'error',
		'dot-location': ['warn', 'property'],
		'no-extend-native': 'error',
		'no-fallthrough': 'error',
		'no-nested-ternary': 'warn',
		'no-new-wrappers': 'error',
		'no-new': 'warn',
		'no-return-assign': ['error', 'except-parens'],
		'no-sequences': 'error',
		'no-useless-call': 'error',
		'no-useless-escape': 'warn',
		'no-useless-return': 'warn',
		'radix': ['warn', 'as-needed'],
		'vars-on-top': 'warn',
		'no-shadow': ['error', {'builtinGlobals': true, 'hoist': 'all', 'allow': ['context']}],
		'no-undefined': 'error',
		'no-use-before-define': ['error', {'functions': false}],
		'brace-style': ['warn', '1tbs', {}],
		'camelcase': ['warn', {allow: ["^UNSAFE_"]}],
		'comma-spacing': ['warn', {'after': true}],
		'comma-style': 'warn',
		'computed-property-spacing': ['warn', 'never'],
		'eol-last': 'warn',
		'indent': ['warn', 'tab', {
				'SwitchCase': 1,
				'FunctionDeclaration': {'body': 1, 'parameters': 2},
				'FunctionExpression': {'body': 1, 'parameters': 2},
				'ignoredNodes': ['TemplateLiteral *']
		}],
		'jsx-quotes': ['warn', 'prefer-double'],
		// 'key-spacing': ['warn', {
		// 	'singleLine': {
		// 		'beforeColon': false,
		// 		'afterColon' : true
		// 	},
		// 	'multiLine': {
		// 		'afterColon': true
		// 		'align': 'colon'
		// 	}
		// }],
		'linebreak-style': ['warn', 'unix'],
		'max-nested-callbacks': ['warn', 4],
		'no-array-constructor': 'error',
		'no-lonely-if': 'warn',
		'no-mixed-spaces-and-tabs': ['warn', false],
		'no-new-object': 'error',
		'operator-linebreak': ['warn', 'after'],
		'quotes': ['warn', 'single', 'avoid-escape'],
		'semi-spacing': ['warn', {'before': false, 'after': true}],
		'semi': ['warn', 'always'],
		'keyword-spacing': 'warn',
		'space-before-blocks': ['warn', 'always'],
		'space-before-function-paren': ['warn', 'always'],
		'space-infix-ops': ['warn', {'int32Hint': true}],
		'space-unary-ops': ['warn', {'words': true, 'nonwords': false}],
		'spaced-comment': ['warn', 'always', {'markers': ['*']}],
		'arrow-spacing': ['warn', {'before': true, 'after': true}],
		'prefer-spread': 'warn',

		// react plugin - React and jsx rules
		'react/default-props-match-prop-types': 'warn',
		'react/sort-prop-types': ['warn', {
			'ignoreCase': true,
			'requiredFirst': true,
			'sortShapeProp': true
		}],
		'react/sort-comp': 'warn',
		'react/void-dom-elements-no-children': 'error',

		'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
		'react/jsx-curly-spacing': ['warn', 'never'],
		'react/jsx-equals-spacing': ['warn', 'never'],
		'react/jsx-first-prop-new-line': ['warn', 'multiline'],
		'react/jsx-indent': ['warn', 'tab'],
		'react/jsx-indent-props': ['warn', 'tab'],
		'react/jsx-tag-spacing': ['warn', {closingSlash: 'never', beforeSelfClosing: 'always', afterOpening: 'never'}],
		'react/jsx-props-no-multi-spaces': 'warn',
		'react/forbid-foreign-prop-types': 'warn',
		'react/jsx-sort-default-props': ['warn', {'ignoreCase': true}],

		// babel plugin
		'babel/object-curly-spacing': ['warn', 'never'],

		// enact plugin
		'enact/display-name': 'warn',
		'enact/kind-name': 'warn',
		'enact/prop-types': ['warn', {'ignore': ['children', 'className', 'style']}]
	},
	overrides: [
		{
			files: [
				'**/__tests__/**/*.{js,jsx,ts,tsx}',
				'**/?(*.)(spec|test).{js,jsx,ts,tsx}',
				'**/*-specs.{js,jsx,ts,tsx}'
			],
			excludedFiles: ['tests/screenshot/**/*', 'tests/ui/**/*'],
			rules: {
				// jest plugin
				'jest/no-focused-tests': 'error',
			}
		}
	]
};
