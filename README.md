Get started by installing required dependencies.  For more information (including editor/IDE setup), please see the [docs](docs/index.md).

# Required Dependencies

ESLint, and some of the support modules, must be available globally for editors.  Install these dependencies with the following command:

>**NOTE**: Using the [`enct-dev` tools](https://github.com/enyojs/enact-dev/) to create your projects eliminates the need to globally install these dependencies.

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

Some Linux installations may require the use of `sudo`, though we recommend updating your installation to not require this.  If your Mac OS X installation requires this, you should definitely reinstall node.  Consider using [nvm](https://github.com/creationix/nvm) or another similar tool to manage your node installation.

>**NOTE**: You may see the following warnings, which you can safely ignore:

```bash
npm WARN eslint-config-enact@1.0.0 requires a peer of eslint@^2.10.2 but none was installed.
npm WARN eslint-config-enact@1.0.0 requires a peer of eslint-plugin-react@^5.1.1 but none was installed.
npm WARN eslint-config-enact@1.0.0 requires a peer of eslint-plugin-babel@^3.2.0 but none was installed.
```