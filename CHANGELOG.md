# Change Log

The following is a curated list of changes in the Enact eslint config:

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
