// Adapted from the `jsx-no-bind` recipe in the ESLint React migration guide:
// https://eslint-react.xyz/docs/migrating-from-eslint-plugin-react#jsx-no-bind
const unwrap = require('../unwrap');

module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallow inline functions and `.bind()` in JSX props'
		},
		schema: [{
			type: 'object',
			properties: {
				ignoreRefs: {type: 'boolean'}
			},
			additionalProperties: false
		}],
		messages: {
			bind: 'JSX props should not use .bind()',
			inline: 'JSX props should not use inline functions'
		}
	},
	create (context) {
		const {ignoreRefs = false} = context.options[0] || {};

		return {
			JSXAttribute (node) {
				if (node.value?.type !== 'JSXExpressionContainer') return;
				if (ignoreRefs && node.name.type === 'JSXIdentifier' && node.name.name === 'ref') return;

				const expr = unwrap(node.value.expression);

				if (expr.type === 'ArrowFunctionExpression' || expr.type === 'FunctionExpression') {
					context.report({node, messageId: 'inline'});
				} else if (expr.type === 'CallExpression') {
					const callee = unwrap(expr.callee);
					if (callee.type === 'MemberExpression' && callee.property.type === 'Identifier' && callee.property.name === 'bind') {
						context.report({node, messageId: 'bind'});
					}
				}
			}
		};
	}
};
