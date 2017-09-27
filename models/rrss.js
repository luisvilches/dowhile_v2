const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Rrss = new Schema({
	name:String,
	icon:String,
	link:String
});


module.exports = mongoose.model("Rrss",Rrss);