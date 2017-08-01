console.log("message_delete.js");

var Chatty = (function(messageDelete) {

	messageDelete.deleteFromArray = function(arrayInput, messageId) {
		console.log("messageId:", messageId, "arrayInput:", arrayInput);

	};

	return messageDelete;

})(Chatty || {});