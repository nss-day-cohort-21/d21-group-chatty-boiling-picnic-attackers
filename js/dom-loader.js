'use strict';
var Chatty = (function(obj){
	// 1. specify how data is loaded onto the page, this function gets passed back to data loader
	obj.writeToPage = function(data) {
		let $messageFrame = $('#message-frame');
		for (let i = 0; i < data.length; i++) {
			let $newMessage = $('<p>', {'class': 'message'});
			$newMessage.text(data[i].message);
			$messageFrame.append($newMessage);

		}
	};
	return obj;

}(Chatty || {}));
