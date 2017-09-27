const Rrss = require("../models/rrss");

exports.find = (req,res) => {
	Rrss.find({},(err,result) => {
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
	let servicio = new Rrss({
		icon: req.body.icon,
		name: req.body.name,
		link: req.body.link
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
	let servicio = new Rrss({
		_id: req.params.id,
		icon: req.body.icon,
		name: req.body.name,
		link: req.body.link
	});

	Rrss.findByIdAndUpdate({_id:req.params.id},servicio,(err,result) => {
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
	Rrss.remove({_id:req.params.id}, (err,result) => {
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