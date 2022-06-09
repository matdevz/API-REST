require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const router = require('./routes/routes');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use('/user', express.json(), router);

app.listen(process.env.PORT, () =>
	console.log('listening on port ' + process.env.PORT)
);
