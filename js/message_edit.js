var Chatty = (function(messageEdit) {

	messageEdit.sendTextToInput = function(arrayInput, messageId) {
		let returnFromEdit = {};

		arrayReturned = arrayInput.filter(function( obj ) {
  			return obj.id == messageId;
			});
		document.getElementById("message-input").value = arrayReturned[0].message;

		returnFromEdit.messageType = "messageEdit";
		returnFromEdit.messageId = messageId;


		return returnFromEdit
	};

	return messageEdit;

})(Chatty || {});