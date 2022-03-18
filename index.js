const restrictedGlobals = require('confusing-browser-globals');

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
		'/**/node_modules/',
		'/**/node_modules/*',
		'/**/build/',
		'/**/build/*',
		'/**/dist/',
		'/**/dist/*',
		'/**/coverage/',
		'/**/coverage/*',
		'/**/resources/',
		'/**/resources/*'
	],
	parser: '@babel/eslint-parser',
	parserOptions: {
		sourceType: 'module',
		requireConfigFile: false,
		babelOptions: {
			presets: [require.resolve('babel-preset-react-app/prod')]
		}
	},
	plugins: ['import', 'flowtype', 'jsx-a11y', 'react-hooks', 'enact'],
	settings: {
		react: {
			'version': 'detect' // React version, default to the latest React stable release
		}
	},
	rules: {
		'array-callback-return': 'warn',
		'default-case': ['warn', { commentPattern: '^no default$' }],
		'dot-location': ['warn', 'property'],
		eqeqeq: ['warn', 'smart'],
		'new-parens': 'warn',
		'no-array-constructor': 'warn',
		'no-caller': 'warn',
		'no-cond-assign': ['warn', 'except-parens'],
		'no-const-assign': 'warn',
		'no-control-regex': 'warn',
		'no-delete-var': 'warn',
		'no-dupe-args': 'warn',
		'no-dupe-class-members': 'warn',
		'no-dupe-keys': 'warn',
		'no-duplicate-case': 'warn',
		'no-empty-character-class': 'warn',
		'no-empty-pattern': 'warn',
		'no-eval': 'warn',
		'no-ex-assign': 'warn',
		'no-extend-native': 'warn',
		'no-extra-bind': 'warn',
		'no-extra-label': 'warn',
		'no-fallthrough': 'warn',
		'no-func-assign': 'warn',
		'no-implied-eval': 'warn',
		'no-invalid-regexp': 'warn',
		'no-iterator': 'warn',
		'no-label-var': 'warn',
		'no-labels': ['warn', { allowLoop: true, allowSwitch: false }],
		'no-lone-blocks': 'warn',
		'no-loop-func': 'warn',
		'no-mixed-operators': [
			'warn',
			{
				groups: [
					['&', '|', '^', '~', '<<', '>>', '>>>'],
					['==', '!=', '===', '!==', '>', '>=', '<', '<='],
					['&&', '||'],
					['in', 'instanceof'],
				],
				allowSamePrecedence: false,
			},
		],
		'no-multi-str': 'warn',
		'no-global-assign': 'warn',
		'no-unsafe-negation': 'warn',
		'no-new-func': 'warn',
		'no-new-object': 'warn',
		'no-new-symbol': 'warn',
		'no-new-wrappers': 'warn',
		'no-obj-calls': 'warn',
		'no-octal': 'warn',
		'no-octal-escape': 'warn',
		'no-redeclare': 'warn',
		'no-regex-spaces': 'warn',
		'no-restricted-syntax': ['warn', 'WithStatement'],
		'no-script-url': 'warn',
		'no-self-assign': 'warn',
		'no-self-compare': 'warn',
		'no-sequences': 'warn',
		'no-shadow-restricted-names': 'warn',
		'no-sparse-arrays': 'warn',
		'no-template-curly-in-string': 'warn',
		'no-this-before-super': 'warn',
		'no-throw-literal': 'warn',
		'no-undef': 'error',
		'no-restricted-globals': ['error'].concat(restrictedGlobals),
		'no-unreachable': 'warn',
		'no-unused-expressions': [
			'error',
			{
				allowShortCircuit: true,
				allowTernary: true,
				allowTaggedTemplates: true,
			},
		],
		'no-unused-labels': 'warn',
		'no-unused-vars': [
			'warn',
			{
				args: 'none',
				ignoreRestSiblings: true,
			},
		],
		'no-use-before-define': [
			'warn',
			{
				functions: false,
				classes: false,
				variables: false,
			},
		],
		'no-useless-computed-key': 'warn',
		'no-useless-concat': 'warn',
		'no-useless-constructor': 'warn',
		'no-useless-escape': 'warn',
		'no-useless-rename': [
			'warn',
			{
				ignoreDestructuring: false,
				ignoreImport: false,
				ignoreExport: false,
			},
		],
		'no-with': 'warn',
		'no-whitespace-before-property': 'warn',
		'react-hooks/exhaustive-deps': 'warn',
		'require-yield': 'warn',
		'rest-spread-spacing': ['warn', 'never'],
		strict: ['warn', 'never'],
		'unicode-bom': ['warn', 'never'],
		'use-isnan': 'warn',
		'valid-typeof': 'warn',
		'no-restricted-properties': [
			'error',
			{
				object: 'require',
				property: 'ensure',
				message:
					'Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting',
			},
			{
				object: 'System',
				property: 'import',
				message:
					'Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting',
			},
		],
		'getter-return': 'warn',

		// https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
		'import/first': 'error',
		'import/no-amd': 'error',
		'import/no-anonymous-default-export': 'warn',
		'import/no-webpack-loader-syntax': 'error',

		// https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
		'jsx-a11y/alt-text': 'warn',
		'jsx-a11y/anchor-has-content': 'warn',
		'jsx-a11y/anchor-is-valid': [
			'warn',
			{
				aspects: ['noHref', 'invalidHref'],
			},
		],
		'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
		'jsx-a11y/aria-props': 'warn',
		'jsx-a11y/aria-proptypes': 'warn',
		'jsx-a11y/aria-role': ['warn', { ignoreNonDOM: true }],
		'jsx-a11y/aria-unsupported-elements': 'warn',
		'jsx-a11y/heading-has-content': 'warn',
		'jsx-a11y/iframe-has-title': 'warn',
		'jsx-a11y/img-redundant-alt': 'warn',
		'jsx-a11y/no-access-key': 'warn',
		'jsx-a11y/no-distracting-elements': 'warn',
		'jsx-a11y/no-redundant-roles': 'warn',
		'jsx-a11y/role-has-required-aria-props': 'warn',
		'jsx-a11y/role-supports-aria-props': 'warn',
		'jsx-a11y/scope': 'warn',

		// https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
		'react-hooks/rules-of-hooks': 'error',

		// https://github.com/gajus/eslint-plugin-flowtype
		'flowtype/define-flow-type': 'warn',
		'flowtype/require-valid-file-annotation': 'warn',
		'flowtype/use-flow-type': 'warn',

		// https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
		'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-no-comment-textnodes': 'warn',
		'react/jsx-no-duplicate-props': 'warn',
		'react/jsx-no-target-blank': 'warn',
		'react/jsx-no-undef': 'error',
		'react/jsx-pascal-case': [
			'warn',
			{
				allowAllCaps: true,
				ignore: [],
			},
		],
		'react/no-danger-with-children': 'warn',
		// Disabled because of undesirable warnings
		// See https://github.com/facebook/create-react-app/issues/5204 for
		// blockers until its re-enabled
		// 'react/no-deprecated': 'warn',
		'react/no-direct-mutation-state': 'warn',
		'react/no-is-mounted': 'warn',
		'react/no-typos': 'error',
		'react/require-render-return': 'error',
		'react/style-prop-object': 'warn',

		// enact plugin https://github.com/enactjs/eslint-plugin-enact/
		'enact/no-module-exports-import': 'error'
	},
	overrides: [
		{
			// Typescript
			files: ['**/*.ts?(x)'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				ecmaVersion: 2018,
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true,
				},
				warnOnUnsupportedTypeScriptVersion: true,
			},
			plugins: ['@typescript-eslint'],
			// If adding a typescript-eslint version of an existing ESLint rule,
			// make sure to disable the ESLint rule here.
			rules: {
				// TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
				'default-case': 'off',
				// 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
				'no-dupe-class-members': 'off',
				// 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/477)
				'no-undef': 'off',

				// Add TypeScript specific rules (and turn off ESLint equivalents)
				'@typescript-eslint/consistent-type-assertions': 'warn',
				'no-array-constructor': 'off',
				'@typescript-eslint/no-array-constructor': 'warn',
				'no-redeclare': 'off',
				'@typescript-eslint/no-redeclare': 'warn',
				'no-use-before-define': 'off',
				'@typescript-eslint/no-use-before-define': [
					'warn',
					{
						functions: false,
						classes: false,
						variables: false,
						typedefs: false,
					},
				],
				'no-unused-expressions': 'off',
				'@typescript-eslint/no-unused-expressions': [
					'error',
					{
						allowShortCircuit: true,
						allowTernary: true,
						allowTaggedTemplates: true,
					},
				],
				'no-unused-vars': 'off',
				'@typescript-eslint/no-unused-vars': [
					'warn',
					{
						args: 'none',
						ignoreRestSiblings: true,
					},
				],
				'no-useless-constructor': 'off',
				'@typescript-eslint/no-useless-constructor': 'warn',
			},
		},
		{
			// Jest unit tests
			files: [
				'**/__tests__/**/*.{js,jsx,ts,tsx}',
				'**/?(*.)+(spec|test).[jt]s?(x)',
				'**/*-specs.{js,jsx,ts,tsx}'
			],
			plugins: ['jest', 'testing-library'],
			excludedFiles: ['tests/screenshot/**/*', 'tests/ui/**/*'],
			env: {
				jest: true,
			},
			rules: {
				// https://github.com/jest-community/eslint-plugin-jest
				'jest/no-conditional-expect': 'error',
				'jest/no-identical-title': 'error',
				'jest/no-interpolation-in-snapshots': 'error',
				'jest/no-jasmine-globals': 'error',
				'jest/no-jest-import': 'error',
				'jest/no-mocks-import': 'error',
				'jest/valid-describe-callback': 'error',
				'jest/valid-expect': 'error',
				'jest/valid-expect-in-promise': 'error',
				'jest/valid-title': 'warn',

				// https://github.com/testing-library/eslint-plugin-testing-library
				'testing-library/await-async-query': 'error',
				'testing-library/await-async-utils': 'error',
				'testing-library/no-await-sync-query': 'error',
				'testing-library/no-container': 'error',
				'testing-library/no-debugging-utils': 'error',
				'testing-library/no-dom-import': ['error', 'react'],
				'testing-library/no-node-access': 'error',
				'testing-library/no-promise-in-fire-event': 'error',
				'testing-library/no-render-in-setup': 'error',
				'testing-library/no-unnecessary-act': 'error',
				'testing-library/no-wait-for-empty-callback': 'error',
				'testing-library/no-wait-for-multiple-assertions': 'error',
				'testing-library/no-wait-for-side-effects': 'error',
				'testing-library/no-wait-for-snapshot': 'error',
				'testing-library/prefer-find-by': 'error',
				'testing-library/prefer-presence-queries': 'error',
				'testing-library/prefer-query-by-disappearance': 'error',
				'testing-library/prefer-screen-queries': 'error',
				'testing-library/render-result-naming-convention': 'error',
			}
		},
		{
			// WDIO mocha ui & screenshot tests
			files: [
				'**/tests/screenshot/**/*', '**/tests/ui/**/*'
			],
			globals: {
				'browser': true,
				'expect': true,
				'$': true,
				'$$': true
			},
			env: {
				mocha: true
			},
			rules: {
				// Arrow functions can simplify tests
				'react/jsx-no-bind': 'off'
			}
		}
	]
};
