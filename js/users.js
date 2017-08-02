var Chatty = (function(obj){
	obj.getUser = function () {
		let checked;
		//select all radios
		let radios = document.getElementsByClassName('radio');
		//find radio that is checked
		for (let i = 0; i < radios.length; i++) {
			if (radios[i].checked) {
				checked = radios[i].id;  //get name of radio that is checked
			}
		}
		//return name to Chatty.getInput();
		return checked;
	};
	return obj;
}(Chatty || {}));