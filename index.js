const babelEslintPlugin = require('@babel/eslint-plugin');
const babelParser = require('@babel/eslint-parser');
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const eslint = require('@eslint/js');
const eslintPluginEnact = require('eslint-plugin-enact');
const eslintPluginJest = require('eslint-plugin-jest');
const eslintPluginJsxA11y = require('eslint-plugin-jsx-a11y');
const eslintPluginReact = require('eslint-plugin-react');
const eslintPluginReactHooks = require('eslint-plugin-react-hooks');
const eslintPluginTestingLibrary = require('eslint-plugin-testing-library');
const globals = require('globals');
const stylisticEslintPluginRaw = require('@stylistic/eslint-plugin');

const stylisticEslintPlugin = stylisticEslintPluginRaw.default || stylisticEslintPluginRaw;

const customGlobals = {
	__DEV__: true,
	process: true,
	window: true,
	document: true,
	ENACT_PACK_NO_ANIMATION: true
};

const customTestsGlobals = {
	'browser': true,
	'expect': true,
	'$': true,
	'$$': true
};

const basicConfig = [
	eslint.configs.recommended,
	{
		ignores: [
			'**/node_modules/',
			'**/node_modules/*',
			'**/build/',
			'**/build/*',
			'**/dist/',
			'**/dist/*',
			'**/coverage/',
			'**/coverage/*',
			'**/resources/',
			'**/resources/*'
		]
	},
	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.es2015,
				...globals['shared-node-browser'], // restrict to common globals to preserve isomorphic support
				...globals.commonjs,
				...customGlobals
			},
			parser: babelParser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				},
				requireConfigFile: false,
				babelOptions: {
					presets: [require.resolve('babel-preset-enact')]
				}
			}
		},
		linterOptions: {
			reportUnusedDisableDirectives: "off"
		},
		plugins: {
			'@babel': babelEslintPlugin,
			'@stylistic': stylisticEslintPlugin,
			'jsx-a11y': eslintPluginJsxA11y,
			react: eslintPluginReact,
			enact: eslintPluginEnact,
			'react-hooks': eslintPluginReactHooks
		},
		settings: {
			react: {
				'pragma': 'React',	// Pragma to use, default to "React"
				'version': 'detect' // React version, default to the latest React stable release
			}
		},
		rules: {
			...eslintPluginReact.configs.recommended.rules,
			...eslintPluginReactHooks.configs.flat.recommended.rules,
			'react-hooks/preserve-manual-memoization': 'off',
			'react-hooks/purity': 'off',
			'react-hooks/set-state-in-effect': 'off',
			'react-hooks/globals': 'off',
			'react-hooks/static-components': 'off',
			'react-hooks/use-memo': 'off',
			'block-scoped-var': 'warn',
			'curly': ['warn', 'multi-line'],
			'eqeqeq': ['warn', 'smart'],
			'no-alert': 'warn',
			'no-array-constructor': 'warn',
			'no-caller': 'error',
			'no-catch-shadow': 'error',
			'no-cond-assign': ['warn', 'except-parens'],
			'no-constant-condition': 'warn',
			'no-control-regex': 'off',
			'no-debugger': 'off',
			'no-div-regex': 'warn',
			'no-empty': 'warn',
			'no-eval': 'warn',
			'no-extend-native': 'warn',
			'no-extra-bind': 'warn',
			'no-extra-boolean-cast': 'warn',
			'no-extra-semi': 'off',
			'no-fallthrough': 'warn',
			'no-func-assign': 'warn',
			'no-implied-eval': 'warn',
			'no-inner-declarations': 'off',
			'no-irregular-whitespace': 'warn',
			'no-iterator': 'error',
			'no-label-var': 'error',
			'no-labels': 'error',
			'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
			'no-global-assign': 'error',
			'no-unsafe-negation': 'error',
			'no-new-func': 'error',
			'no-new-object': 'warn',
			'no-new-wrappers': 'warn',
			'no-octal-escape': 'warn',
			'no-proto': 'error',
			'no-redeclare': ['error', {
				builtinGlobals: true
			}],
			'no-regex-spaces': 'warn',
			'no-return-assign': ['warn', 'except-parens'],
			'no-script-url': 'error',
			'no-self-compare': 'error',
			'no-sequences': 'warn',
			'no-shadow': ['warn', {
				builtinGlobals: true,
				hoist: 'all',
				allow: [
					'context'
				]
			}],
			'no-throw-literal': 'error',
			'no-unexpected-multiline': 'warn',
			'no-unneeded-ternary': 'warn',
			'no-unreachable': 'warn',
			'no-unused-vars': ['warn', {
				caughtErrors: 'none'
			}],
			'no-use-before-define': ['warn', {
				functions: false
			}],
			'no-useless-call': 'warn',
			'no-useless-escape': 'off',
			'no-var': 'warn',
			'require-yield': 'off',
			'use-isnan': 'warn',

			// @stylistic plugin https://github.com/eslint-stylistic/eslint-stylistic
			'@stylistic/new-parens': 'warn',
			'@stylistic/no-floating-decimal': 'warn',
			'@stylistic/no-trailing-spaces': 'warn',
			'@stylistic/wrap-iife': ['error', 'inside'],

			// jsx-a11y plugin https://github.com/evcohen/eslint-plugin-jsx-a11y
			'jsx-a11y/alt-text': 'warn',
			'jsx-a11y/anchor-has-content': 'warn',
			'jsx-a11y/anchor-is-valid': ['warn', {
				aspects: ['noHref', 'invalidHref']
			}],
			'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
			'jsx-a11y/aria-props': 'warn',
			'jsx-a11y/aria-proptypes': 'warn',
			'jsx-a11y/aria-role': ['warn', {ignoreNonDOM: true}],
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

			// react plugin https://github.com/yannickcr/eslint-plugin-react
			'react/display-name': 'off',
			'react/no-access-state-in-setstate': 'warn',
			'react/no-children-prop': 'warn',
			'react/no-danger': 'warn',
			'react/no-deprecated': 'warn',
			'react/no-did-mount-set-state': ['warn'],
			'react/no-did-update-set-state': ['warn'],
			'react/no-direct-mutation-state': 'warn',
			'react/no-find-dom-node': 'warn',
			'react/forbid-foreign-prop-types': 'warn',
			'react/no-is-mounted': 'warn',
			'react/no-render-return-value': 'warn',
			'react/no-string-refs': 'warn',
			'react/no-this-in-sfc': 'warn',
			'react/no-unescaped-entities': 'warn',
			'react/no-unknown-property': 'warn',
			'react/prefer-es6-class': ['warn', 'always'],
			'react/prop-types': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/require-render-return': 'warn',
			'react/self-closing-comp': 'warn',

			// react plugin - jsx rules
			'react/jsx-boolean-value': ['warn', 'never'],
			'react/jsx-key': 'off',
			'react/jsx-no-bind': ['warn', {
				ignoreRefs: true,
				allowArrowFunctions: false,
				allowBind: false
			}],
			'react/jsx-no-comment-textnodes': 'warn',
			'react/jsx-no-duplicate-props': 'warn',
			'react/jsx-no-target-blank': 'warn',
			'react/jsx-no-undef': 'warn',
			'react/jsx-pascal-case': 'warn',
			'react/jsx-uses-react': 'off',
			'react/jsx-uses-vars': 'warn',

			// babel plugin https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin
			'@babel/new-cap': ['error', {
				newIsCap: true,
				capIsNew: false
			}],
			'@babel/no-unused-expressions': 'warn',

			// enact plugin https://github.com/enactjs/eslint-plugin-enact/
			'enact/no-module-exports-import': 'error'
		}
	},
	{
		// Typescript
		files: ['**/*.ts?(x)'],
		languageOptions: {
			ecmaVersion: 2018,
			sourceType: 'module',
			parser: typescriptParser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				},
				warnOnUnsupportedTypeScriptVersion: true
			}
		},
		plugins: {
			'@typescript-eslint': typescriptEslintPlugin
		},
		rules: {
			// Unneeded options covered by Typescript plugin
			'default-case': 'off',
			'no-dupe-class-members': 'off',
			'no-undef': 'off',

			// Typescript rules
			'@typescript-eslint/consistent-type-assertions': 'warn',
			'no-array-constructor': 'off',
			'@typescript-eslint/no-array-constructor': 'warn',
			'no-shadow': 'off',
			'@typescript-eslint/no-shadow': 'warn',
			'no-use-before-define': 'off',
			'@typescript-eslint/no-use-before-define': ['warn', {
				functions: false,
				classes: false,
				variables: false,
				typedefs: false
			}],
			'no-unused-expressions': 'off',
			'@typescript-eslint/no-unused-expressions': ['error', {
				allowShortCircuit: true,
				allowTernary: true,
				allowTaggedTemplates: true
			}],
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': ['warn', {
				args: 'none',
				ignoreRestSiblings: true
			}],
			'no-useless-constructor': 'off',
			'@typescript-eslint/no-useless-constructor': 'warn'
		}
	},
	{
		// Jest unit tests
		files: [
			'**/__tests__/**/*.{js,jsx,ts,tsx}',
			'**/*.+(spec|test).{js,jsx,ts,tsx}',
			'**/*-specs.{js,jsx,ts,tsx}',
			'**/*setupTests.{js,jsx,ts,tsx}'
		],
		plugins: {
			jest: eslintPluginJest,
			'testing-library': eslintPluginTestingLibrary
		},
		ignores: ['tests/screenshot/**/*', 'tests/ui/**/*'],
		languageOptions: {
			globals: {
				...eslintPluginJest.environments.globals.globals
			}
		},
		rules: {
			// Arrow functions can simplify tests
			'react/jsx-no-bind': 'off',

			// jest plugin https://github.com/jest-community/eslint-plugin-jest
			'jest/no-conditional-expect': 'warn',
			'jest/no-identical-title': 'warn',
			'jest/valid-describe-callback': 'warn',
			'jest/valid-expect': 'warn',
			'jest/valid-expect-in-promise': 'warn',
			'jest/valid-title': 'warn',

			// testing library plugin https://github.com/testing-library/eslint-plugin-testing-library
			'testing-library/await-async-queries': 'error',
			'testing-library/await-async-utils': 'error',
			'testing-library/no-await-sync-queries': 'warn',
			'testing-library/no-dom-import': ['error', 'react'],
			'testing-library/no-container': 'warn',
			'testing-library/no-debugging-utils': 'warn',
			'testing-library/no-promise-in-fire-event': 'warn',
			'testing-library/no-render-in-lifecycle': 'warn',
			'testing-library/no-unnecessary-act': 'warn',
			'testing-library/no-wait-for-multiple-assertions': 'warn',
			'testing-library/no-wait-for-side-effects': 'warn',
			'testing-library/no-wait-for-snapshot': 'error',
			'testing-library/prefer-find-by': 'warn',
			'testing-library/prefer-presence-queries': 'warn',
			'testing-library/prefer-query-by-disappearance': 'warn',
			'testing-library/prefer-screen-queries': 'error',
			'testing-library/render-result-naming-convention': 'warn'
		}
	},
	{
		// WDIO mocha ui & screenshot tests
		files: [
			'**/tests/screenshot/**/*', '**/tests/ui/**/*'
		],
		languageOptions: {
			globals: {
				...globals.mocha,
				...customTestsGlobals
			}
		},
		rules: {
			// Arrow functions can simplify tests
			'react/jsx-no-bind': 'off'
		}
	}
];

module.exports = basicConfig;
