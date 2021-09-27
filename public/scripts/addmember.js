let add = document.getElementById('addbtn');
let dis = document.getElementById("dis");
let fdis = document.getElementById("fdis");
let mname = document.getElementById("mname");
let mage = document.getElementById("mage");
let mgender = document.getElementById('mgender');
let mrno = document.getElementById("mrno");
let mwing = document.getElementById("mwing");
let mmno = document.getElementById("mmno");
let memail = document.getElementById('memail');
let pass = document.getElementById('pass');
let cpass = document.getElementById('cpass');
let success = document.getElementById("success");
let failure = document.getElementById("failure");
let validName = false;
let validAge = false;
let validEmail = false;
let validRoom = false;
let validPhone = false;
let validWing = false;
let validPass = false;
let validConfPass = false;
success.style.display = "none";
failure.style.display = "none";

mname.addEventListener('blur', () => {
	let regex = /^[a-zA-Z]([' 'a-zA-Z]){2,30}$/;
	let str = mname.value;
	if (regex.test(str)) {
		mname.classList.remove('is-invalid');
		validName = true;
	}
	else {
		mname.classList.add('is-invalid');
		validName = false;
	}
})

mage.addEventListener('blur', () => {
	let regex = /^\S[0-9]{0,1}$/;
	let str = mage.value;
	if (regex.test(str)) {
		mage.classList.remove('is-invalid');
		validAge = true;
	}
	else {
		mage.classList.add('is-invalid');
		validAge = false;
	}
})

memail.addEventListener('blur' , () => {
	let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
	let str = memail.value;
	if (regex.test(str)) {
		memail.classList.remove('is-invalid');
		validEmail = true;
	}
	else {
		memail.classList.add('is-invalid');
		emailinputerror.style.display = 'block';
		validEmail = false;
	}
})

mrno.addEventListener('blur', () => {
	let regex = /^([0-9]){3}$/;
	let str = mrno.value;
	if (regex.test(str)) {
		mrno.classList.remove('is-invalid');
		validRoom = true;
	}
	else {
		mrno.classList.add('is-invalid');
		validRoom = false;
	}
})

mwing.addEventListener('blur', () => {
	let regex = /^[A-F]{1}$/;
	let str = mwing.value;
	if (regex.test(str)) {
		mwing.classList.remove('is-invalid');
		validWing = true;
	}
	else {
		mwing.classList.add('is-invalid');
		validWing = false;
	}
})

mmno.addEventListener('blur', () => {
	let regex = /^([0-9]){10}$/;
	let str = mmno.value;
	if (regex.test(str)) {
		mmno.classList.remove('is-invalid');
		validPhone = true;
	}
	else {
		mmno.classList.add('is-invalid');
		validPhone = false;
	}
})

pass.addEventListener('blur', () => {
	let regex = /^[a-zA-Z]([' 'a-zA-Z]){2,30}$/;
	let str = pass.value;
	if (regex.test(str)) {
		pass.classList.remove('is-invalid');
		validPass = true;
	}
	else {
		pass.classList.add('is-invalid');
		validPass = false;
	}
})

cpass.addEventListener('blur', () => {
	let regex = pass.value;
	let str = cpass.value;
	if (regex === str) {
		cpass.classList.remove('is-invalid');
		validConfPass = true;
	}
	else {
		cpass.classList.add('is-invalid');
		validConfPass = false;
	}
})

// add.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	if (validName && validAge && validEmail && validRoom && validWing && validPhone && validPass && validConfPass) {
// 		let success = document.getElementById('success');
// 		success.classList.add('show');
// 		failure.classList.remove('show');
// 		success.style.display = "block";
// 		failure.style.display = "none";
// 	}
// 	else{
// 		failure.classList.add('show');
// 		failure.style.display = "block";
// 	}
// });

dis.addEventListener("click" , (e) =>{
	e.preventDefault();
	let success = document.getElementById('success');
	success.classList.remove('show');
	failure.classList.remove('show');
	mname.value = "";
	mage.value = "";
	mgender.value = "";
	memail.value = ""
	pass.value = "";
	cpass.value = "";
	mrno.value = "";
	mwing.value = "";
	mmno.value = "";
	success.style.display = "none";
	failure.style.display = "none";
});

fdis.addEventListener("click" , (e) =>{
	e.preventDefault();
	let success = document.getElementById('success');
	success.classList.remove('show');
	failure.classList.remove('show');
	mname.value = "";
	mage.value = "";
	mgender.value = "";
	memail.value = ""
	pass.value = "";
	cpass.value = "";
	mrno.value = "";
	mwing.value = "";
	mmno.value = "";
	success.style.display = "none";
	failure.style.display = "none";
});
