const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
	name:{
		type:String
	},
	age:{
		type:String
	},
	gender:{
		type:String
	},
	phone:{
		type:String,
		unique:true,
	},
	email:{
		type:String,
		unique:true
	},
	room:{
		type:String,
		unique:true
	},
	wing:{
		type:String,
	},
	password:{
		type:String,
		unique:true
	},
	confirmpassword:{
		type:String,
	}
})

const Register = new mongoose.model("Register" , memberSchema);

module.exports = Register;