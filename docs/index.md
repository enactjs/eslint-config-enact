---
title: eslint-config-enact Linting Configuration
---

The Enact team recommends all developers use ESLint to statically analyze files for potential errors and to help enforce a common coding style.  To that end, we developed an [ESLint configuration](https://github.com/enactjs/eslint-config-enact) that encapsulates Enact programming conventions.  Most modern editors have support for displaying linter errors in-line with source code.  This can be very helpful during development.  The configuration offers two flavors: strict and regular.

This document describes how to use the Enact ESLint configuration and how to set up ESLint with various editors.

## Analyzing Your Code

### Command Line

If you use the `cli` tools to create your project, `npm run lint` will run the Enact configuration of ESLint for syntax analysis.

If you want to switch to the strict version of the linting rules, modify your `package.json` file and change the following lines:

```json
    "lint": "enact lint",
...
  "eslintConfig": {
    "extends": "enact"
  },
```

to read:

```json
    "lint": "enact lint --framework",
...
  "eslintConfig": {
    "extends": "enact/strict"
  },
```

If you are not using the `cli` tools, you can create (or modify) an `.eslintrc` in the project's root and run `eslint .`:

```json
{
  "extends": "enact"
}
```
>**NOTE**: For strict mode, use `"extends": "enact/strict"`.

If you like our linting rules and want to use them by default you can create the `.eslintrc` file in your HOME directory instead.

### In-editor

This section describes the procedure for setting up several popular editors.

Before setting up in-editor linting, be sure to install this config and its dependencies globally using the following command:

```bash
npm install -g eslint eslint-plugin-react eslint-plugin-babel babel-eslint eslint-plugin-enact eslint-config-enact
```

Each editor requires a slightly different setup.  Jump to the section relevant to your editor.

>**NOTE**: If you happen to have in-editor linting set up already using JSHint or another tool, be sure to disable it as older linters sometimes get confused with newer ES6+ syntax and will not take advantage of the Enact linting rules.

##### Atom

From the shell/command prompt, issue the following command to install [linter-eslint](https://github.com/AtomLinter/linter-eslint):

```bash
apm install linter-eslint
```

After the installation go to *Preferences*, then click on *Packages*. Navigate down to *linter-eslint* and click *Settings*. Make sure that the *Use global ESLint installation* option is checked and that you have correctly configured the path to the node installation within Atom.

##### Sublime Text

Install the [SublimeLinter-eslint plugin](https://github.com/roadhump/SublimeLinter-eslint), which depends on [SublimeLinter 3](http://sublimelinter.readthedocs.org/en/latest/installation.html).

##### Vim

First install [Syntastic](https://github.com/scrooloose/syntastic) and then enable the eslint option:

```vimscript
" syntastic
let g:syntastic_javascript_checkers = ['eslint']
let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 0
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0
let g:syntastic_mode_map = {
        \ "mode": "active",
        \ "active_filetypes": ["javascript"]}
```

Unfortunately, Syntastic does not support real-time linting and only lints on save/load.

> **NOTE**: You may also wish to install [vim-jsx](https://github.com/mxw/vim-jsx) as well.

##### Visual Studio Code

Install the [vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) plugin.  More information on linters and Visual Studio Code can be found [here](https://code.visualstudio.com/docs/languages/javascript#_linters).

##### WebStorm

In either the default or per-project preferences, go to *Languages & Frameworks* > *JavaScript* > *Code Quality* > *ESLint*.
Check the *Enable* checkbox.  Ensure that the proper paths for `node` and `eslint` are configured.

#### Troubleshooting

If in-editor linting is not working in your local project, be sure you set up `package.json` or `.eslintrc` as described above.
