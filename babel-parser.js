// Wraps @babel/eslint-parser so ESLint performs its own scope analysis.
//
// The scope manager built by @babel/eslint-parser does not track JSX references, so components used only in
// JSX were reported by `no-unused-vars` and `no-useless-assignment`. ESLint 10 tracks JSX references natively
// when the parser does not provide a scope manager. Babel's scope manager only adds handling for Flow/TS type
// annotations and decorators, which are not enabled for the files parsed here.
const babelParser = require('@babel/eslint-parser');

module.exports = {
	meta: {
		name: 'eslint-config-enact/babel-parser'
	},
	parseForESLint (code, options) {
		// eslint-disable-next-line no-unused-vars
		const {scopeManager, ...result} = babelParser.parseForESLint(code, options);
		return result;
	}
};
