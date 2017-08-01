console.log("message_edit.js");

var Chatty = (function(messageEdit) {

	messageEdit.sendTextToInput = function(arrayInput, messageId) {
		// messageFrame = document.getElementById("message-frame");;
		console.log("arrayInput", arrayInput, "messageId", messageId)
		// console.log("arrayInput.id", arrayInput.id);

		arrayReturned = arrayInput.filter(function( obj ) {
  			return obj.id == messageId;
			});

		console.log("arrayReturned", arrayReturned);
		console.log("arrayReturned[0].message after selection", arrayReturned[0].message);
		document.getElementById("message-input").value = arrayReturned[0].message;

		let messageType = "messageEdit";

			// arrayInput = arrayInput.filter(function( obj ) {
  	// 		return obj.id != messageId;
			// });

			// console.log("result", result);

		// arrayInput.splice(messageId, 1); 
		// messageFrame.removeChild(nodeToDelete);
		// console.log("arrayInput after delete:", arrayInput);

		return messageType;
	};

	return messageEdit;

})(Chatty || {});