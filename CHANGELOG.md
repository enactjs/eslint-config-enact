# Change Log

The following is a curated list of changes in the Enact eslint config:

## [4.2.1] (February 27, 2024)

* Updated dependencies.

## [4.2.0] (January 3, 2024)

* Added `@rushstack/eslint-patch` to support eslint shareable config.

## [4.1.8] (December 21, 2023)

* Removed deprecated rule `testing-library/no-wait-for-empty-callback`.
* Renamed `testing-library` rules for Jest unit tests validation:
  * `testing-library/await-async-query` renamed to `testing-library/await-async-queries` 
  * `testing-library/no-await-sync-query` renamed to `testing-library/no-await-sync-queries`
  * `testing-library/no-render-in-setup` renamed to `testing-library/no-render-in-lifecycle`

## [4.1.7] (September 27, 2023)

* Updated `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser` version to `^6.1.0` and the minimum version of Node to `^16.0.0`.

## [4.1.6] (July 4, 2023)

* Fixed support for `ENACT_PACK_NO_ANIMATION` global

## [4.1.5] (May 17, 2023)

* Updated all dependencies to the latest.
* Removed `jest/no-jest-import` rule.
* Updated `eslint-plugin-react` version to `^7.32.2`.

## [4.1.4] (April 6, 2023)

* Updated dependencies.

## [4.1.3] (February 1, 2023)

* Fixed `eslint-plugin-react` version to `7.31.11` temporarily.
* Replaced `babel-preset-react-app` with `babel-preset-enact` to use babel config for Enact.
* Fixed `eslint-plugin-jest` version to `26.x` to fix unexpected lint errors.

## [4.1.2] (August 29, 2022)

* No significant changes.

## [4.1.1] (May 31, 2022)

* Updated the `lockfileVersion` of npm-shrinkwrap file to v2.

## [4.1.0] (May 18, 2022)

* Replaced deprecated `babel-eslint-plugin` with `@babel/eslint-plugin` and related rules.
* Replaced deprecated `no-native-reassign` rule with `no-global-assign`.
* Replaced deprecated `no-negated-in-lhs` rule with `no-unsafe-negation`.
* Removed `babel/quotes` rule.
* Updated glob pattern for searching test files to compatible with windows.
* Added `eslint-plugin-jest` dependency.
* Added `jest` and `testing-library` rules for Jest unit tests validation:
  * `jest/no-conditional-expect` warn
  * `jest/no-identical-title` warn
  * `jest/no-jest-import` warn
  * `jest/valid-describe-callback` warn
  * `jest/valid-expect` warn
  * `jest/valid-expect-in-promise` warn
  * `jest/valid-title` warn
  * `testing-library/no-container` warn
  * `testing-library/no-debugging-utils` warn
  * `testing-library/no-promise-in-fire-event` warn
  * `testing-library/no-render-in-setup` warn
  * `testing-library/no-unnecessary-act` warn
  * `testing-library/no-wait-for-multiple-assertions` warn
  * `testing-library/no-wait-for-side-effects` warn
  * `testing-library/prefer-find-by` warn
  * `testing-library/prefer-presence-queries` warn
  * `testing-library/prefer-query-by-disappearance` warn
  * `testing-library/prefer-screen-queries` error
  * `testing-library/render-result-naming-convention` warn

## [4.0.0] (April 11, 2022)

* Updated all dependencies including ESLint 8.
* Replaced deprecated `babel-eslint` with `@babel/eslint-parser`.

## [3.1.3] (February 17, 2022)

* Fixed `@typescript-eslint` peerDependency to support `4.x` version.

## [3.1.2] (December 28, 2021)

* Updated dependencies.

## [3.1.1] (October 13, 2021)

* Added `eslint-plugin-testing-library` as a peerDependency.

## [3.1.0] (October 12, 2021)

* Added `testing-library` rules for Jest unit tests validation:
  * `testing-library/await-async-query` error
  * `testing-library/await-async-utils` error
  * `testing-library/no-await-sync-query` warning
  * `testing-library/no-dom-import` [error, react]
  * `testing-library/no-wait-for-empty-callback` error
  * `testing-library/no-wait-for-snapshot` error

## [3.0.1] (March 25, 2021)

* Fixed the glob patterns for test files.

## [3.0.0] (February 5, 2021)

* Removed deprecated `jsx-a11y/accessible-emoji` rule.
* Updated React version to 17 and `@typescript-eslint` related modules to `4.x`.
* Turned `react/jsx-uses-react` and `react/react-in-jsx-scope` off to support the new JSX transform with React 17.

## [2.0.0]

