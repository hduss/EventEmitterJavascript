function EventEmitter() {
	
	this.events = {};


}



EventEmitter.prototype.on(label, funtion) {}

EventEmitter.prototype.off(label, funtion) {}

EventEmitter.prototype.emit(label, data) {}