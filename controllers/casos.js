const Casos = require("../models/casos");
const Utils = require("../lib/utils");

exports.find = (req,res) => {
	Casos.find({},(err,result) => {
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

	let caso = new Casos({
		name:req.body.name,
		imagen: Utils.uploadImg(req.files.imagen,req.body.name,"/uploads/images/"),  //nueva_ruta,
		link:req.body.link,
		content:req.body.content
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
	Casos.remove({_id:req.params.id},(err,result) => {
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
	let caso = new Casos({
		_id: req.params.id,
		name: req.body.name,
		link: req.body.link,
		body: req.body.body,
		imagen: req.body.imagen
	});


	Casos.findByIdAndUpdate({_id:req.params.id},caso,(err,result) => {
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
	Casos.findById({_id:req.params.id},(err,result) =>{
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