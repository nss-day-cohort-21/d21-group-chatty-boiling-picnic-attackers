console.log("main.js");

var Chatty = (function () {
	let messageFrame = document.getElementById('message-frame');
	let messageInput = document.getElementById('message-input');
	let messagesArr = [];

	let idCount = messagesArr.length;
	function messagesObj(id, message) {
		this.id = id,
		this.message = message
	};
	messageInput.addEventListener('keyup', function(e){
		if (e.which === 13) {
			Chatty.getInput();
			Chatty.writeToPage();
		}
	});

	return {
		getInput: function() {
			let input = messageInput.value;
			let newMessage = new messagesObj(idCount, input);
			messagesArr.push(newMessage);
			idCount++;
			console.log("messagesArr", messagesArr);
		},
		writeToPage: function () {
			messageInput.value = '';
			let newP = document.createElement('p');
			newP.classList.add('message');
			newP.innerText = messagesArr[messagesArr.length - 1].message;
			messageFrame.appendChild(newP);
		},
    addExistingMessages: function(loadedMessages) {
			loadedMessages.forEach(function(item) {
			messagesArr.push(item);
			});
			console.log("messagesArr", messagesArr);
	};

	
} ());

