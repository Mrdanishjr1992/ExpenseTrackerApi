const mongoose = require('mongoose');

const connectionString =
	process.env.MONGODB_URI || 'mongodb://localhost:27017/expenseTracker';

mongoose
	.connect(connectionString, {
		useNewUrlParser: true,
		useFindAndModify: false,
		useCreateIndex: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('MongoDB connected successfully'))
	.catch((err) => console.log(err));

module.exports = {
	Budget: require('./Budget'),
	User: require('./User'),
};
