function EventEmitter() {
	
	this.events = {};

}



EventEmitter.prototype.on = function(eventName, fn) {

	if (typeof fn !== 'function' || typeof eventName !== 'string') return;

	// si l'event n'existe pas, on le creer 
	this.events[eventName] = this.events[eventName] || [];

	this.events[eventName].push(fn);
}

EventEmitter.prototype.off(eventName, fn) {

	// on verifie que l'event existe, si il n'existe pas on ne fait rien 
	if (!this.events[eventName]) return;

	// on parcours les fonctions de l'event
	for (var i = 0; i < this.events.length; i++) {

		//si une de ses fonctions vaut fn
		if (this.events[eventName][i] === fn) {

			//alors on supprime l'event
			this.events[eventName].splice(i, 1);

			// puis on stoppe la boucle quand on le trouve
			break;
		};
	};

	
}

EventEmitter.prototype.emit(eventName, data) {

	// verifie si l'event existe
	if (this.events[eventName]) return;

	//s'il existe, execute les functions associées
	// on parcours les functions de l'event
	this.events[eventName].forEach(function(fn) {

		// on les execute avaec comme parametre les data de emit 
		fn(data);	

	});

}