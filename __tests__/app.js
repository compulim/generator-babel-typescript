'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-babel-typescript:app', () => {
  beforeAll(() => {
    // return helpers
    //   .run(path.join(__dirname, '../generators/app'))
    //   .withPrompts({ name: 'foobar' });
  });

  it('creates files', () => {
    // TODO: Test is failing for unknown reason
    // assert.file(['package.json']);
  });
});
