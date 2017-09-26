const config = require("../config");
const path = require("path");
const fs = require("fs");
const jwt = require('jwt-simple');
const moment = require('moment');

exports.uploadImg = (obj,name,folder) => {
	let nombre_nuevo = name + "_imagen";
	let ruta_archivo = obj.path;
	let nueva_ruta = "."+ folder + nombre_nuevo + path.extname(ruta_archivo).toLowerCase();
	let nombre_imagen = nombre_nuevo + path.extname(ruta_archivo).toLowerCase();
	fs.createReadStream(ruta_archivo).pipe(fs.createWriteStream(nueva_ruta)); 
	return nombre_imagen;
}


exports.createTokens = (user) => {
    let payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix(),
        username: user.name,
    };

    return jwt.encode(payload,config.TOKEN_SECRET);
}