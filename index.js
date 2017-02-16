module.exports = {
	globals: {
		'__BROWSER__': true,
		'__DEV__': true,
		'require': true,
		'window': true,
		'document': true,
		'console': true,
		'module': true,
		'expect': true,
		'clearInterval': false,
		'clearTimeout': false,
		'setInterval': false,
		'setTimeout': false
	},
	env: {
		'es6': true, // sets the "ecmaVersion" parser option to 6
		'mocha': true
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parser: 'babel-eslint',
	parserOptions: {
		'sourceType': 'module',
		'ecmaFeatures': {
			'jsx': true
		}
	},
	plugins: [
		'react',
		'babel'
	],
	settings: {
		'react': {
			'pragma': 'React',  // Pragma to use, default to "React"
			'version': '15.0' // React version, default to the latest React stable release
		}
	},
	rules: {
		'comma-dangle': [0, 'never'],
		'no-cond-assign': [1, 'except-parens'],
		'no-console': 0,
		'no-constant-condition': 1,
		'no-control-regex': 0,
		'no-debugger': 0,
		'no-dupe-args': 2,
		'no-dupe-keys': 2,
		'no-duplicate-case': 2,
		'no-empty-character-class': 2,
		'no-empty': 1,
		'no-ex-assign': 2,
		'no-extra-boolean-cast': 1,
		'no-extra-parens': 0,
		'no-extra-semi': 0,
		'no-func-assign': 1,
		'no-inner-declarations': 0,
		'no-invalid-regexp': 2,
		'no-irregular-whitespace': 1,
		'no-negated-in-lhs': 2,
		'no-obj-calls': 2,
		'no-regex-spaces': 1,
		'no-sparse-arrays': 2,
		'no-unreachable': 1,
		'use-isnan': 1,
		'valid-jsdoc': [0, {'prefer': {'return': 'returns'}, 'preferType': {'String': 'String', 'object': 'Object'}}],
		'valid-typeof': 2,
		'no-unexpected-multiline': 1,
		'accessor-pairs': 0,
		'block-scoped-var': 1,
		'complexity': 0,
		'consistent-return': 0,
		'curly': [1, 'multi-line'],
		'default-case': 0,
		'dot-notation': 0,
		'dot-location': [0, 'property'],
		'eqeqeq': [1, 'smart'],
		'guard-for-in': 0,
		'no-alert': 1,
		'no-caller': 2,
		'no-div-regex': 1,
		'no-else-return': 0,
		'no-empty-label': 0,
		'no-eq-null': 0,
		'no-eval': 1,
		'no-extend-native': 1,
		'no-extra-bind': 1,
		'no-fallthrough': 1,
		'no-floating-decimal': 1,
		'no-implicit-coercion': 0,
		'no-implied-eval': 1,
		// 'no-invalid-this': 2, -- false positive due to https://github.com/babel/eslint-plugin-babel/issues/12
		'no-invalid-this': 0,
		'no-iterator': 2,
		'no-labels': 2,
		'no-lone-blocks': 0,
		'no-loop-func': 0,
		'no-multi-spaces': 0,
		'no-multi-str': 0,
		'no-native-reassign': 2,
		'no-new-func': 2,
		'no-new-wrappers': 1,
		'no-new': 0,
		'no-octal-escape': 1,
		'no-octal': 2,
		'no-param-reassign': 0,
		'no-process-env': 0,
		'no-proto': 2,
		'no-redeclare': [2, {'builtinGlobals': true}],
		'no-return-assign': [1, 'except-parens'],
		'no-script-url': 2,
		'no-self-compare': 2,
		'no-sequences': 1,
		'no-throw-literal': 2,
		'no-unused-expressions': 1,
		'no-useless-call': 1,
		'no-useless-return': 0,
		'no-void': 0,
		'no-warning-comments': 0,
		'no-with': 2,
		'radix': [0, 'as-needed'],
		'vars-on-top': 0,
		'wrap-iife': [2, 'inside'],
		'yoda': 0,
		'strict': 0,
		'init-declarations': 0,
		'no-catch-shadow': 2,
		'no-delete-var': 2,
		'no-label-var': 2,
		'no-shadow-restricted-names': 2,
		'no-shadow': [1, {'builtinGlobals': true, 'hoist': 'all', 'allow': ['context']}],
		'no-undef-init': 0,
		'no-undef': 2,
		'no-undefined': 1,
		'no-unused-vars': 1,
		'no-use-before-define': [1, {'functions': false}],
		'callback-return': 0,
		'handle-callback-err': 0,
		'no-mixed-requires': 0,
		'no-new-require': 0,
		'no-path-concat': 0,
		'no-process-exit': 0,
		'no-restricted-modules': 0,
		'no-sync': 0,
		'array-bracket-spacing': 0,
		'brace-style': [0, '1tbs', {}],
		'camelcase': [0, {'properties': 'always'}],
		'comma-spacing': [0, {'after': true}],
		'comma-style': 0,
		'computed-property-spacing': [0, 'never'],
		'consistent-this': 0,
		'eol-last': 0,
		'func-names': 0,
		'func-style': 0,
		'id-length': 0,
		'indent': [0, 'tab', {'SwitchCase': 1}],
		'jsx-quotes': [0, 'prefer-double'],
		'key-spacing': 0,
		'linebreak-style': [0, 'unix'],
		'max-nested-callbacks': [0, 4],
		'new-cap': [2, {'newIsCap': true, 'capIsNew': false}],
		'new-parens': 1,
		'newline-after-var': [0, 'always'],
		'no-array-constructor': 1,
		'no-continue': 0,
		'no-inline-comments': 0,
		'no-lonely-if': 0,
		'no-mixed-spaces-and-tabs': [1, 'smart-tabs'],
		'no-multiple-empty-lines': 0,
		'no-nested-ternary': 1,
		'no-new-object': 1,
		'no-spaced-func': 1,
		'no-ternary': 0,
		'no-trailing-spaces': 1,
		'no-underscore-dangle': 0,
		'no-unneeded-ternary': 1,
		// Superseded by babel version below
		'object-curly-spacing': 0,
		'one-var': 0,
		'operator-assignment': 0,
		'operator-linebreak': [0, 'after'],
		'padded-blocks': 0,
		'quote-props': 0,
		'quotes': [0, 'single', 'avoid-escape'],
		'id-match': 0,
		'semi-spacing': [0, {'before': false, 'after': true}],
		'semi': [0, 'always'],
		'sort-vars': 0,
		'keyword-spacing': 0,
		'space-before-blocks': [0, 'always'],
		'space-before-function-paren': [0, 'always'],
		'space-in-parens': 0,
		'space-infix-ops': [0, {'int32Hint': true}],
		'space-unary-ops': [0, {'words': true, 'nonwords': false}],
		'spaced-comment': [0, 'always', {'markers': ['*']}],
		'wrap-regex': 0,
		'arrow-parens': 0,
		'arrow-spacing': [0, {'before': true, 'after': true}],
		'constructor-super': 2,
		'generator-star-spacing': 0,
		'no-class-assign': 2,
		'no-const-assign': 2,
		'no-this-before-super': 2,
		'no-var': 1,
		'object-shorthand': 0,
		'prefer-const': 0,
		'prefer-spread': 0,
		'prefer-reflect': 0,
		'require-yield': 0,
		'max-depth': 0,
		'max-len': 0,
		'max-params': 0,
		'max-statements': 0,
		'no-bitwise': 0,
		'no-plusplus': 0,

		// react plugin
		'react/display-name': 0,
		'react/forbid-prop-types': 0,
		'react/no-children-prop': 1,
		'react/no-danger': 1,
		'react/no-deprecated': 1,
		'react/no-did-mount-set-state': [1],
		'react/no-did-update-set-state': [1],
		'react/no-direct-mutation-state': 1,
		'react/no-find-dom-node': 1,
		'react/no-is-mounted': 1,
		'react/no-multi-comp': 0,
		'react/no-render-return-value': 1,
		'react/no-set-state': 0,
		'react/no-string-refs': 1,
		'react/no-unescaped-entities': 1,
		'react/no-unknown-property': 1,
		'react/prefer-es6-class': [1, 'always'],
		'react/prefer-stateless-function': 0,
		'react/prop-types': 0,
		'react/react-in-jsx-scope': 1,
		'react/require-optimization': 0,
		'react/require-render-return': 1,
		'react/self-closing-comp': 1,
		'react/sort-comp': 0,
		'react/sort-prop-types': [0, {
			'ignoreCase': true,
			'requiredFirst': true
		}],

		// react plugin - jsx rules
		'react/jsx-boolean-value': [1, 'never'],
		'react/jsx-closing-bracket-location': [0, 'line-aligned'],
		'react/jsx-curly-spacing': [0, 'never'],
		'react/jsx-equals-spacing': [0, 'never'],
		'react/jsx-filename-extension': 0,
		'react/jsx-first-prop-new-line': [0, 'multiline'],
		'react/jsx-handler-names': 0,
		'react/jsx-indent': [0, 'tab'],
		'react/jsx-indent-props': [0, 'tab'],
		'react/jsx-key': 0,
		'react/jsx-max-props-per-line': 0,
		'react/jsx-no-bind': [1, {
			'ignoreRefs': true,
			'allowArrowFunctions': false,
			'allowBind': false
		}],
		'react/jsx-no-comment-textnodes': 1,
		'react/jsx-no-duplicate-props': 1,
		'react/jsx-no-literals': 0,
		'react/jsx-no-target-blank': 1,
		'react/jsx-no-undef': 1,
		'react/jsx-pascal-case': 1,
		'react/jsx-sort-props': 0,
		'react/jsx-space-before-closing': 0,
		'react/jsx-tag-spacing': [0, {closingSlash: 'never', beforeSelfClosing: 'always', afterOpening: 'never'}],
		'react/jsx-uses-react': 1,
		'react/jsx-uses-vars': 1,
		'react/jsx-wrap-multilines': 0
	}
};
