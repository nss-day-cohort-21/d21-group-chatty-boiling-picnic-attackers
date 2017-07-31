let messageInput = document.getElementById('message-input');

var Chatty = (function () {
	let messagesArr = [];

	return {
		getInput: function() {
			let input = messageInput.value;
			messagesArr.push(input);
			console.log("messagesArr", messagesArr);
		}
	};
} ());

messageInput.addEventListener('keyup', function(e){
	if (e.which === 13) {
		Chatty.getInput();
	}
});