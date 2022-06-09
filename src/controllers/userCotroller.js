const register = (req, res, next) => {
	console.log('register');
	res.send('Register user');
};

const login = (req, res, next) => {
	console.log('login');
	res.send('Login user');
};

module.exports = { register, login };
