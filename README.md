# Boilerplate-Javascript-Library
[![Maintenance Status][status-image]][status-url] [![NPM version][npm-image]][npm-url] [![Travis build][travis-image]][travis-url]

A boilerplate for a generic javascript library which compiles for use as an ES6 module or UMD (for legacy apps)  
Webpack / Babel / Jest / Sass

# Requirements
1) node > 6.0.0
2) yarn (or npm latest) > 0.10.0

# Installation
```bash
yarn install
```

# Usage

### ES6
```javascript
// Import with ES6 
import { getOutput, Module } from 'boilerplate-javascript-library'

// Static function
const staticFunction = getOutput('Hello', 'World')

// Create new instance of class
const instance = new Module()
const classFunction = instance.get('Hello', 'World')
```

### UMD
```javascript
// Imported to global object
var instance, output

// Static function with default param
output = BoilerplateJavascriptLibrary.getOutput('Hello', 'World')

// Static function with parameter
output = BoilerplateJavascriptLibrary.getOutput('Hello', 'World', ', ')

// Class with default constructor parameter
instance = new BoilerplateJavascriptLibrary.Module()
output = instance.get('Hello', 'World')

// Class with constructor parameter
instance = new BoilerplateJavascriptLibrary.Module(', ')
output = instance.get('Hello', 'World')
```

# Development
```bash
# Development
yarn start
```

# Testing
```bash
# Run test normal
yarn test

# Run only updated tests with watch
yarn run test:dev

# Run all tests with watch
yarn run test:all 
```

# Releasing
```bash
# Compile ES6
yarn run compile:es6

# Compile UMD
yarn run compile:umd

# Compile examples
yarn run compile:examples

# Create new versioned release
yarn run release
```
Documentation for release library
https://github.com/conventional-changelog/standard-version

Commit message format
https://conventionalcommits.org/

# Documentation
### TODO create API documentation... jsdoc??

# Examples
You can see the legacy UMD module in use in examples/index.html

# Contributors
[Colin Gagnon][admin]

[admin]: https://github.com/colingagnon

[status-image]: https://img.shields.io/badge/status-maintained-brightgreen.svg
[status-url]: https://github.com/techcoop/boilerplate-javascript-library

[npm-image]: https://img.shields.io/npm/v/boilerplate-javascript-library.svg
[npm-url]: https://www.npmjs.com/package/boilerplate-javascript-library

[travis-image]: https://travis-ci.org/techcoop/boilerplate-javascript-library.svg?branch=master
[travis-url]: https://travis-ci.org/techcoop/boilerplate-javascript-library

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: https://raw.githubusercontent.com/techcoop/boilerplate-javascript-library/master/LICENSE

