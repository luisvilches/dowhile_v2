module.exports = {
	server: {
		port: process.env.PORT || 1989
	},
	db:{
		mlab: "mongodb://dowhile:dowhile@ds149844.mlab.com:49844/dowhile"
	},
	TOKEN_SECRET: process.env.TOKEN_SECRET || "79d27Mh1swkXnqGp2GdB0Xl4zmTKox2T"
};