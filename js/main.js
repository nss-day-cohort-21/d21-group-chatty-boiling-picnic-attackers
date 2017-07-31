var Chatty = (function () {
	let messagesArr = [];
	let messageFrame = document.getElementById('message-frame');
	let messageInput = document.getElementById('message-input');

	messageInput.addEventListener('keyup', function(e){
		if (e.which === 13) {
			Chatty.getInput();
			Chatty.writeToPage();
		}
	});

	return {
		getInput: function() {
			let input = messageInput.value;
			messagesArr.push(input);
			console.log("messagesArr", messagesArr);
		},
		writeToPage: function () {
			messageInput.value = '';
			let newP = document.createElement('p');
			newP.classList.add('message');
			newP.innerText = messagesArr[messagesArr.length - 1];
			messageFrame.appendChild(newP);
		}
	};
} ());

