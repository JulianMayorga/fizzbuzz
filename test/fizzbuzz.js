'use strict';

var fizzbuzz = require('../src/fizzbuzz.js');
var should = require('should');

describe('FizzBuzz', function () {
  it('should print the numbers 1 to 100', function () {
    fizzbuzz(1).should.equal(1);
    fizzbuzz(2).should.equal(2);
  });
  it('should print fizz instead of multiples of three', function () {
    fizzbuzz(3).should.equal('fizz');
    fizzbuzz(6).should.equal('fizz');
  });
  it('should print buzz instead of multiples of five', function () {
    fizzbuzz(5).should.equal('buzz');
    fizzbuzz(10).should.equal('buzz');
  });
  it('should print fizzbuzz instead of multiples of five and three', function () {
    fizzbuzz(15).should.equal('fizzbuzz');
  });
});
