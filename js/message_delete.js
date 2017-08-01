console.log("message_delete.js");

var Chatty = (function(messageDelete) {

	messageDelete.deleteFromArray = function(arrayInput, messageId) {
		console.log("messageId:", messageId, "arrayInput:", arrayInput);
		arrayInput.splice(messageId,1);

		for(var i = arrayInput.length - 1; i >= 0; i--) {
    if(arrayInput[i] === messageId) {
       arr.splice(i, 1);
    }
}

	};

	return messageDelete;

})(Chatty || {});