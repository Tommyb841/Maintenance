const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Area = require('./areas');

const taskSchema = new Schema({
	task: String,
	description: String,
	area:{
		type: Schema.Types.ObjectId,
		ref: 'Area'
	},
	time_completed: Date;
});


module.exports = Spot;
