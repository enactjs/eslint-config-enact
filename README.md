## Installation

Currently not available as an npm module so manual install is necessary. For global usage, install all dependencies globally:

```bash
npm install -g eslint eslint-plugin-react eslint-plugin-babel babel-eslint
git clone git@github.com:enactjs/eslint-config-enact.git
cd eslint-config-enact
npm link
```

*NOTE*: You may see the following warnings, which you can safely ignore:

```
npm WARN eslint-config-enact@1.0.0 requires a peer of eslint@^2.10.2 but none was installed.
npm WARN eslint-config-enact@1.0.0 requires a peer of eslint-plugin-react@^5.1.1 but none was installed.
npm WARN eslint-config-enact@1.0.0 requires a peer of eslint-plugin-babel@^3.2.0 but none was installed.
```

## Setting up an `.eslintrc` file

For global usage, create an `.eslintrc` file in your home directory with the following contents:

```javascript
{
  "extends": "enact",
  "env": {
    "browser": false,
    "node": true,
    "es6": true
  }
}
```

For local usage, add the `.eslintrc` file into the root of your project.

## Editor Integration

For best effect, add linting to your code editor.

#### Vim

To use eslint for Vim, first install (Syntastic)[https://github.com/scrooloose/syntastic] and then enable the eslint option.


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

Unfortunately, Syntastic does not support real-time linting and only lints of save.

Note: You may also wish to install (vim-jsx)[https://github.com/mxw/vim-jsx] as well.

#### Sublime

TODO
