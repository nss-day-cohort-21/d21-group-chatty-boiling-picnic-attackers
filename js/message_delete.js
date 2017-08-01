console.log("message_delete.js");

var Chatty = (function(messageDelete) {

	messageDelete.deleteFromArrayAndDom = function(arrayInput, messageId, nodeToDelete) {
		// messageFrame = document.getElementById("message-frame");
		console.log("messageId:", messageId, "nodeToDelete", nodeToDelete, "arrayInput:", arrayInput);
		console.log("arrayInput.id", arrayInput.id);

			arrayInput = arrayInput.filter(function( obj ) {
  			return obj.id != messageId;
			});

			// console.log("result", result);

		// arrayInput.splice(messageId, 1); 
		// messageFrame.removeChild(nodeToDelete);
		console.log("arrayInput after delete:", arrayInput);

		return arrayInput;
	};

	return messageDelete;

})(Chatty || {});