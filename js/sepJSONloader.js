console.log("JSONloader.js");

var Chatty = (function(loadJSON) {

	Chatty.loadMessages = function(pull) {	

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

		for(let i = 0; i < 5; i++) {

			let theURL = "../json/message" + i + ".json"
			console.log("theURL", theURL);
			messageRequest.open("GET", theURL);
			messageRequest.send();

		}

		return pull;
	};

	Chatty.loadMessages();

	return loadJSON;

})(Chatty || {});