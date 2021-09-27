let memail = document.getElementById('memail');
let updname = document.getElementById("updname");
let updage = document.getElementById("updage");
let updrno = document.getElementById("updrno");
let updwing = document.getElementById("updwing");
let updmno = document.getElementById("updmno");
let updemail = document.getElementById('updemail');
let update = document.getElementById("update");
let dis = document.getElementById("dis");
let fdis = document.getElementById("fdis");
let agechk = document.getElementById("agechk");
let rnochk = document.getElementById("rnochk");
let wingchk = document.getElementById("wingchk");
let mnochk = document.getElementById("mnochk");
let emailchk = document.getElementById('emailchk');
let updatesuccess = document.getElementById('success');
let updatefail = document.getElementById("failure");
let updmname = document.getElementById("updmname");
let updmage = document.getElementById("updmage");
let updmrno = document.getElementById("updmrno");
let updmwing = document.getElementById("updmwing");
let updmmno = document.getElementById("updmmno");
let updmemail = document.getElementById('updmemail');

let validName = false;
let validAge = false;
let validRoom = false;
let validPhone = false;
let validWing = false;
let validEmail = false;

updname.style.display = 'none';
updage.style.display = 'none';
updrno.style.display = 'none';
updwing.style.display = 'none';
updemail.style.display = 'none';
updmno.style.display = 'none';
updatefail.style.display = 'none';
updatesuccess.style.display = 'none';

memail.addEventListener('blur' , () => {
	let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
	let str = memail.value;
	if (regex.test(str)) {
		memail.classList.remove('is-invalid');
		validEmail = true;
	}
	else {
		memail.classList.add('is-invalid');
		validEmail = false;
	}
})


updmname.addEventListener('blur', () => {
	let regex = /^[a-zA-Z]([' 'a-zA-Z]){2,30}$/;
	let str = updmname.value;
	if (regex.test(str)) {
		updmname.classList.remove('is-invalid');
		validName = true;
	}
	else {
		updmname.classList.add('is-invalid');
		validName = false;
	}
})

updmage.addEventListener('blur', () => {
	let regex = /^\S[0-9]{0,1}$/;
	let str = updmage.value;
	if (regex.test(str)) {
		updmage.classList.remove('is-invalid');
		validAge = true;
	}
	else {
		updmage.classList.add('is-invalid');
		validAge = false;
	}
})

updmrno.addEventListener('blur', () => {
	let regex = /^([0-9]){3}$/;
	let str = updmrno.value;
	if (regex.test(str)) {
		updmrno.classList.remove('is-invalid');
		validRoom = true;
	}
	else {
		updmrno.classList.add('is-invalid');
		validRoom = false;
	}
})

updmwing.addEventListener('blur', () => {
	let regex = /^[A-F]{1}$/;
	let str = updmwing.value;
	if (regex.test(str)) {
		updmwing.classList.remove('is-invalid');
		validWing = true;
	}
	else {
		updmwing.classList.add('is-invalid');
		validWing = false;
	}
})

updmmno.addEventListener('blur', () => {
	let regex = /^([0-9]){10}$/;
	let str = updmmno.value;
	if (regex.test(str)) {
		updmmno.classList.remove('is-invalid');
		validPhone = true;
	}
	else {
		updmmno.classList.add('is-invalid');
		validPhone = false;
	}
})

updmemail.addEventListener('blur' , () => {
	let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
	let str = updmemail.value;
	if (regex.test(str)) {
		updmemail.classList.remove('is-invalid');
		validEmail = true;
	}
	else {
		updmemail.classList.add('is-invalid');
		validEmail = false;
	}
})


// update.addEventListener("click" , (e) => {
// 	e.preventDefault();
// 	if (validName && validAge && validRoom && validWing && validPhone) {
// 		updatesuccess.classList.add('show');
// 		updatesuccess.style.display = 'block';
// 		updname.style.display = "none";
// 		updage.style.display = 'none';
// 		updrno.style.display = 'none';
// 		updwing.style.display = 'none';
// 		updmno.style.display = 'none';
// 	}
// 	else{
// 		updatefail.classList.add('show');
// 		updatefail.style.display = "block";
// 	}
// });
	
	
dis.addEventListener("click" , (e) =>{
	e.preventDefault();
	updatesuccess.classList.remove('show');
	updatesuccess.style.display = 'none';
	document.querySelectorAll('input[type="checkbox"]')
    .forEach(el => el.checked = false);
});

fdis.addEventListener("click" , (e) =>{
	e.preventDefault();
	updatesuccess.classList.remove('show');
	updatefail.classList.remove('show');
	updatesuccess.style.display = "none";
	updatefail.style.display = "none";
	document.querySelectorAll('input[type="checkbox"]')
    .forEach(el => el.checked = false);
});

function updateOnChk() {

	ShowHideName(namechk);
	ShowHideAge(agechk);
	ShowHideRno(rnochk);
	ShowHideWing(wingchk);
	ShowHideMno(mnochk);
	ShowHideEmail(emailchk);
}

function ShowHideName(namechk) {
	updname.style.display = namechk.checked ? "block" : "none";
}

function ShowHideAge(agechk) {
	updage.style.display = agechk.checked ? "block" : "none";
}

function ShowHideRno(rnochk) {
	updrno.style.display = rnochk.checked ? "block" : "none";
}

function ShowHideWing(wingchk) {
	updwing.style.display = wingchk.checked ? "block" : "none";
}

function ShowHideMno(mnochk) {
	updmno.style.display = mnochk.checked ? "block" : "none";
}

function ShowHideEmail(emailchk) {
	updemail.style.display = emailchk.checked ? "block" : "none";
}