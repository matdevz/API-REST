require('dotenv').config();
const express = require('express');
const app = express();

const router = require('./routes/routes');

app.use('/user', router);

app.listen(process.env.PORT, () =>
	console.log('listening on port ' + process.env.PORT)
);