* All dependencies have been updated and 2.0.0 of this config package is now designed for ESLint 6, 7 and later.
* Added `jsx-a11y` rules for base-level accessibility validation:
  * `jsx-a11y/accessible-emoji` warning
  * `jsx-a11y/alt-text` warning
  * `jsx-a11y/anchor-has-content` warning
  * `jsx-a11y/anchor-is-valid` warning
  * `jsx-a11y/aria-activedescendant-has-tabindex` warning
  * `jsx-a11y/aria-props` warning
  * `jsx-a11y/aria-proptypes` warning
  * `jsx-a11y/aria-role` warning
  * `jsx-a11y/aria-unsupported-elements` warning
  * `jsx-a11y/heading-has-content` warning
  * `jsx-a11y/iframe-has-title` warning
  * `jsx-a11y/img-redundant-alt` warning
  * `jsx-a11y/no-access-key` warning
  * `jsx-a11y/no-distracting-elements` warning
  * `jsx-a11y/no-redundant-roles` warning
  * `jsx-a11y/role-has-required-aria-props` warning
  * `jsx-a11y/role-supports-aria-props` warning
  * `jsx-a11y/scope` warning
* Added override sections for Jest unit tests and WDIO ui/screenshot tests, with appropriate environment setup and `react/jsx-no-bind` disabled for testing convenience.
* Added optional `@typescript-eslint` rules for Typescript filetype validation (disabling built-in equivalent rules as needed):
  * `@typescript-eslint/consistent-type-assertions` warning
  * `@typescript-eslint/no-array-constructor` warning
  * `@typescript-eslint/no-use-before-define` warning
  * `@typescript-eslint/no-unused-expressions` error
  * `@typescript-eslint/no-unused-vars` warning
  * `@typescript-eslint/no-useless-constructor` warning
* Changed from the built-in `new-cap` and `no-unused-expressions` rules to the `babel/*` equivalents for greater ECMAScript compatibility.
* Changed React version setting from `15.0` to `detect` to auto-detect the correct value.
* Updated `react/forbid-foreign-prop-types` to a warning, as a safety for `babel-plugin-transform-react-remove-prop-types` tooling support.
* Strict: Added optional `@typescript-eslint` rules for Typescript filetype validation (disabling built-in equivalent rules as needed):
  * `@typescript-eslint/no-array-constructor` error
  * `@typescript-eslint/no-use-before-define` error
* Strict: Changed from the built-in `quotes` and `semi` rules to the `babel/*` equivalents for greater ECMAScript compatibility.
* Strict: Changed `max-nested-callbacks` and `enact/prop-types` off for test files, as they are not applicable for those files.
* Strict: Removed `jest/no-focused-tests` and replaced it with an equivalent `no-restricted-properties` rule for `describe.only`, `test.only` and `it.only`, applied exclusively to test files.


## [1.6.0]

* Updated ECMAScript support to ES2018
* Updated ESLint Enact plugin peerDependency to support version `0.2.0`

## [1.5.0]

* Added `react-hooks/exhaustive-deps` warning
* Added `react-hooks/rules-of-hooks` error

## [1.4.1]

* Strict: Added `jest/no-focused-tests` error

## [1.4.0]

* Updated `camelcase` rule to allow for `^UNSAFE_` react lifecycle methods
* Strict: Updated `camelcase` rule to allow for `^UNSAFE_` react lifecycle methods

## [1.3.0]

* Added support for `jest` globals and removed `mocha` globals.

## [1.2.1]

* Fixed support for `process` global

## [1.2.0]

* Added `react/no-access-state-in-setstate` warning
* Strict: Added `react/jsx-props-no-multi-spaces` warning
* Strict: Added `react/forbid-foreign-prop-types` warning
* Strict: Added `react/no-this-in-sfc` warning
* Strict: Added `react/jsx-sort-default-props` warning
* Strict: Added `react/no-access-state-in-setstate` warning

## [1.1.9]

* Updated copyright for 2018
* Update github references for new repo location

## [1.1.8]

* Default: Allow nested ternary (still warning in strict)
* Strict: Added `no-useless-escape` warning
* Strict: Added `react/default-props-match-prop-types` warning
* Strict: Optimized indentation rules

## [1.1.7]

* Removed deprecated `react/jsx-space-before-closing` rule

## [1.1.6]

* Added `enact/no-module-exports-import` rule

## [1.1.5]

* Strict: Added `react/void-dom-elements-no-children`

## [1.1.4]

* Default: Disabled `no-spaced-func` and `no-undefined` warnings

## [1.1.3]

* Basic documentation added

## [1.1.2]

* Replaced deprecated `babel/array-bracket-spacing` with `array-bracket-spacing`
* Strict: Added `react/jsx-tag-spacing` to enforce proper jsx tag spacing
* Strict: Added `react/sort-comp` to enforce order of component methods
* Strict: Added `jsx-quotes` to enforce double quotes in jsx

## [1.1.1]

* Strict: Disabled `valid-jsdoc` warning as it was causing more troubles than it was solving

## [1.1.0]

* Initial release with default and strict mode
