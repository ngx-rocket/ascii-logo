const asciiLogo = require('..');
const pkg =  require('../package.json');

asciiLogo.show();
asciiLogo.show(pkg.version);
