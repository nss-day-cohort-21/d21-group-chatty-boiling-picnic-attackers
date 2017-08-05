var Chatty = (function() {
	let arr = [];
	return {
		loadData: function(url) {
			$.ajax({
				url: url,
				async: true
			}).done(function(data) {
				arr = data;
				console.log("data loaded", data);
				Chatty.writeToPage(data);
			});
		},
		deleteArrItem: function(id) {
			delete arr[id];
			console.log("arr is", arr);
		}
	}
} ());

$('window').load(Chatty.loadData('../json/messages.json'));
