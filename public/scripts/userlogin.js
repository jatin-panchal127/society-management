let email = document.getElementById("email");
let pass = document.getElementById("pass");
let code = document.getElementById("code");
let login = document.getElementById("btn");
let cancel = document.getElementById("cancel");
let emailinputerror = document.getElementById("emailvalid");
let passinputerror = document.getElementById("passvalid");
let codeinputerror = document.getElementById("codevalid");
let loginfail = document.getElementById("loginfail");
let fdis = document.getElementById("fdis");
let validEmail = false;
let validPass = false;
let validCode = false;
loginfail.style.display = "none";

email.addEventListener('blur', () => {
	let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
	let str = email.value;
	if (regex.test(str)) {
		email.classList.remove('is-invalid');
		emailinputerror.style.display = 'none';
		validEmail = true;
	}
	else {
		email.classList.add('is-invalid');
		emailinputerror.style.display = 'block';
		validEmail = false;
	}
})

pass.addEventListener('blur', () => {
	let regex = /^[a-zA-Z]([' '0-9a-zA-Z]){2,30}$/;
	let str = pass.value;
	if (regex.test(str)) {
		pass.classList.remove('is-invalid');
		passinputerror.style.display = 'none';
		validPass = true;
	}
	else {
		pass.classList.add('is-invalid');
		passinputerror.style.display = 'block';
		validPass = false;
	}
})

code.addEventListener('blur', () => {
	let regex = /^[0-9]{6}$/;
	let str = code.value;
	if (regex.test(str) && (str === "958677")) {
		code.classList.remove('is-invalid');
		codeinputerror.style.display = 'none';
		validCode = true;
	}	
	else {
		code.classList.add('is-invalid');
		codeinputerror.style.display = 'block';
		validCode = false;
	}
})

// login.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	if (validEmail && validPass && validCode) {
// 		window.location = 'file:///C:/society_management/Users/html/homepage.html'; 
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

cancel.addEventListener("click" , (e) => {
	e.preventDefault();
	email.value = "";
	pass.value = "";
	code.value = "";
	emailinputerror.style.display = 'none';
	passinputerror.style.display = 'none';
	codeinputerror.style.display = 'none';
})