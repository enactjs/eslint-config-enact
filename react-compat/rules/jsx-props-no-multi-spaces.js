// Port of eslint-plugin-react `jsx-props-no-multi-spaces`. @stylistic deprecated its copy in favor of the
// general `no-multi-spaces` rule and logs a deprecation warning on every run when it is enabled.
module.exports = {
	meta: {
		type: 'layout',
		docs: {
			description: 'Disallow multiple spaces between inline JSX props'
		},
		fixable: 'code',
		schema: [],
		messages: {
			noLineGap: 'Expected no line gap between `{{prop1}}` and `{{prop2}}`',
			onlyOneSpace: 'Expected only one space between `{{prop1}}` and `{{prop2}}`'
		}
	},
	create (context) {
		const {sourceCode} = context;

		const getName = node => {
			switch (node.type) {
				case 'JSXAttribute': return sourceCode.getText(node.name);
				case 'JSXSpreadAttribute': return sourceCode.getText(node.argument);
				default: return sourceCode.getText(node); // element name or type arguments
			}
		};

		const check = (prev, node) => {
			const between = sourceCode.getTokensBetween(prev, node, {includeComments: true});
			if (between.length) return;

			const data = {prop1: getName(prev), prop2: getName(node)};

			if (prev.loc.end.line !== node.loc.start.line) {
				if (node.loc.start.line - prev.loc.end.line > 1) {
					context.report({node, messageId: 'noLineGap', data});
				}
			} else if (node.range[0] - prev.range[1] > 1) {
				context.report({
					node,
					messageId: 'onlyOneSpace',
					data,
					fix: fixer => fixer.replaceTextRange([prev.range[1], node.range[0]], ' ')
				});
			}
		};

		return {
			JSXOpeningElement (node) {
				const nodes = [node.typeArguments || node.typeParameters || node.name, ...node.attributes].filter(Boolean);
				for (let i = 1; i < nodes.length; i++) {
					check(nodes[i - 1], nodes[i]);
				}
			}
		};
	}
};
