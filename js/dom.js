var Chatty = (function(obj) {
	obj.writeToPage = function(data) {
		for (let i = 0; i < data.length; i++) {
			console.log("data in loop is ", data);
			let $message = $('<p>', {'class': 'message'});
			let $delBtn = $('<button>');
			$delBtn.text('Delete');
			$message.text(data[i].message);
			$message.append($delBtn);
			$('#message-frame').append($message);
		}
	};
	return obj;
}(Chatty || {}));