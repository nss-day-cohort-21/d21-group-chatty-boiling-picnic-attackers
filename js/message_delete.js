console.log("message_delete.js");

var Chatty = (function(messageDelete) {

	

	let clearButton = document.getElementById("clear-board");
	clearButton.addEventListener("click", function() {
		Chatty.clearAll();
	})




	return messageDelete;

})(Chatty || {});