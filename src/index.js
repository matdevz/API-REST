require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');

mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use('/user', express.json(), userRouter);
app.use('/admin', express.json(), adminRouter);

app.listen(process.env.PORT, () =>
	console.log('listening on port ' + process.env.PORT)
);
