var Chatty = (function(searchURL){

	searchURL.findAndRepURL = function(message) {
		let httpRegex = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
		let wwwRegex = /(^|[^\/f])(www\.[\S]+(\b|$))/gim;
		let textToURL;

			textToURL = message.replace(httpRegex, function(inputURL) {
				return '<a href="' + inputURL + '">' + inputURL + '</a>'
			});

			textToURL = message.replace(wwwRegex, function(inputURL) {
				return '<a href="' + inputURL + '">' + inputURL + '</a>'
			});

		return message;

		};

	return searchURL;

}(Chatty || {}));