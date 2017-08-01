console.log("message_delete.js");

var Chatty = (function(messageDelete) {
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

	return messageDelete;

})(Chatty || {});