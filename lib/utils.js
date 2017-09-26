const path = require("path");
const fs = require("fs");

exports.uploadImg = (obj,name,folder) => {
	let nombre_nuevo = name + "_imagen";
	let ruta_archivo = obj.path;
	let nueva_ruta = "."+ folder + nombre_nuevo + path.extname(ruta_archivo).toLowerCase();
	let nombre_imagen = nombre_nuevo + path.extname(ruta_archivo).toLowerCase();
	fs.createReadStream(ruta_archivo).pipe(fs.createWriteStream(nueva_ruta)); 
	return nombre_imagen;
}