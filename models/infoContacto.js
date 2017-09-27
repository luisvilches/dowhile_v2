const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let InfoContacto = new Schema({
	icon:String,
	body:String
});


module.exports = mongoose.model("InfoContacto",InfoContacto);