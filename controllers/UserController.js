
function UserController(user, view) {

	this.model = user;
	this.view = view;

	this.init();

}



UserController.prototype.init = function() {

	this.view.on('change-username', (function(data) {
		console.log('hello');

		this.model.setUsername(data.username);

	}).bind(this));
}