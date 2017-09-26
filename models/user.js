const mongoose = require('mongoose')
let Schema = mongoose.Schema;

let User = new Schema({
	avatar:String,
	rut: String,
	name: String,
	apellido: String,
	nameComplete:String,
	mail: String,
	username: String,
	password:String,
	date: Date
})

module.exports = mongoose.model('User', User)