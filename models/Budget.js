const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
			minLength: 1,
			maxLength: 200,
		},
		expense: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;
