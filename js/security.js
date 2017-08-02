var Chatty = (function(obj){
	let search = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

	obj.testForScript = function(message) {
		if (search.test(message)) {
			alert('<script> tags are not allowed.');
			return '';
		} else {
			return message;
		}
	};
	return obj;
}(Chatty || {}));