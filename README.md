# :rocket: ngx-rocket/ascii-logo

[![NPM version](https://img.shields.io/npm/v/@ngx-rocket/ascii-logo.svg)](https://www.npmjs.com/package/@ngx-rocket/ascii-logo)
[![Build status](https://img.shields.io/travis/ngx-rocket/ascii-logo/master.svg)](https://travis-ci.org/ngx-rocket/ascii-logo)
![Node version](https://img.shields.io/badge/node-%3E%3D6.0.0-brightgreen.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

> Super-awesome ngX-Rocket ASCII logo

![screenshot](https://cloud.githubusercontent.com/assets/593151/25958791/fcbfd5dc-3671-11e7-8a2d-5d618cb7e883.png)

## Installation

```bash
npm install -g @ngx-rocket/ascii-logo
```

### Usage

```javascript
const asciiLogo = require('@ngx-rocket/ascii-logo');
const pkg =  require('./package.json');

asciiLogo.show(pkg.version);
```
