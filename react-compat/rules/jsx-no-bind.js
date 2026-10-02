// Port of eslint-plugin-react `jsx-no-bind` (https://github.com/jsx-eslint/eslint-plugin-react, MIT), limited to the
// options used by Enact. Like the original, it reports inline functions and `.bind()` calls as well as `const`
// variables and function declarations holding them that are declared in a block and passed to a JSX prop.
const unwrap = require('../unwrap');

module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallow `.bind()`, arrow functions and functions in JSX props'
		},
		schema: [{
			type: 'object',
			properties: {
				ignoreRefs: {type: 'boolean'}
			},
			additionalProperties: false
		}],
		messages: {
			arrowFunc: 'JSX props should not use arrow functions',
			bindCall: 'JSX props should not use .bind()',
			func: 'JSX props should not use functions'
		}
	},
	create (context) {
		const {ignoreRefs = false} = context.options[0] || {};
		const {sourceCode} = context;

		// Names of variables pointing to a violation, per block statement
		const blockNames = new WeakMap();

		const getViolationType = (node) => {
			node = unwrap(node);

			if (!node) return null;

			switch (node.type) {
				case 'ArrowFunctionExpression':
					return 'arrowFunc';
				case 'FunctionExpression':
				case 'FunctionDeclaration':
					return 'func';
				case 'ConditionalExpression':
					return getViolationType(node.test) || getViolationType(node.consequent) || getViolationType(node.alternate);
				case 'CallExpression': {
					const callee = unwrap(node.callee);
					if (callee.type === 'MemberExpression' && callee.property.type === 'Identifier' && callee.property.name === 'bind') {
						return 'bindCall';
					}
					return null;
				}
				default:
					return null;
			}
		};

		const getBlockAncestors = node => sourceCode.getAncestors(node).filter(({type}) => type === 'BlockStatement').reverse();

		const addName = (node, name, type) => {
			const [block] = getBlockAncestors(node);
			if (block && name && type) {
				blockNames.get(block).set(name, type);
			}
		};

		return {
			BlockStatement (node) {
				blockNames.set(node, new Map());
			},

			FunctionDeclaration (node) {
				addName(node, node.id?.name, getViolationType(node));
			},

			VariableDeclarator (node) {
				// Only `const` is supported, like the original rule
				if (node.init && node.parent.kind === 'const' && node.id.type === 'Identifier') {
					addName(node, node.id.name, getViolationType(node.init));
				}
			},

			JSXAttribute (node) {
				if (node.value?.type !== 'JSXExpressionContainer') return;
				if (ignoreRefs && node.name.type === 'JSXIdentifier' && node.name.name === 'ref') return;

				const value = unwrap(node.value.expression);

				if (value.type === 'Identifier') {
					for (const block of getBlockAncestors(node)) {
						const type = blockNames.get(block)?.get(value.name);
						if (type) {
							context.report({node, messageId: type});
							return;
						}
					}
					return;
				}

				const type = getViolationType(value);
				if (type) {
					context.report({node, messageId: type});
				}
			}
		};
	}
};
