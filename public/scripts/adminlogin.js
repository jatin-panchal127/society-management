let email = document.getElementById("email");
let pass = document.getElementById("pass");
let login = document.getElementById("btn");
let fdis = document.getElementById("fdis");
let emailinputerror = document.getElementById("emailvalid");
let passinputerror = document.getElementById("passvalid");
let loginfail = document.getElementById("loginfail");
let validEmail = false;
let validPass = false;
loginfail.style.display = "none";
emailinputerror.style.display = 'none';
passinputerror.style.display = 'none';

email.addEventListener('blur', () => {
	let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
	let str = email.value;
	if (regex.test(str)) {
		email.classList.remove('is-invalid');
		validEmail = true;
	}
	else {
		email.classList.add('is-invalid');
		emailinputerror.style.display = 'block';
		validEmail = false;
	}
})

pass.addEventListener('blur', () => {
	let regex = /^[a-zA-Z]([' '0-9a-zA-Z]){2,20}$/;
	let str = pass.value;
	if (regex.test(str)) {
		pass.classList.remove('is-invalid');
		validPass = true;
	}
	else {
		pass.classList.add('is-invalid');
		validPass = false;
		passinputerror.style.display = 'block';
	}
})


// login.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	if (validEmail && validPass) {
// 		window.location = 'file:///C:/society_management/Admin/html/welcomeadmin.html'; 
// 	}

// 	else {
// 		loginfail.style.display = "block";
// 		loginfail.classList.add('show');
// 	}

// })

fdis.addEventListener("click" , (e) =>{
	e.preventDefault();
	loginfail.style.display = "none";
});