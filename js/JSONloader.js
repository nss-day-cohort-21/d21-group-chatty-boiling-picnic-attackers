console.log("JSONloader.js");

var Chatty = (function(loadJSON) {

	let messageRequest = new XMLHttpRequest();

	messageRequest.addEventListener("load", messageRequestComplete);
	messageRequest.addEventListener("error", messageRequestFailed);


	function messageRequestComplete(event) {
		console.log("messages loaded successfully");
		let loadedMessages = JSON.parse(event.target.responseText);
		console.log("loadedMessages", loadedMessages);
	}

	function messageRequestFailed(event) {
		console.log("dataFailed", event);
	}

	messageRequest.open("GET", "../js/messages.json");
	messageRequest.send();

	return loadJSON;

})(Chatty || {});