// Strips TypeScript expression wrappers (`as`, `satisfies`, `!`, `<T>x`) and optional chains, mirroring
// `unwrap` from @eslint-react/ast.
const wrappers = new Set([
	'ChainExpression',
	'TSAsExpression',
	'TSInstantiationExpression',
	'TSNonNullExpression',
	'TSSatisfiesExpression',
	'TSTypeAssertion'
]);

module.exports = function unwrap (node) {
	while (node && wrappers.has(node.type)) {
		node = node.expression;
	}
	return node;
};
