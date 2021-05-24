const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			trim: true,
			minLength: 1,
			maxLength: 200,
		},
		password: {
			type: String,
			required: true,
			trim: true,
			minLength: 1,
			maxLength: 200,
		},
		budgets:[
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Budget',
			}
		]
	},
	{ timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
