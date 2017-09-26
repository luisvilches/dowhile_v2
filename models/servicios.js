const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Servicio = new Schema({
	icon:String,
	titulo:String,
	body:String
});


module.exports = mongoose.model("Servicio",Servicio);