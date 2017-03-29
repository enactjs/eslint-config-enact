module.exports = {
	extends: './index.js',
	parser: 'babel-eslint',
	plugins: [
		'react',
		'babel',
		'enact'
	],
	rules: {
		'array-bracket-spacing': [1, 'never', {}],
		'comma-dangle': [1, 'never'],
		'no-cond-assign': [2, 'except-parens'],
		'no-console': 1,
		'no-debugger': 1,
		'no-extra-semi': 1,
		'no-func-assign': 2,
		'use-isnan': 2,
		'valid-jsdoc': [0, {'prefer': {'return': 'returns'}, 'preferType': {'String': 'String', 'object': 'Object'}}],
		'dot-location': [1, 'property'],
		'no-extend-native': 2,
		'no-fallthrough': 2,
		'no-new-wrappers': 2,
		'no-new': 1,
		'no-return-assign': [2, 'except-parens'],
		'no-sequences': 2,
		'no-useless-call': 2,
		'no-useless-return': 1,
		'radix': [1, 'as-needed'],
		'vars-on-top': 1,
		'no-shadow': [2, {'builtinGlobals': true, 'hoist': 'all', 'allow': ['context']}],
		'no-undefined': 2,
		'no-use-before-define': [2, {'functions': false}],
		'brace-style': [1, '1tbs', {}],
		'camelcase': [1, {'properties': 'always'}],
		'comma-spacing': [1, {'after': true}],
		'comma-style': 1,
		'computed-property-spacing': [1, 'never'],
		'eol-last': 1,
		'indent': [1, 'tab', {'SwitchCase': 1}],
		'jsx-quotes': [1, 'prefer-double'],
		// 'key-spacing': [1, {
		// 	'singleLine': {
		// 		'beforeColon': false,
		// 		'afterColon' : true
		// 	},
		// 	'multiLine': {
		// 		'afterColon': true
		// 		'align': 'colon'
		// 	}
		// }],
		'lines-around-comment': 0,
		'linebreak-style': [1, 'unix'],
		'max-nested-callbacks': [1, 4],
		'newline-after-var': [0, 'always'],
		'no-array-constructor': 2,
		'no-lonely-if': 1,
		'no-mixed-spaces-and-tabs': [1, false],
		'no-new-object': 2,
		'operator-linebreak': [1, 'after'],
		'quotes': [1, 'single', 'avoid-escape'],
		'semi-spacing': [1, {'before': false, 'after': true}],
		'semi': [1, 'always'],
		'keyword-spacing': 1,
		'space-before-blocks': [1, 'always'],
		'space-before-function-paren': [1, 'always'],
		'space-infix-ops': [1, {'int32Hint': true}],
		'space-unary-ops': [1, {'words': true, 'nonwords': false}],
		'spaced-comment': [1, 'always', {'markers': ['*']}],
		'arrow-spacing': [1, {'before': true, 'after': true}],
		'prefer-spread': 1,

		// react plugin - React and jsx rules
		'react/sort-prop-types': [1, {
			'ignoreCase': true,
			'requiredFirst': true
		}],
		'react/sort-comp': 1,
		'react/void-dom-elements-no-children': 2,

		'react/jsx-closing-bracket-location': [1, 'line-aligned'],
		'react/jsx-curly-spacing': [1, 'never'],
		'react/jsx-equals-spacing': [1, 'never'],
		'react/jsx-first-prop-new-line': [1, 'multiline'],
		'react/jsx-indent': [1, 'tab'],
		'react/jsx-indent-props': [1, 'tab'],
		'react/jsx-space-before-closing': 1,
		'react/jsx-tag-spacing': [1, {closingSlash: 'never', beforeSelfClosing: 'always', afterOpening: 'never'}],
		'react/jsx-wrap-multilines': 0,

		// babel plugin
		'babel/object-curly-spacing': [1, 'never'],

		// enact plugin
		'enact/display-name': 1,
		'enact/kind-name': 1,
		'enact/prop-types': [1, {'ignore': ['children', 'className', 'style']}]
	}
};
