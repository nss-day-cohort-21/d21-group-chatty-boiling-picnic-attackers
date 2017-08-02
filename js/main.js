var Chatty = (function () {
	let messageFrame = document.getElementById('message-frame');
	let messageInput = document.getElementById('message-input');
	let messagesArr = [];
	let clearButton = document.getElementById("clear-board");
	let idCount = 0;
	let messageType = "messageNew";
	let messageEditId = 0;

	function messagesObj(pic, user, id, message,timestamp) {
		this.pic = pic
		this.user = user,
		this.id = id,
		this.message = message,
		this.timestamp = timestamp
	};

	messageInput.addEventListener('keyup', function(e){
		if (e.which === 13 && messageType === "messageNew") {
			Chatty.getInput();
			Chatty.writeToPage();
		} else if (e.which === 13 && returnFromEdit.messageType === "messageEdit") {

			messagesArr.forEach(function(obj) {
				console.log("obj.id", obj.id, "obj.message", obj.message);
				if (obj.id == messageEditId) {
					obj.message = messageInput.value;
				}
			});

			messageType = "messageNew";
			Chatty.writeToPage();
		}
	});


	clearButton.addEventListener("click", function() {
		Chatty.clearAll();
	});

	document.querySelector("body").addEventListener("click", function(event) {
		if (event.target.className === "delete-btn") {
			nodeToDelete = event.target.parentElement;
			messageId = event.target.parentElement.id;
			messagesArr = Chatty.deleteFromArrayAndDom(messagesArr, messageId, nodeToDelete);
			Chatty.writeToPage();
		};
		return messagesArr;
	});

	document.querySelector("body").addEventListener("click", function(event) {
		if (event.target.className === "edit-btn") {
			messageId = event.target.parentElement.id;
			returnFromEdit = Chatty.sendTextToInput(messagesArr, messageId);
			messageType = returnFromEdit.messageType;
			messageEditId = returnFromEdit.messageId;
		};
	});

	return {
		getInput: function() {
			let pic = Chatty.getUserPic(Chatty.getUser()); //attach profile image to message
			let user = Chatty.getUser();//insert name of user here
			let input = Chatty.testForScript(messageInput.value);  //messageInput.value;   //check if message is valid
			let timestamp = Date();
			if (input !== '') {
				let newMessage = new messagesObj(pic, user, idCount, input, timestamp);
				messagesArr.push(newMessage);
				idCount++;
			}
		},

		writeToPage: function () {
			messageFrame.innerHTML = ``;
			if (messagesArr.length > 20) {
				for (var i = (messagesArr.length - 20); i < messagesArr.length; i++) {
					let newP = document.createElement('p');
					newP.classList.add('message');
					messageInput.value = '';
					newP.id = messagesArr[i].id;
					newP.innerHTML = `
						<img src="${messagesArr[i].pic}" alt="${messagesArr[i].user}">
						<strong>${messagesArr[i].user}</strong><br>
						${messagesArr[i].message + " " + messagesArr[i].timestamp}
						<input type="button" value="Delete" class="delete-btn">
						<input type="button" value="Edit" class="edit-btn">
						`;
					messageFrame.appendChild(newP);
				}
			} else {
				messagesArr.forEach(function (arrayElement) {
					console.log("element.id", arrayElement.id);
					console.log("element.message", arrayElement.message);
					let newP = document.createElement('p');
					newP.classList.add('message');
					messageInput.value = '';
					newP.id = arrayElement.id;
					newP.innerHTML = `
							<img src="${arrayElement.pic}" alt="${arrayElement.user}">
							<strong>${arrayElement.user}: </strong><br>${arrayElement.message + " " + arrayElement.timestamp}
							<input type="button" value="Delete" class="delete-btn">
							<input type="button" value="Edit" class="edit-btn">
						`;
					messageFrame.appendChild(newP);
				});
			}
		},

    	addExistingMessages: function(loadedMessages) {
			loadedMessages.forEach(function(item) {
			messagesArr.push(item);
			});
			Chatty.writeToPage();
			idCount = messagesArr.length;
			// Chatty.tester(messagesArr);
		},

		clearAll : function () {
			messagesArr = [];
			messageFrame.innerHTML = ``;
		}

	};




} ());

