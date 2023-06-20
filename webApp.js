const userName = document.getElementById("name").value;
const password = document.getElementById("password").value;
const button = document.getElementById("button");

//  user name field accepts alpha-numeric value

function isAlphaNumeric(userName) {
	for (i = 0; i < userName.length; i++) {
		var validName = userName.charCodeAT(i);
		if (
			validName > 47 &&
			validName < 58 &&
			validName > 64 &&
			validName < 91 &&
			validName > 96 &&
			validName < 123
		)
			return true;
	}
	return "User Name should be of Alpha-Numeric Value";
}

//  user name length is no less than 5 characters

function lengthOfUserName(userName) {
	if (userName.length < 5) {
		alert("User Name to be no less than 5 characters ");
		return false;
	}
	return true;
}

// password has minimum 8 characters - 1 num, 1 uppercase & 1 lower case
function checkPassword(password) {
	var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8}$/;

	if (password.match(pass)) {
		return true;
	} else {
		return "Password does not meet the criteria: Password must be at least 8 characters and contact one number, 1 uppercase and one lowercase";
	}
}

function formValidation() {
	if (isAlphaNumeric) {
		if (lengthOfUserName) {
			if (checkPassword) {
			}
		}
	}
	alert("Form Successfully submitted");
	window.location.reload();
	return true;
}

// button.getEventListener("click", formValidation);
button.getEventListener("click", lengthOfUserName);
button.getEventListener("click", isAlphaNumeric);
// button.getEventListener("click", checkPassword);
