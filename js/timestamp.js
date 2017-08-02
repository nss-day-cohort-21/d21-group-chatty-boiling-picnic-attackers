var Chatty = (function(obj) {

	obj.getTimestamp = function() {
		let newTime = new Date();
		let month = newTime.getMonth();
		let date = newTime.getDate();
		let year = newTime.getFullYear();
		let hour = newTime.getHours();
		let minutes = newTime.getMinutes();

		if (hour > 12) {
			hour = hour - 12;
		}

		if (minutes < 10) {
			minutes = '0' + minutes.toString();
		}

		return (month + 1) + '/' + date + '/' + year + ' ' + hour + ':' + minutes;
	};

	return obj;
} (Chatty || {}));