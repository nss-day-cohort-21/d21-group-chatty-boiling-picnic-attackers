console.log("message_delete.js");

var Chatty = (function(messageDelete) {
<<<<<<< HEAD
	let deleteBtns = document.getElementsByClassName('delete-btn');
	console.log("deleteBtns", deleteBtns);
	messageDelete.deleteMessage = function() {
		for (let i = 0; i < deleteBtns.length; i++) {
			deleteBtns[i].addEventListener('click', function () {
				let id = this.parentElement.id;
				let deleteItem = document.getElementById(id);
				deleteItem.remove();
			});
		}
	}
=======

	messageDelete.deleteFromArray = function(arrayInput, messageId) {
		console.log("messageId:", messageId, "arrayInput:", arrayInput);

	};
>>>>>>> 56820f488e4107f862bd3a6dd8ecf4175d8586e7

	return messageDelete;

})(Chatty || {});