

function UserView(user) {

	//heritage
	EventEmitter.call(this);

	this.model = user;

	this.init();

}


//heritage de la classe eventEmitter
UserView.prototype = Object.create(EventEmitter.prototype);
UserView.prototype.constructor = UserView;



UserView.prototype.init = function() {

	// on selectionne le formulaire // on fait un onsubmit
	document.querySelector('#change-username').onsubmit = (function(e) {
		
		e.preventDefault();



		this.emit('change-username', { 

			username: document.querySelector('#username').value 

		});



	}).bind(this);


	this.model.on('changed', function(data) {

		console.log(data);

		document.getElementById('show-username').innerText = data.username;

	});




}