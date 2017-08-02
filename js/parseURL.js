var Chatty = (function(searchURL){

	searchURL.findAndRepURL = function(message) {
		let httpRegex = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
		let wwwRegex = /(^|[^\/f])(www\.[\S]+(\b|$))/gim;

			message = message.replace(httpRegex, function(inputURL) {
				inputURL = inputURL.replace(/ /g, "");
				let convertedText = ' <a href="' + inputURL + '"">' + inputURL + '</a> ';
				return convertedText;
			});

			message = message.replace(wwwRegex, function(inputURL) {
				inputURL = inputURL.replace(/ /g, "");
				let convertedText = ' <a href="http://' + inputURL + '">' + inputURL + '</a> ';
				return convertedText;
			});

		return message;

		};

	return searchURL;

}(Chatty || {}));