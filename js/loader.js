var Chatty = (function() {

	return {
		loadData: function(url) {
			$.ajax({
				url: url,
				async: true
			}).done(function(data) {
				console.log("data loaded", data);
				Chatty.writeToPage(data);
			});
		}
	}
} ());

$('window').load(Chatty.loadData('../json/messages.json'));