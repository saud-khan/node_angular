
/*
 * GET home page.
 */

var stat = require('../config/contentDbConf.js');
//var db = stat.user;
//var mongoose = require('mongoose');
//var db = mongoose.connect('mongodb://127.0.0.1:27017/staticContentDb');
//var schema = require('../schemas/contentSchema.js');

exports.areaguides = function(req,res){
	var user = stat.db.model('areaguides', stat.schema.staticContent);
	user.find({},function(err,userobj){
		if(err){
			console.log('Error in reading the data : '+err);
		}
		else{
			if(!userobj.length){
				
				res.end("Error");
				}
			else{
				res.send(userobj);
			}
		}
	});
};
exports.attractions = function(req,res){
	var user = stat.db.model('attractions', stat.schema.staticContent);
	
	user.find({},function(err,userobj){
		if(err){
			console.log('Error in reading the data : '+err);
		}
		else{
			if(!userobj.length){
				
				res.end("Error");
				}
			else{
				res.send(userobj);
			}
		}
	});
};exports.restaurants = function(req,res){
	var user = stat.db.model('restaurants', stat.schema.staticContent);
	
	user.find({},function(err,userobj){
		if(err){
			console.log('Error in reading the data : '+err);
		}
		else{
			if(!userobj.length){
				
				res.end("Error");
				}
			else{
				res.send(userobj);
			}
		}
	});
};exports.nightlife = function(req,res){
	var user = stat.db.model('nightlifes', stat.schema.staticContent);
	
	user.find({},function(err,userobj){
		if(err){
			console.log('Error in reading the data : '+err);
		}
		else{
			if(!userobj.length){
				
				res.end("Error");
				}
			else{
				res.send(userobj);
			}
		}
	});
};
exports.activities = function(req,res){
	var user = stat.db.model('activities', stat.schema.staticContent);
	
	user.find({},function(err,userobj){
		if(err){
			console.log('Error in reading the data : '+err);
		}
		else{
			if(!userobj.length){
				
				res.end("Error");
				}
			else{
				res.send(userobj);
			}
		}
	});
};
exports.info = function(req,res){
	var user = stat.db.model('infos', stat.schema.staticContent);
	
	user.find({},function(err,userobj){
		if(err){
			console.log('Error in reading the data : '+err);
		}
		else{
			if(!userobj.length){
				
				res.end("Error");
				}
			else{
				res.send(userobj);
			}
		}
	});
};