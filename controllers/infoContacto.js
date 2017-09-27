const Info = require("../models/infoContacto");

exports.find = (req,res) => {
	Info.find({},(err,result) => {
		if (err) {
			res.status(500).json({message:err});
		} else {
			res.status(200).json({
				message: "success",
				data: result
			});
		}
	})
}

exports.create = (req,res) => {
	let servicio = new Info({
		icon: req.body.icon,
		body: req.body.body
	});

	servicio.save((err,result) => {
		if (err) {
			res.status(500).json({
				message: err
			});
		} else {
			res.status(200).json({
				message: "success",
				data: result
			});
		}
	});
}

exports.update = (req,res) => {
	let servicio = new Servicio({
		_id: req.params.id,
		icon: req.body.icon,
		body: req.body.body
	});

	Info.findByIdAndUpdate({_id:req.params.id},servicio,(err,result) => {
		if (err) {
			res.status(500).json({
				message: err
			});
		} else {
			res.status(200).json({
				message: "success",
				data: result
			});
		}
	});
}

exports.delete = (req,res) => {
	Info.remove({_id:req.params.id}, (err,result) => {
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