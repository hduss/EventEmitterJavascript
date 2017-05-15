

function User(username) {

	//heritage
	EventEmitter.call(this);

	this.username = username;
}

//heritage de la classe Observable cat le model est un observable
User.prototype = Object.create(EventEmitter.prototype);
User.prototype.constructor = User;



User.prototype.setUsername = function(username) {

	this.username = username;


	this.emit('changed', {

		username: username
	});



}