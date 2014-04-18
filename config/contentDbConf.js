var mongoose = require('mongoose');
exports.db = mongoose.connect('mongodb://127.0.0.1:27017/staticContentDb');
exports.schema = require('../schemas/contentSchema.js');