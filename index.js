const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Routes = require("./routes/index");
const config = require("./config");

app.use(cors());
app.use("/",Routes);
app.use(express.static('uploads'));

mongoose.connect(config.db.mlab, err => {
	if (err) {
		console.log(err);
	} else {
		console.log("db success");
	}
})

app.listen(config.server.port, err => {
	if (err) {
		console.log(err);
	} else {
		console.log("server runing in port " + config.server.port);
	}
})

