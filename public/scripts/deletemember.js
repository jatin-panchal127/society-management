let deleteMember = document.getElementById("deleteMember");
let dis = document.getElementById("dis");
let fdis = document.getElementById("fdis");
let inp = document.getElementById("memail");
let delsuccess = document.getElementById('success');
let delfail = document.getElementById("failure");


delsuccess.style.display = "none";
delfail.style.display = "none";

inp.addEventListener('blur' , () => {
	let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
	let str = inp.value;
	if(regex.test(str)){
		inp.classList.remove('is-invalid');
	}
	else{	
		inp.style.display = 'block';
		inp.classList.add('is-invalid');
	}
})

// deleteMember.addEventListener("click" , (e) => {
// 	e.preventDefault();
// 	let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
// 	let str = inp.value;
// 	if(regex.test(str)){
// 		delsuccess.classList.add('show');
// 		delsuccess.style.display = "block";
// 	}
// 	else{
// 		delfail.classList.add('show');
// 		delfail.style.display = "block";
// 	}
// });
	
	
dis.addEventListener("click" , (e) =>{
	e.preventDefault();
	delsuccess.classList.remove('show');
	delsuccess.style.display = "none";
	inp.value = "";
});

fdis.addEventListener("click" , (e) =>{
	e.preventDefault();
	delsuccess.classList.remove('show');
	delfail.classList.remove('show');
	delfail.style.display = "none";
	inp.value = "";
});