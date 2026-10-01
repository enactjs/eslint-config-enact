// Adapted from the `jsx-no-duplicate-props` recipe in the ESLint React migration guide:
// https://eslint-react.xyz/docs/migrating-from-eslint-plugin-react#jsx-no-duplicate-props
module.exports = {
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallow duplicate properties in JSX elements'
		},
		schema: [{
			type: 'object',
			properties: {
				ignoreCase: {type: 'boolean'}
			},
			additionalProperties: false
		}],
		messages: {
			duplicate: 'No duplicate props allowed: `{{name}}`'
		}
	},
	create (context) {
		const {ignoreCase = false} = context.options[0] || {};

		return {
			JSXOpeningElement (node) {
				const seen = new Set();

				for (const attr of node.attributes) {
					if (attr.type !== 'JSXAttribute') continue;

					const name = context.sourceCode.getText(attr.name);
					const key = ignoreCase ? name.toLowerCase() : name;

					if (seen.has(key)) {
						context.report({node: attr, messageId: 'duplicate', data: {name}});
					} else {
						seen.add(key);
					}
				}
			}
		};
	}
};
