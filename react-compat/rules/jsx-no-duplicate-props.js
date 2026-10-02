// Port of eslint-plugin-react `jsx-no-duplicate-props` (https://github.com/jsx-eslint/eslint-plugin-react, MIT).
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
			noDuplicateProps: 'No duplicate props allowed'
		}
	},
	create (context) {
		const {ignoreCase = false} = context.options[0] || {};

		return {
			JSXOpeningElement (node) {
				const seen = new Set();

				for (const attr of node.attributes) {
					// Namespaced names (`a:b`) are ignored, like the original rule
					if (attr.type !== 'JSXAttribute' || typeof attr.name.name !== 'string') continue;

					const name = ignoreCase ? attr.name.name.toLowerCase() : attr.name.name;

					if (seen.has(name)) {
						context.report({node: attr, messageId: 'noDuplicateProps'});
					} else {
						seen.add(name);
					}
				}
			}
		};
	}
};
