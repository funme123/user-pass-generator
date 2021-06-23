document.addEventListener('DOMContentLoaded', function () {
	document.getElementById("user-gen").addEventListener("click", user_generator);
});

function user_generator() {
	var nameList = [
		'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
		'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
		'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
		'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
		'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
		'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
		'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
		'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
		'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich',
		'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready',
		'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool',
		'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
	];
	var numbers = "0123456789";
	var username = ""

	if (document.getElementById("user_numbers").checked) {
		if (document.getElementById("user_checkbox").checked) {
			if (document.getElementById("user_number_infront").checked) {
				for (var i = 0; i < document.getElementById("user_num_length").value; i++) {
					username += numbers.charAt(Math.floor(Math.random() * numbers.length));
				}
				username += document.getElementById("user").value;
			} else {
				username = document.getElementById("user").value;
				for (var i = 0; i < document.getElementById("user_num_length").value; i++) {
					username += numbers.charAt(Math.floor(Math.random() * numbers.length));
				}
			}
		} else {
			if (document.getElementById("user_number_infront").checked) {
				for (var i = 0; i < document.getElementById("user_num_length").value; i++) {
					username += numbers.charAt(Math.floor(Math.random() * numbers.length));
				}
				username += nameList[Math.floor(Math.random() * nameList.length)];
				username += nameList[Math.floor(Math.random() * nameList.length)];
			}
			else {
				username = nameList[Math.floor(Math.random() * nameList.length)];
				username += nameList[Math.floor(Math.random() * nameList.length)];
				for (var i = 0; i < document.getElementById("user_num_length").value; i++) {
					username += numbers.charAt(Math.floor(Math.random() * numbers.length));
				}
			}
		}
	} else {
		if (document.getElementById("user_checkbox").checked) {
			username = document.getElementById("user").value;
		}
		else {
			username = nameList[Math.floor(Math.random() * nameList.length)];
			username += nameList[Math.floor(Math.random() * nameList.length)];
		}
	}

	document.getElementById("output").innerHTML = username;
};


document.getElementById("generate").addEventListener("click", () => {
	var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var numbers = "0123456789";
	var symbols = "!@#$%^&*_-+=";

	var length = document.getElementById("length").value;
	var chechkbox_Numbers = document.getElementById("numbers");
	var checkbox_Symbols = document.getElementById("symbols");

	var characters = alpha;
	chechkbox_Numbers.checked ? (characters += numbers) : "";
	checkbox_Symbols.checked ? (characters += symbols) : "";
	var password = "";

	for (let i = 0; i < length; i++) {
		password += characters.charAt(
			Math.floor(Math.random() * characters.length)
		);
	}



	document.getElementById("password").value = password;
});


document.getElementById("copy").addEventListener("click", () => {
	passwordTxt.select();
	document.execCommand("copy");
	alert("Password Copied");
});