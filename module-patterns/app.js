// return a function
var greet = require('./greet1');
greet();

// return an object, attached the function
var greet2 = require('./greet2');
greet2.greet();

// return my own object, replacing the original object
var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Hello changed greeting';
// the firt time returned object has been cached
// greet3b will point to the same object, the greet3
var greet3b = require('./greet3');
greet3.greet();  // Hello changed greeting

// return the function constructor and creat object manually
var greet4 = require('./greet4');
var grtr = new greet4();
grtr.greet();

// only return the methods to exports, hide the variables
var greet5 = require('./greet5').greet;
greet5();

