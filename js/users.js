var Chatty = (function(obj){
	let userPics = [
		{
			user: 'Xavier',
			pic: '../img/xavier.jpeg'
		},
		{
			user: 'Joanna',
			pic: '../img/joanna.jpeg'
		},
		{
			user: 'Gunter',
			pic: '../img/gunter.jpeg'
		},
		{
			user: 'Mackenzie',
			pic: '../img/mackenzie.jpeg'
		},
		{
			user: 'Sven',
			pic: '../img/sven.jpeg'
		},
		{
			user: 'Iveta',
			pic: '../img/iveta.jpeg'
		}
	];
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
	obj.getUserPic = function (user) {
		//get index by matching to username in user array
		index = userPics.findIndex(x => x.user === user);
		return userPics[index].pic; //for each index, return corresponding image
	};
	return obj;
}(Chatty || {}));