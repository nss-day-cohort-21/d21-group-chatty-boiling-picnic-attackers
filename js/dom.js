var Chatty = (function(obj) {
	obj.writeToPage = function(data) {
		for (let i = 0; i < data.length; i++) {
			let $message = $('<p>', {'id': data[i].id});
			let $delBtn = $('<button>');
			$delBtn.text('Delete');
			$delBtn.attr('class', 'delete');
			$message.text(data[i].message);
			$message.append($delBtn);
			$('#message-frame').append($message);
		}
		$('.delete').click(function() {
				let p = this.parentNode;
				Chatty.deleteArrItem(p.id);
				p.remove();
			});
	};
	return obj;
}(Chatty || {}));

