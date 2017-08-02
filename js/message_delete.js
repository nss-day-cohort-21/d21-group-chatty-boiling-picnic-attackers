var Chatty = (function(messageDelete) {

	messageDelete.deleteFromArrayAndDom = function(arrayInput, messageId, nodeToDelete) {

			arrayInput = arrayInput.filter(function( obj ) {
  			return obj.id != messageId;
			});
		return arrayInput;
	};

	return messageDelete;

})(Chatty || {});