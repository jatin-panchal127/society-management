const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/memberRegistration").then(() => {
	console.log("connection successful");
}).catch((e) => {
	console.log(e);
	console.log("connection unsuccessful");
});