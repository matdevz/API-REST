const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs/dist/bcrypt');
const joiValidate = require('./validate');

const register = async (req, res) => {
	const { error } = joiValidate.registerValidate(req.body);

	if (error) {
		return res.status(400).send(error);
	}

	const selectedUser = await User.findOne({ email: req.body.email });

	if (selectedUser) {
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
		res.status(400).send(error);
	}
};

const login = async (req, res) => {
	const { error } = joiValidate.loginValidate(req.body);

	if (error) {
		return res.status(400).send(error.message);
	}

	const selectedUser = await User.findOne({ email: req.body.email });
	if (!selectedUser) {
		return res.status(400).send('Email or password incorrect');
	}

	const passwordUserMatch = bcrypt.compareSync(
		req.body.password,
		selectedUser.password
	);
	if (!passwordUserMatch) {
		return res.status(400).send('Email or password incorrect');
	}

	const token = jwt.sign(
		{ _id: selectedUser._id, admin: selectedUser.admin },
		process.env.SECRET
	);

	res.header('authorization-token', token);
	res.send('User logged in successfully');
};

module.exports = { register, login };
