const express = require('express');
const router = express.Router();

const userController = require('../controllers/userCotroller');

router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;
