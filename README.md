# Linting with ESLint

The Enact team recommends all developers use ESLint to statically analyze files for potential errors and to help enforce a common coding style.  To that end, we developed an ESLint plugin that encapsulates Enact programming conventions.  Most modern editors have support for displaying linter errors in-line with source code.  This can be very helpful during development.  This document describes how to set up ESLint with various editors.

## Installing Dependencies

ESLint, and some of the support modules, must be available globally for editors.  Install these dependencies with the following command:

```bash
npm install -g eslint eslint-plugin-react eslint-plugin-babel babel-eslint enyojs/eslint-plugin-enact enyojs/eslint-config-enact
```

Or alternatively:

```bash
npm install -g eslint eslint-plugin-react eslint-plugin-babel babel-eslint enyojs/eslint-plugin-enact
git clone git@github.com:enyojs/eslint-config-enact.git
cd eslint-config-enact
npm link
```

> Some Linux installations may require the use of `sudo`, though we recommend updating your installation to not require this.  If your Mac OS X installation requires this, you should definitely reinstall node.  Consider using [nvm](https://github.com/creationix/nvm) or another similar tool to manage your node installation.

<!-- -->
>NOTE: You may see the following warnings, which you can safely ignore:
>
>```npm WARN eslint-config-enact@1.0.0 requires a peer of eslint@^2.10.2 but none was installed.
>npm WARN eslint-config-enact@1.0.0 requires a peer of eslint-plugin-react@^5.1.1 but none was installed.
>npm WARN eslint-config-enact@1.0.0 requires a peer of eslint-plugin-babel@^3.2.0 but none was installed.```


## Setting Up Your Editor

Each editor requires a slightly different setup.  Jump to the section relevant to your editor.

>Note: If you happen to have linting set up already using JSHint or another tool, be sure to disable it as these linters sometimes get confused with newer ES6+ syntax and will not take advantage of the Enact linting rules.

### Atom

From the shell/command prompt, issue the following command to install [linter-eslint](https://github.com/AtomLinter/linter-eslint):

```
apm install linter-eslint
```

After the installation go to *Preferences*, then click on *Packages*. Navigate down to *linter-eslint* and click *Settings*. Make sure that the *Use global ESLint installation* option is checked and that you have correctly configured the path to the node installation within Atom.

### Sublime Text

Install the [SublimeLinter-eslint plugin](https://github.com/roadhump/SublimeLinter-eslint), which depends on [SublimeLinter 3](http://sublimelinter.readthedocs.org/en/latest/installation.html).

### Vim

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

> Note: You may also wish to install [vim-jsx](https://github.com/mxw/vim-jsx) as well.

### Visual Studio Code

Install the [vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) plugin.  More information on linters and Visual Studio Code can be found [here](https://code.visualstudio.com/docs/languages/javascript#_linters).

### WebStorm

In either the default or per-project preferences, go to *Languages & Frameworks* > *JavaScript* > *Code Quality* > *ESLint*.
Check the *Enable* checkbox.  Ensure that the proper paths for `node` and `eslint` are configured.

## Next Steps

If in-editor linting is not working in your local project, you may need to add the following to your `package.json`:

```
{
  // ...
  "eslintConfig": {
    "extends": "enact"
  }
}
```

If you like our linting rules and want to use them by default with your other projects, set up an `.eslintrc` file in your HOME directory as follows:

```
{
  "extends": "enact"
}
```


