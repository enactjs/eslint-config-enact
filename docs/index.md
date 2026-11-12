---
title: eslint-config-enact Linting Configuration
---

The Enact team recommends all developers use ESLint to statically analyze files for potential errors and to help enforce a common coding style.  To that end, we developed an [ESLint configuration](https://github.com/enactjs/eslint-config-enact) that encapsulates Enact programming conventions.  Most modern editors have support for displaying linter errors in-line with source code.  This can be very helpful during development.  The configuration offers two flavors: strict and regular.

This document describes how to use the Enact ESLint configuration and how to set up ESLint with various editors.

## Analyzing Your Code

### Command Line

If you use the `cli` tools to create your project, `npm run lint` will run the Enact configuration of ESLint for syntax analysis.

If you want to switch to the strict version of the linting rules, modify your `package.json` file and change the following line:

```json
    "lint": "enact lint",
```

to read:

```json
    "lint": "enact lint --strict",
```

The `enact lint` command always uses the Enact ESLint configuration bundled with the `cli` tools, so it does not need an ESLint configuration file in the project. To lint with the project's own `eslint.config.js` instead, use `enact lint --local`.

If you are not using the `cli` tools, create an `eslint.config.js` file in the project's root (see [In-editor](#in-editor) below) and run `eslint .`.

### In-editor

This section describes the procedure for setting up several popular editors.

You would need to install an ESLint plugin for your editor first.

ESLint only loads configs and plugins from the project, not from global installations.
To still support in-editor linting with the Enact ESLint config bundled with the `cli` tools, we've created the [eslint-config-enact-proxy](https://github.com/enactjs/eslint-config-enact-proxy) package.
It acts like a small proxy config, which finds the globally-installed Enact ESLint config (from `@enact/cli` or a global `eslint-config-enact`) and exports it.
`eslint-config-enact-proxy` needs to be installed locally on a project to enable in-editor linting:

```sh
npm install --save-dev eslint-config-enact-proxy
```

`eslint` is a peer dependency of `eslint-config-enact-proxy`, so npm (7 or later) also installs ESLint itself into the project's `node_modules`.  Editors use this local ESLint automatically, while the rules, plugins and parsers still come from the globally-installed `@enact/cli`, so they stay in sync with `enact lint`.  With Yarn 1, which does not install peer dependencies, also run `yarn add --dev eslint`.

Then, create an `eslint.config.js` file in the project's root:

```js
module.exports = require('eslint-config-enact-proxy');
```

>**NOTE**: For strict mode, use `require('eslint-config-enact-proxy/strict')`. If your `package.json` has `"type": "module"`, use `export {default} from 'eslint-config-enact-proxy';` instead.

To add project-specific settings, spread the proxy config into your own config array:

```js
const enactConfig = require('eslint-config-enact-proxy/strict');

module.exports = [
	...enactConfig,
	{
		ignores: ['docs/']
	}
];
```

>**NOTE**: `eslint-config-enact-proxy` 2.x requires ESLint 10 or later. Configuration through `.eslintrc` files or the `eslintConfig` property in `package.json` is no longer supported by ESLint.

With `eslint-config-enact-proxy` and `eslint` installed in the project, the editors below find ESLint and `eslint.config.js` automatically, so only the ESLint plugin for your editor is needed.  Jump to the section relevant to your editor.

If ESLint is not installed in the project, you can point your editor to the ESLint bundled with the `cli` tools instead (see the *Without a local ESLint* notes below).  Run `npm root -g` to find the global `node_modules` directory (`<global>` in the examples below, for example `C:/Users/<user>/AppData/Roaming/npm/node_modules` on Windows or `/usr/local/lib/node_modules` on macOS and Linux):

* ESLint package: `<global>/@enact/cli/node_modules/eslint`
* ESLint executable: `<global>/@enact/cli/node_modules/.bin/eslint` (`eslint.cmd` on Windows)

>**NOTE**: If you happen to have in-editor linting set up already using JSHint or another tool, be sure to disable it as older linters sometimes get confused with newer ES6+ syntax and will not take advantage of the Enact linting rules.

##### Visual Studio Code

Install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) (`dbaeumer.vscode-eslint`, version 3 or later).  More information on linters and Visual Studio Code can be found [here](https://code.visualstudio.com/docs/languages/javascript#_linters).

The extension uses the `eslint` package installed in the project, so no settings are needed.  With ESLint 10 or later, the extension always uses flat config, so `eslint.useFlatConfig` does not need to be set.  JavaScript, JSX, TypeScript and TSX files are linted by default.  If problems are not shown, open the *Output* panel and select *ESLint* to see which ESLint package was loaded and any configuration errors.

*Without a local ESLint*: open *File* > *Preferences* > *Settings* (*Code* > *Settings* > *Settings* on macOS), switch to the JSON view and add the following, so the extension uses the ESLint bundled with the `cli` tools:

```json
"eslint.nodePath": "<global>/@enact/cli/node_modules"
```

>**NOTE**: Use forward slashes (`/`) or escaped backslashes (`\\`) for Windows paths in JSON.

##### WebStorm

These steps also apply to other JetBrains IDEs, such as IntelliJ IDEA Ultimate.

Open *File* > *Settings* (*WebStorm* > *Settings* on macOS) and go to *Languages & Frameworks* > *JavaScript* > *Code Quality Tools* > *ESLint*.  The setting is saved per project; to apply it to all new projects, use *File* > *New Projects Setup*.

Select *Automatic ESLint configuration*.  WebStorm then uses the ESLint package in the project's `node_modules` and the nearest `eslint.config.js`.

*Without a local ESLint*: select *Manual ESLint configuration* and set *ESLint package* to `<global>/@enact/cli/node_modules/eslint` (or to the globally-installed `eslint`).  Leave *Configuration File* set to *Automatic search* and *Working directories* empty.

Optionally, check *Run eslint --fix on save*.  After changing these settings or updating `@enact/cli`, run the *Stop and Autorun ESLint Service as Needed* action (*Help* > *Find Action*) to reload ESLint.

##### Sublime Text

Install [SublimeLinter](https://www.sublimelinter.com/) and the [SublimeLinter-eslint](https://github.com/SublimeLinter/SublimeLinter-eslint) plugin with [Package Control](https://packagecontrol.io/).

The plugin uses the `eslint` executable installed in the project, so no settings are needed.

*Without a local ESLint*: open *Preferences* > *Package Settings* > *SublimeLinter* > *Settings* and add:

```json
{
	"linters": {
		"eslint": {
			"executable": "<global>/@enact/cli/node_modules/.bin/eslint",
			"selector": "source.js, source.jsx, source.ts, source.tsx - meta.attribute-with-value"
		}
	}
}
```

>**NOTE**: On Windows, use `eslint.cmd` as the executable.  Setting `executable` limits linting to JavaScript files unless `selector` is also set.

##### Vim and Neovim

[Syntastic](https://github.com/vim-syntastic/syntastic) is no longer maintained, so we recommend its successor [ALE](https://github.com/dense-analysis/ale), which lints as you type.  After installing ALE, enable ESLint in your `.vimrc` (or `init.vim`):

```vimscript
let g:ale_linters = {'javascript': ['eslint'], 'typescript': ['eslint']}
let g:ale_fixers = {'javascript': ['eslint'], 'typescript': ['eslint']}
```

ALE uses the `eslint` executable installed in the project, so no other settings are needed.

*Without a local ESLint*, add:

```vimscript
let g:ale_javascript_eslint_executable = '<global>/@enact/cli/node_modules/.bin/eslint'
let g:ale_javascript_eslint_use_global = 1
```

>**NOTE**: The TypeScript ESLint linter in ALE uses the same `g:ale_javascript_eslint_*` options.  On Windows, use `eslint.cmd` as the executable.

##### Atom

Atom was [retired by GitHub](https://github.blog/open-source/git/sunsetting-atom/) in December 2022 and is no longer maintained.  Please switch to one of the editors above.

#### Troubleshooting

If in-editor linting is not working in your local project, be sure that:

* `eslint-config-enact-proxy` is installed locally and `eslint.config.js` is set up as described above.
* ESLint 10 or later is installed in the project's `node_modules` (run `npm ls eslint`), or your editor is pointed to another ESLint 10 or later package as described above.
* `@enact/cli` (or `eslint-config-enact`) is installed globally. If the proxy cannot find it, ESLint reports an error that starts with `eslint-config-enact-proxy: Unable to find "eslint-config-enact"`.
* You restarted the editor's ESLint service (or the editor) after installing or updating `@enact/cli`, `eslint-config-enact-proxy` or `eslint.config.js`.
