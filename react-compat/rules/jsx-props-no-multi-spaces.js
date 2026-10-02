// Port of eslint-plugin-react `jsx-props-no-multi-spaces` (https://github.com/jsx-eslint/eslint-plugin-react, MIT).
// @stylistic deprecated its copy in favor of the general `no-multi-spaces` rule and logs a deprecation warning on
// every run when it is enabled.
module.exports = {
	meta: {
		type: 'layout',
		docs: {
			description: 'Disallow multiple spaces between inline JSX props'
		},
		fixable: 'code',
		schema: [],
		messages: {
			noLineGap: 'Expected no line gap between “{{prop1}}” and “{{prop2}}”',
			onlyOneSpace: 'Expected only one space between “{{prop1}}” and “{{prop2}}”'
		}
	},
	create (context) {
		const {sourceCode} = context;

		const getPropName = (node) => {
			switch (node.type) {
				case 'JSXSpreadAttribute':
					return sourceCode.getText(node.argument);
				case 'JSXIdentifier':
					return node.name;
				case 'JSXMemberExpression':
					return `${getPropName(node.object)}.${node.property.name}`;
				default:
					return node.name ? node.name.name : `${sourceCode.getText(node.object)}.${node.property.name}`;
			}
		};

		// `first` and `second` must be adjacent nodes
		const hasEmptyLines = (first, second) => {
			const nodes = [first, ...sourceCode.getCommentsBefore(second), second];

			for (let i = 1; i < nodes.length; i++) {
				if (nodes[i].loc.start.line - nodes[i - 1].loc.end.line >= 2) {
					return true;
				}
			}

			return false;
		};

		const checkSpacing = (prev, node) => {
			const data = {prop1: getPropName(prev), prop2: getPropName(node)};

			if (hasEmptyLines(prev, node)) {
				context.report({node, messageId: 'noLineGap', data});
			}

			if (prev.loc.end.line !== node.loc.end.line) return;

			if (sourceCode.text.slice(prev.range[1], node.range[0]) !== ' ') {
				context.report({
					node,
					messageId: 'onlyOneSpace',
					data,
					fix: fixer => fixer.replaceTextRange([prev.range[1], node.range[0]], ' ')
				});
			}
		};

		// The element name, extended to include TypeScript type arguments (`<A<T> ...>`) like the original rule
		const getNameNode = (node) => {
			const typeArguments = node.typeArguments || node.typeParameters;

			if (typeArguments?.type === 'TSTypeParameterInstantiation') {
				return {...node, range: [node.name.range[0], typeArguments.range[1]]};
			}

			return node.name;
		};

		return {
			JSXOpeningElement (node) {
				node.attributes.reduce((prev, prop) => {
					checkSpacing(prev, prop);
					return prop;
				}, getNameNode(node));
			}
		};
	}
};
