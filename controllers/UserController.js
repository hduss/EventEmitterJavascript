
function UserController(user, view) {

	this.model = user;
	this.view = view;

}



UserController.prototype.init = function() {

	this.view.on('change-username', function(data) {

		this.model.setUsername(data.username);
		
	}).bind(this);
}