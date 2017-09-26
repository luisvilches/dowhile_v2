const Users = require("../models/user");
const Utils = require("../lib/utils");

exports.find = (req,res) => {
	Users.find({},(err,result) => {
		if (err) {
			res.status(500).json({
				message:err
			});
		} else {
			res.status(500).json({
				message:"success",
				data: result
			});
		}
	});
}

exports.create = (req,res) => {

	let caso = new Users({
		avatar:Utils.uploadImg(req.files.avatar,req.body.name,"/uploads/avatar/"),
		name: req.body.name,
		apellido: req.body.apellido,
		nameComplete: req.body.name + " " + req.body.apellido,
		mail: req.body.mail,
		username: req.body.username,
		password:req.body.password,
		date: new Date()
	});

	caso.save((err,result) => {
		if (err) {
			res.status(500).json({
				message: err
			});
		} else {
			res.status(200).json({
				message:"success",
				data: result
			});
		}
	});
}

exports.delete = (req,res) => {
	Users.remove({_id:req.params.id},(err,result) => {
		if (err) {
			res.status(500).json({
				message: err
			});
		} else {
			res.status(200).json({
				message:"success",
				data: result
			})
		}
	});
}

exports.update = (req,res) => {
	let caso = new Users({
		_id: req.params.id,
		avatar:Utils.uploadImg(req.files.avatar,req.body.name,"/uploads/avatar/"),
		name: req.body.name,
		apellido: req.body.apellido,
		nameComplete: req.body.name + " " + req.body.apellido,
		mail: req.body.mail,
		username: req.body.username,
		password:req.body.password,
		date: new Date()
	});


	Users.findByIdAndUpdate({_id:req.params.id},caso,(err,result) => {
		if (err) {
			res.status(500).json({
				message:err
			});
		} else {
			res.status(200).json({
				message: "success",
				data: result
			});
		}
	});
}

exports.findById = (req,res) => {
	Users.findById({_id:req.params.id},(err,result) =>{
		if (err) {
			res.status(500).json({
				message:err
			});
		} else {
			res.status(200).json({
				message:"success",
				data:result
			});
		}
	});
}