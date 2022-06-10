const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');
const authController = require('../controllers/authController');

router.get('/', authController.auth, adminController.admin);

module.exports = router;
