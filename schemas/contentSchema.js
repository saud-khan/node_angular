var mongoose= require('mongoose');

exports.staticContent = new mongoose.Schema({	
	title : String,
	msg1 : String,
	msg2 : String,
	msg3 : String
	});

exports.register = new mongoose.Schema({
	name: String,
	
});
