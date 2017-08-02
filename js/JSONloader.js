var Chatty = (function(loadJSON) {

	loadJSON.loadMessages = function(pull) {

		let messageRequest = new XMLHttpRequest();

		messageRequest.addEventListener("load", messageRequestComplete);
		messageRequest.addEventListener("error", messageRequestFailed);


		function messageRequestComplete(event) {
			console.log("messages loaded successfully");
			let loadedMessages = JSON.parse(event.target.responseText);
			console.log("loadedMessages", loadedMessages);
			Chatty.addExistingMessages(loadedMessages);
		}

		function messageRequestFailed(event) {
			console.log("dataFailed", event);
		}

		messageRequest.open("GET", "../js/messages.json");
		messageRequest.send();

		return pull;
	};

	Chatty.loadMessages();

	return loadJSON;

})(Chatty || {});