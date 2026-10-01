// Adapted from the `no-string-refs` recipe in the ESLint React migration guide:
// https://eslint-react.xyz/docs/migrating-from-eslint-plugin-react#no-string-refs
module.exports = {
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallow string refs'
		},
		schema: [],
		messages: {
			stringRef: 'String refs are not supported. Use `useRef()` or a callback ref instead'
		}
	},
	create (context) {
		return {
			JSXAttribute (node) {
				if (node.name.type !== 'JSXIdentifier' || node.name.name !== 'ref') return;

				const {value} = node;
				const isString = value?.type === 'Literal' ||
					(value?.type === 'JSXExpressionContainer' && value.expression.type === 'TemplateLiteral');

				if (isString) {
					context.report({node, messageId: 'stringRef'});
				}
			}
		};
	}
};
