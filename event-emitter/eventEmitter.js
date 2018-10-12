/**
 * A simple Event Emitter
 * 
 * Author: Colin
 */
function Emitter() {
    this.events = {};
}

// listener: code that respond to the event
Emitter.prototype.on = function(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type) {
    if(this.events[type]) {
        this.events[type].forEach(function(listener){
            listener();
        });
    }
}

module.exports = Emitter;