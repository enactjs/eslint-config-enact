// Compatibility plugin registered under the `react` namespace.
//
// eslint-plugin-react does not run on ESLint 10, so its rules are provided here by their replacements from
// @eslint-react/eslint-plugin and @stylistic/eslint-plugin, keeping the original `react/*` rule names. This
// keeps existing `eslint-disable react/...` comments and `react/...` overrides in app configs working.
// See https://eslint-react.xyz/docs/migrating-from-eslint-plugin-react
const path = require('path');

const stylisticPlugin = require('@stylistic/eslint-plugin');

// @eslint-react/eslint-plugin is ESM-only and its package `exports` only defines an `import` condition,
// so a bare `require()` fails with ERR_PACKAGE_PATH_NOT_EXPORTED. Resolve the entry file directly and let
// Node's require(esm) load it (supported by all Node versions in `engines`).
const eslintReactDir = path.dirname(require.resolve('@eslint-react/eslint-plugin/package.json'));
const eslintReactPlugin = require(path.join(eslintReactDir, 'dist', 'index.js')).default;

const stylistic = (stylisticPlugin.default || stylisticPlugin).rules;
const eslintReact = eslintReactPlugin.rules;

// Rules that only exist so that disable directives and `off` overrides referencing them stay valid.
// They are legacy (class components / propTypes) or covered by ESLint core since v10 (JSX references).
const retired = [
	'default-props-match-prop-types',
	'forbid-foreign-prop-types',
	'jsx-no-undef',
	'jsx-uses-react',
	'jsx-uses-vars',
	'no-deprecated',
	'no-is-mounted',
	'no-this-in-sfc',
	'no-unescaped-entities',
	'prefer-es6-class',
	'prop-types',
	'react-in-jsx-scope',
	'require-render-return',
	'sort-comp',
	'sort-default-props',
	'sort-prop-types'
];

const retiredRule = name => ({
	meta: {
		type: 'suggestion',
		deprecated: true,
		docs: {
			description: `No-op: \`react/${name}\` has no replacement in ESLint React`
		},
		schema: false
	},
	create: () => ({})
});

module.exports = {
	meta: {
		name: 'eslint-config-enact/react-compat'
	},
	rules: {
		// All ESLint React rules under their own names (e.g. `react/no-component-will-mount`)
		...eslintReact,

		// Renamed in ESLint React
		'display-name': eslintReact['no-missing-component-display-name'],
		'jsx-key': eslintReact['no-missing-key'],
		'no-children-prop': eslintReact['jsx-no-children-prop'],
		'no-danger': eslintReact['dom-no-dangerously-set-innerhtml'],
		'no-danger-with-children': eslintReact['dom-no-dangerously-set-innerhtml-with-children'],
		'no-did-mount-set-state': eslintReact['no-set-state-in-component-did-mount'],
		'no-did-update-set-state': eslintReact['no-set-state-in-component-did-update'],
		'no-find-dom-node': eslintReact['dom-no-find-dom-node'],
		'no-render-return-value': eslintReact['dom-no-render-return-value'],
		'no-unknown-property': eslintReact['dom-no-unknown-property'],
		'jsx-no-target-blank': eslintReact['dom-no-unsafe-target-blank'],
		'void-dom-elements-no-children': eslintReact['dom-no-void-elements-with-children'],

		// Moved to @stylistic
		'jsx-closing-bracket-location': stylistic['jsx-closing-bracket-location'],
		'jsx-curly-spacing': stylistic['jsx-curly-spacing'],
		'jsx-equals-spacing': stylistic['jsx-equals-spacing'],
		'jsx-first-prop-new-line': stylistic['jsx-first-prop-new-line'],
		'jsx-indent': stylistic['jsx-indent'],
		'jsx-indent-props': stylistic['jsx-indent-props'],
		'jsx-pascal-case': stylistic['jsx-pascal-case'],
		'jsx-tag-spacing': stylistic['jsx-tag-spacing'],
		'self-closing-comp': stylistic['jsx-self-closing-comp'],

		// Local implementations of rules without a packaged replacement
		'jsx-boolean-value': require('./rules/jsx-boolean-value'),
		'jsx-no-bind': require('./rules/jsx-no-bind'),
		'jsx-no-duplicate-props': require('./rules/jsx-no-duplicate-props'),
		'jsx-props-no-multi-spaces': require('./rules/jsx-props-no-multi-spaces'),
		'no-string-refs': require('./rules/no-string-refs'),

		...Object.fromEntries(retired.map(name => [name, retiredRule(name)]))
	}
};
