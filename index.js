module.exports = {
	root: true,
	globals: {
		__DEV__: true,
		process: true,
		window: true,
		document: true,
	},
	env: {
		es6: true, // Enables ES6 globals
		'shared-node-browser': true, // restrict to common globals to preserve isomorphic support
		commonjs: true
	},
	extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
	ignorePatterns: [
		'**/node_modules/*',
		'**/build/*',
		'**/dist/*',
		'coverage/*'
	],
	parser: 'babel-eslint',
	parserOptions: {
		'ecmaVersion': 2018,
		'sourceType': 'module',
		'ecmaFeatures': {
			'jsx': true
		}
	},
	plugins: ['react', 'enact'],
	settings: {
		'react': {
			'pragma': 'React',  // Pragma to use, default to "React"
			'version': '15.0' // React version, default to the latest React stable release
		}
	},
	rules: {
		'no-cond-assign': ['warn', 'except-parens'],
		'no-constant-condition': 'warn',
		'no-control-regex': 'off',
		'no-debugger': 'off',
		'no-empty': 'warn',
		'no-extra-boolean-cast': 'warn',
		'no-extra-semi': 'off',
		'no-func-assign': 'warn',
		'no-inner-declarations': 'off',
		'no-irregular-whitespace': 'warn',
		'no-negated-in-lhs': 'error',
		'no-regex-spaces': 'warn',
		'no-unreachable': 'warn',
		'use-isnan': 'warn',
		'no-unexpected-multiline': 'warn',
		'block-scoped-var': 'warn',
		'curly': ['warn', 'multi-line'],
		'eqeqeq': ['warn', 'smart'],
		'no-alert': 'warn',
		'no-caller': 'error',
		'no-div-regex': 'warn',
		'no-eval': 'warn',
		'no-extend-native': 'warn',
		'no-extra-bind': 'warn',
		'no-fallthrough': 'warn',
		'no-floating-decimal': 'warn',
		'no-implied-eval': 'warn',
		// 'no-invalid-this': 'error', -- false positive due to https://github.com/babel/eslint-plugin-babel/issues/12
		'no-iterator': 'error',
		'no-labels': 'error',
		'no-native-reassign': 'error',
		'no-new-func': 'error',
		'no-new-wrappers': 'warn',
		'no-octal-escape': 'warn',
		'no-proto': 'error',
		'no-redeclare': ['error', {'builtinGlobals': true}],
		'no-return-assign': ['warn', 'except-parens'],
		'no-script-url': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'warn',
		'no-throw-literal': 'error',
		'no-unused-expressions': 'warn',
		'no-useless-call': 'warn',
		'no-useless-escape': 'off',
		'wrap-iife': ['error', 'inside'],
		'no-catch-shadow': 'error',
		'no-label-var': 'error',
		'no-shadow': ['warn', {'builtinGlobals': true, 'hoist': 'all', 'allow': ['context']}],
		'no-unused-vars': 'warn',
		'no-use-before-define': ['warn', {'functions': false}],
		'new-cap': ['error', {'newIsCap': true, 'capIsNew': false}],
		'new-parens': 'warn',
		'no-array-constructor': 'warn',
		'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
		'no-new-object': 'warn',
		'no-trailing-spaces': 'warn',
		'no-unneeded-ternary': 'warn',
		'no-var': 'warn',
		'require-yield': 'off',

		// react plugin
		'react/display-name': 'off',
		'react/no-access-state-in-setstate': 'warn',
		'react/no-children-prop': 'warn',
		'react/no-danger': 'warn',
		'react/no-deprecated': 'warn',
		'react/no-did-mount-set-state': ['warn'],
		'react/no-did-update-set-state': ['warn'],
		'react/no-direct-mutation-state': 'warn',
		'react/no-find-dom-node': 'warn',
		'react/no-is-mounted': 'warn',
		'react/no-render-return-value': 'warn',
		'react/no-string-refs': 'warn',
		'react/no-this-in-sfc': 'warn',
		'react/no-unescaped-entities': 'warn',
		'react/no-unknown-property': 'warn',
		'react/prefer-es6-class': ['warn', 'always'],
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'warn',
		'react/require-render-return': 'warn',
		'react/self-closing-comp': 'warn',

		// react plugin - jsx rules
		'react/jsx-boolean-value': ['warn', 'never'],
		'react/jsx-key': 'off',
		'react/jsx-no-bind': ['warn', {
			'ignoreRefs': true,
			'allowArrowFunctions': false,
			'allowBind': false
		}],
		'react/jsx-no-comment-textnodes': 'warn',
		'react/jsx-no-duplicate-props': 'warn',
		'react/jsx-no-target-blank': 'warn',
		'react/jsx-no-undef': 'warn',
		'react/jsx-pascal-case': 'warn',
		'react/jsx-uses-react': 'warn',
		'react/jsx-uses-vars': 'warn',

		// enact plugin
		'enact/no-module-exports-import': 'error'
	},
	overrides: [
		{
			files: [
				'**/__tests__/**/*.{js,jsx,ts,tsx}',
				'**/?(*.)(spec|test).{js,jsx,ts,tsx}',
				'**/*-specs.{js,jsx,ts,tsx}'
			],
			excludedFiles: ['tests/screenshot/**/*', 'tests/ui/**/*'],
			env: {
				jest: true
			}
		},
		{
			files: [
				'tests/screenshot/**/*', 'tests/ui/**/*'
			],
			globals: {
				'browser': true,
				'expect': true,
				'$': true,
				'$$': true
			},
			env: {
				mocha: true
			}
		}
	]
};
