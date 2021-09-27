const express = require("express");
const { cp } = require("fs");
const { connect } = require("http2");
const app = express();
const path = require("path");
const port = 3000 | process.env.PORT;
require("./db/conn");
require("body-parser");
const Register = require("../src/models/register");

const static_path = path.join(__dirname , "../public");

app.use(express.static(static_path));
app.set("view engine" , "hbs");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/' , (req , res) => {
	res.render('index');
})

app.get('/registration' , (req , res) => {
	res.render('registration');
})

app.get('/login' , (req , res) => {
	res.render('login');
})

app.get('/adminlogin' , (req , res) => {
	res.render('adminlogin');
})

app.get('/memberdetails' , (req , res) => {
	res.render('memberdetails');
})

app.get('/maintainancebill' , (req , res) => {
	res.render('maintainancebill');
})

app.get('/adminhomepage' , (req , res) => {
	res.render('adminhomepage');
})

app.get('/addmember' , (req , res) => {
	res.render('addmember');
})

app.get('/updatemember' , (req , res) => {
	res.render('updatemember');
})

app.get('/deletemember' , (req , res) => {
	res.render('deletemember');
})

app.post('/registration' , async(req ,res) => {
	try{
		const password = req.body.password;
		const cpassword = req.body.confirmpassword;

		if(password === cpassword){
			const registerMember = new Register({
				name : req.body.name,
				age : req.body.age,
				gender : req.body.gender,
				phone : req.body.phone,
				email : req.body.email,
				room : req.body.room,
				wing : req.body.wing,
				password:password,
				confirmpassword:cpassword
			})

			const registered = await registerMember.save();
			res.status(201).render('index');
		}
		else{
			res.send(`Password doesn't match`);
		}
	}
	catch(e){
		res.status(400).send(e);
	}
})

app.post('/login' , async(req , res) => {
	try{
		const email = req.body.email;
		const password = req.body.psw;

		const memberemail = await Register.findOne({email:email});
		if(memberemail.password === password){
			res.status(201).render('homepage');
		}
		else{
			res.send("Invalid Credentials");
		}
	}
	catch(e){
		res.status(400).send("Invalid credentials");
	}
})

app.post('/adminlogin' , async(req ,res) => {
	try{
		const email = req.body.email;
		const password = req.body.psw;

		const memberemail = await Register.findOne({email:email});
		if(memberemail.password === password){
			res.status(201).render('adminhomepage');
		}
		else{
			res.send("Invalid Credentials");
		}
	}
	catch(e){
		res.status(400).send("Invalid credentials");
	}
})

app.post('/homepage' , (req , res) => {
	res.render('index');
})

app.post('/addmember' , async (req , res) => {
	try{
		const password = req.body.password;
		const cpassword = req.body.confirmpassword;

		if(password === cpassword){
			const registerMember = new Register({
				name : req.body.name,
				age : req.body.age,
				gender : req.body.gender,
				phone : req.body.phone,
				email : req.body.email,
				room : req.body.room,
				wing : req.body.wing,
				password:password,
				confirmpassword:cpassword
			})

			const registered = await registerMember.save();
			res.status(201).render('adminhomepage');
		}
		else{
			res.send(`Password doesn't match`);
		}
	}
	catch(e){
		res.status(400).send(e);
	}
})

app.post('/deletemember' , async(req ,res) => {
	try{
		const email = req.body.email;

		const memberemail = await Register.deleteOne({email:email});

		res.status(201).render('adminhomepage');
	}
	catch(e){
		res.status(400).send("Invalid credentials");
	}
})

app.patch('/updatemember', async(req, res) => {
	try{
		const email = req.body.email;
		const updateDetails = await Register.findOneAndUpdate({email} , req.body ,{new : true} )
		res.send(updateDetails)
	}
	catch(e){
		res.status(404).send(e);
		console.log(e);
	}
});

app.listen(port , () => {
	console.log(`Server is running on ${port}`);
});