const db = require('../models/index');

async function create(req, res) {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.json({ status: 400, message: 'All Fields Are Required' });
	}
	// Async/Await Version
	try {
		const foundUser = await db.User.findOne({ email });

		if (foundUser) {
			return res.json({
				status: 400,
				error: 'User already exists. Please login',
			});
		}

		const newUser = await db.User.create({ email, password });

		// Respond back to client
		res.json(newUser);
	} catch (err) {
		return res.json({
			status: 500,
			error: 'Something went wrong. Please try again',
		});
	}
}



async function login(req, res) {
	const { email, password } = req.body;
	// Return error if no form data
	if (!email || !password) {
		return res
			.status(400)
			.json({ status: 400, error: 'All fields are required' });
	}

	try {
		// Find user by email
		const user = await db.User.findOne({ email });
		if (!user) {
			res
				.status(400)
				.json({ status: 400, error: 'Invalid credentials. Please try again' });
		}

		// Verify supplied password matches found user password
		if(user.password == password){
			res.json(user);
		} else {
			res
				.status(400)
				.json({ status: 400, error: 'Invalid Password. Please try again' });
		}

	} catch (err) {
		return res
			.status(500)
			.json({ status: 500, error: 'Something went wrong. Please try again' });
	}
}


module.exports = {
	create,
	login,
};
