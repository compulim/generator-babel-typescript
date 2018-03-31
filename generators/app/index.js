'use strict';
const _ = require('lodash');
const askName = require('inquirer-npm-name');
const chalk = require('chalk');
const Generator = require('yeoman-generator');
const path = require('path');
const yosay = require('yosay');

module.exports = class extends Generator {
  initializing() {
    this.props = {};
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the beautiful ${ chalk.red('generator-babel-typescript') } generator!`)
    );

    return askName(
      {
        name: 'name',
        message: 'Your package name',
        default: _.kebabCase(path.basename(process.cwd()))
      },
      this
    ).then(props => {
      this.props.name = props.name;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath(),
      this.destinationPath(),
      { globOptions: { dot: true } }
    );

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      this.props
    );
  }

  install() {
    this.installDependencies({ bower: false });
  }
};
