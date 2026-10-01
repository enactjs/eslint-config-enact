// Adapted from the `jsx-boolean-value` recipe in the ESLint React migration guide:
// https://eslint-react.xyz/docs/migrating-from-eslint-plugin-react#jsx-boolean-value
// Only the `never` mode (the one Enact uses) is supported.
const unwrap = require('../unwrap');

module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Enforce shorthand for `true` JSX attribute values'
		},
		fixable: 'code',
		schema: [{enum: ['never']}],
		messages: {
			omitValue: 'Value must be omitted for boolean attribute `{{name}}`'
		}
	},
	create (context) {
		return {
			JSXAttribute (node) {
				const {value} = node;
				if (value?.type !== 'JSXExpressionContainer') return;

				const expr = unwrap(value.expression);
				if (expr.type !== 'Literal' || expr.value !== true) return;

				context.report({
					node,
					messageId: 'omitValue',
					data: {name: context.sourceCode.getText(node.name)},
					fix: fixer => fixer.removeRange([node.name.range[1], value.range[1]])
				});
			}
		};
	}
};
