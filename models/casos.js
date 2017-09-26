const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Caso = new Schema({
	name:String,
	imagen:String,
	link:String,
	content:String
});


module.exports = mongoose.model("Caso", Caso);