console.log("main.js");

var Chatty = (function (originalChatty) {
	let messageFrame = document.getElementById('message-frame');
	let messageInput = document.getElementById('message-input');
	let messagesArr = [];
	let clearButton = document.getElementById("clear-board");
	
	// let idCount = messagesArr.length;

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

	clearButton.addEventListener("click", function() {
		Chatty.clearAll();
	});

	return {
		getInput: function() {
			let idCount = messagesArr.length;
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
			let delBtn = document.createElement('input');
			delBtn.type = "button";
			delBtn.value = "delete";
			messageFrame.appendChild(delBtn);
		},

    	addExistingMessages: function(loadedMessages) {
			loadedMessages.forEach(function(item) {
			messagesArr.push(item);
			Chatty.writeToPage();
			});
			console.log("messagesArr", messagesArr);
		},

		delMessage: function(){

		},

		clearAll : function () {
			console.log("clearAll button clicked");
			console.log("messagesArr before clear", messagesArr);
			messagesArr = [];
			console.log("messagesArr after clear", messagesArr);
			messageFrame.innerHTML = ``;
		}
	};

	
} ());

