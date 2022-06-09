const User = require('../models/User');

const register = async (req, res) => {
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	});

	try {
		const userSalved = await user.save();
		res.send(userSalved);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const login = (req, res) => {
	console.log('login');
	res.send('Login user');
};

module.exports = { register, login };
