#!/usr/bin/env node

const chalk = require('chalk');
const program = require('commander');
const figlet = require('figlet');
const packageJson = require('./package.json');

init(process.argv);

function init(argv) {
  console.log(
    chalk.green(
      figlet.textSync('Malcolm Kee', {
        horizontalLayout: 'full'
      })
    )
  );

  program
    .version(packageJson.version)
    .description(packageJson.description)
    .action(function execute(result) {
      console.log({ result });
    });

  program.parse(argv);
}
