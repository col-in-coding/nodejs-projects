// Custom Event Emitter
// var Emitter = require('./eventEmitter');

// Internal Event Emitter
var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function(){
    console.log('Somewhere, someone say hello');
});

emtr.on(eventConfig.GREET, function(){
    console.log('A greeting ocurred!!');
});

emtr.emit(eventConfig.GREET);