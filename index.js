'use strict';

var fizzbuzz = require('./src/fizzbuzz.js');

var counter = 1;

for (counter; counter <= 100; counter++) {
  console.log(fizzbuzz(counter));
}
