'use strict';
var Chatty = (function(){
	let data = [];
	
	return {
		loadData: function(url) {  // 1. load the data
			$.ajax({
				url: url,
				async: true
			}).done(function(data) {
				//2.  call data to write to the page
				Chatty.writeToPage(data);
			});
		}
	};
}());

$(window).load(Chatty.loadData('../json/messages.json'));

