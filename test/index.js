const asciiLogo = require('..');
const pkg = require('../package.json');

console.log(asciiLogo());
console.log(asciiLogo(pkg.version));
console.log(asciiLogo(pkg.version, 'Hello world!'));
