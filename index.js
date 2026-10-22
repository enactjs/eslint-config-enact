const path = require('path');
const babelEslintPlugin = require('@babel/eslint-plugin');
const babelEslintParser = require('@babel/eslint-parser');
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const eslint = require('@eslint/js');
const eslintPluginEnact = require('eslint-plugin-enact');
const eslintPluginJest = require('eslint-plugin-jest');
const eslintPluginJsxA11y = require('eslint-plugin-jsx-a11y-x');
const eslintPluginReactHooks = require('eslint-plugin-react-hooks');
const eslintPluginTestingLibrary = require('eslint-plugin-testing-library');
const stylisticEslintPlugin = require('@stylistic/eslint-plugin');
const globals = require('globals');

// TODO: remove together with @eslint-react/eslint-plugin once eslint-plugin-react supports ESLint 10
// (see the TODO at the React rules below).
// @eslint-react/eslint-plugin is ESM-only and its package `exports` only defines an `import` condition,
// so a bare `require()` fails with ERR_PACKAGE_PATH_NOT_EXPORTED. Resolve the entry file directly and let
// Node's require(esm) load it (supported by all Node versions in `engines`).
const eslintReactDir = path.dirname(require.resolve('@eslint-react/eslint-plugin/package.json'));
const eslintReactPlugin = require(path.join(eslintReactDir, 'dist', 'index.js')).default;

// Wraps @babel/eslint-parser so ESLint performs its own scope analysis.
//
// The scope manager built by @babel/eslint-parser does not track JSX references, so components used only in
// JSX were reported by `no-unused-vars` and `no-useless-assignment`. ESLint 10 tracks JSX references natively
// when the parser does not provide a scope manager. Babel's scope manager only adds handling for Flow/TS type
// annotations and decorators, which are not enabled for the files parsed here.
const babelParser = {
	meta: {
		name: 'eslint-config-enact/babel-parser'
	},
	parseForESLint (code, options) {
		// eslint-disable-next-line no-unused-vars
		const {scopeManager, ...result} = babelEslintParser.parseForESLint(code, options);
		return result;
	}
};

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
				// Linting only needs to parse, so enable the non-standard syntax babel-preset-enact supports in .js
				// files instead of loading the preset (its Babel 7 plugins cannot run on @babel/eslint-parser 8).
				// Decorators are only enabled for TypeScript, which is parsed by @typescript-eslint/parser.
				babelOptions: {
					babelrc: false,
					configFile: false,
					parserOpts: {
						plugins: ['jsx', 'exportDefaultFrom']
					}
				}
			}
		},
		linterOptions: {
			reportUnusedDisableDirectives: "off"
		},
		plugins: {
			'@babel': babelEslintPlugin.default,
			'@eslint-react': eslintReactPlugin,
			'@stylistic': stylisticEslintPlugin,
			'jsx-a11y': eslintPluginJsxA11y.default,
			enact: eslintPluginEnact,
			'react-hooks': eslintPluginReactHooks
		},
		settings: {
			'react-x': {
				version: 'detect' // React version, default to the latest React stable release
			}
		},
		rules: {
			...eslintPluginReactHooks.configs.flat.recommended.rules,
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
			'new-parens': 'warn',
			'no-floating-decimal': 'warn',
			'no-trailing-spaces': 'warn',
			'wrap-iife': ['error', 'inside'],

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

			// TODO: switch back to eslint-plugin-react once a release supports ESLint 10
			// ESLint React https://eslint-react.xyz
			// Replaces eslint-plugin-react, which does not support ESLint 10. Rule names follow
			// https://eslint-react.xyz/docs/migrating-from-eslint-plugin-react
			'@eslint-react/dom-no-dangerously-set-innerhtml': 'warn',
			'@eslint-react/dom-no-dangerously-set-innerhtml-with-children': 'error',
			'@eslint-react/dom-no-find-dom-node': 'warn',
			'@eslint-react/dom-no-render-return-value': 'warn',
			'@eslint-react/dom-no-unknown-property': 'warn',
			'@eslint-react/dom-no-unsafe-target-blank': 'warn',
			'@eslint-react/jsx-no-children-prop': 'warn',
			'@eslint-react/jsx-no-comment-textnodes': 'warn',
			'@eslint-react/no-access-state-in-setstate': 'warn',
			'@eslint-react/no-direct-mutation-state': 'warn',
			'@eslint-react/no-set-state-in-component-did-mount': 'warn',
			'@eslint-react/no-set-state-in-component-did-update': 'warn',

			// replacements for eslint-plugin-react `no-deprecated`
			'@eslint-react/dom-no-hydrate': 'warn',
			'@eslint-react/dom-no-render': 'warn',
			'@eslint-react/no-component-will-mount': 'warn',
			'@eslint-react/no-component-will-receive-props': 'warn',
			'@eslint-react/no-component-will-update': 'warn',

			// @stylistic plugin https://eslint.style
			'@stylistic/jsx-pascal-case': 'warn',
			'@stylistic/jsx-self-closing-comp': 'warn',

			// eslint-plugin-react rules without a replacement in ESLint React or @stylistic, provided by eslint-plugin-enact
			'enact/jsx-boolean-value': ['warn', 'never'],
			'enact/jsx-no-bind': ['warn', {
				ignoreRefs: true
			}],
			'enact/jsx-no-duplicate-props': 'warn',

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
			'enact/jsx-no-bind': 'off',

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
			'enact/jsx-no-bind': 'off'
		}
	}
];

module.exports = basicConfig;
