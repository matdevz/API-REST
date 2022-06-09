const bcrypt = require('bcryptjs/dist/bcrypt');
const User = require('../models/User');

const register = async (req, res) => {
	const selectedUserEmail = await User.findOne({ email: req.body.email });

	if (selectedUserEmail) {
		return res.status(400).send(`Email already exists`);
	}

	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password),
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
