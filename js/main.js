console.log("main.js");

var Chatty = (function (originalChatty) {
	let messageFrame = document.getElementById('message-frame');
	let messageInput = document.getElementById('message-input');
	let messagesArr = [];
	let clearButton = document.getElementById("clear-board");
	let idCount = 0;

	function messagesObj(id, message,timestamp) {
		this.id = id,
		this.message = message,
		this.timestamp = timestamp
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

	document.querySelector("body").addEventListener("click", function(event) {
		console.log("event", event);
		console.log("event.target", event.target);
		console.log("event.target.className", event.target.className);
		if (event.target.className === "delete-btn") {
			console.log("delete-btn just triggered");
			console.log("event.target.parentElement", event.target.parentElement);
			console.log("event.target.parentElement.id", event.target.parentElement.id);
			nodeToDelete = event.target.parentElement;
			messageId = event.target.parentElement.id;
			messagesArr = Chatty.deleteFromArrayAndDom(messagesArr, messageId, nodeToDelete);
			console.log("this happens after deleteFromArrayAndDom triggered");
			console.log("messagesArr after return from deleteFromArrayAndDom", messagesArr);
		};

	});

	return {
		getInput: function() {
			let input = messageInput.value;
			let timestamp = Date();
			let newMessage = new messagesObj(idCount, input, timestamp);
			messagesArr.push(newMessage);
			idCount++;
			console.log("messagesArr", messagesArr);
		},

		writeToPage: function () {

			let newP = document.createElement('p');
			newP.classList.add('message');
			messageInput.value = '';
			newP.id = messagesArr[messagesArr.length - 1].id;
			newP.innerHTML = `
					${messagesArr[messagesArr.length - 1].message + " " + messagesArr[messagesArr.length - 1].timestamp}
					<input type="button" value="Delete" class="delete-btn">
				`;
			messageFrame.appendChild(newP);
			// newCount += 1;
		  // console.log('newCount', newCount);
			
			// Chatty.deleteMessage();
		},

    	addExistingMessages: function(loadedMessages) {
			loadedMessages.forEach(function(item) {
			messagesArr.push(item);
			Chatty.writeToPage();
			});
			console.log("messagesArr in addExistingMessages", messagesArr);
			idCount = messagesArr.length;
			
			// Chatty.tester(messagesArr);
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

