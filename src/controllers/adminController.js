const admin = (req, res) => {
	if (req.user.admin) {
		res.send('Esse dado só pode visualizado por um ADMIN');
	} else {
		res.status(401).send(`Access Denied`);
	}
};

module.exports = { admin };
