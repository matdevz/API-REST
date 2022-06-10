const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minLength: 3,
		maxLength: 50,
	},
	email: {
		type: String,
		required: true,
		minLength: 3,
		maxLength: 50,
	},

	password: {
		type: String,
		required: true,
		minLength: 6,
		maxLength: 200,
	},
	admin: {
		type: Boolean,
		default: false,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('User', userSchema);
