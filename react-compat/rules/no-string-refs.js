// Port of the JSX part of eslint-plugin-react `no-string-refs` (https://github.com/jsx-eslint/eslint-plugin-react, MIT).
// The `this.refs` check of the original is not ported: string refs are not supported since React 19.
module.exports = {
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallow using string references'
		},
		schema: [{
			type: 'object',
			properties: {
				noTemplateLiterals: {type: 'boolean'}
			},
			additionalProperties: false
		}],
		messages: {
			stringInRefDeprecated: 'Using string literals in ref attributes is deprecated.'
		}
	},
	create (context) {
		const {noTemplateLiterals = false} = context.options[0] || {};

		const isString = (value) => {
			if (value?.type === 'Literal') return typeof value.value === 'string';

			if (value?.type === 'JSXExpressionContainer') {
				const {expression} = value;
				return (expression.type === 'Literal' && typeof expression.value === 'string') ||
					(expression.type === 'TemplateLiteral' && noTemplateLiterals);
			}

			return false;
		};

		return {
			JSXAttribute (node) {
				if (node.name.type === 'JSXIdentifier' && node.name.name === 'ref' && isString(node.value)) {
					context.report({node, messageId: 'stringInRefDeprecated'});
				}
			}
		};
	}
};
