console.log("JSONloader.js");

var Chatty = (function(loadJSON) {

	loadJSON.loadMessages = function(pull) {	

		let messageRequest = new XMLHttpRequest();

		messageRequest.addEventListener("load", messageRequestComplete);
		messageRequest.addEventListener("error", messageRequestFailed);

		let loadedMessages;
		let objectHolder;
		let messageHolder = [];
		let i = 0;
		let theURL = "../json/message" + i + ".json"

		console.log("this happens right before requestMessage");

		requestMessage();

		function messageRequestComplete(event) {
			
			if (event.target.status === 200) {
				console.log("message loaded successfully");
				console.log(theURL)
				loadedMessages = JSON.parse(event.target.responseText);
				console.log("loadedMessages", loadedMessages);
				console.log(loadedMessages[0]);
				// objectHolder = loadedMessages[0];
				messageHolder.push(loadedMessages[0]);
				console.log("messageHolder", messageHolder);
				i++;
				theURL = "../json/message" + i + ".json"
				requestMessage();
			} else if (event.target.status === 404) {
				console.log("404 triggered")
				Chatty.addExistingMessages(messageHolder);
			}
		}

		function messageRequestFailed(event) {
			console.log("dataFailed", event);
		}

		// messageRequest.open("GET", theURL);

		function requestMessage() {
			console.log("requestMessage triggered");
			messageRequest.open("GET", theURL);
			messageRequest.send();
		}

		return pull;
	};

	Chatty.loadMessages();

	return loadJSON;

})(Chatty || {});