'use strict';

const chalk = require('chalk');

module.exports = function (version) {
  version = version ? 'v' + version : '';
  return `          ${chalk.red(`__   __`)}\n` +
    ` ${chalk.red(`_ _  __ _\\ \\./ /`)} ${chalk.blue(`____ ____ ____ _  _ ____ ___`)}\n` +
    `${chalk.red(`| ' \\/ _\` |>   <`)}  ${chalk.blue(`|--< [__] |___ |-:_ |===  |`)}\n` +
    `${chalk.red(`|_||_\\__, /_/°\\_\\`)} ENTERPRISE APP STARTER ${chalk.yellow(`-~`)}${chalk.red(`*`)}${chalk.blue(`=>`)}\n` +
    `     ${chalk.red('|___/')} ${version}\n`;
};
