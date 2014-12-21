// file: tests/name.test.js - created at 2014-12-21, 07:12
var should = require('should');
var corn = require('../');
var nameData = require('../data/name');

describe('name', function () {
  it('should be return all possible combination', function () {
    nameData.should.containEql(corn.name());
  });
});
