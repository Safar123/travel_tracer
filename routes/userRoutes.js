const express = require('express');
const { signUpUser } = require('../controller/authController');
const { getAllUser } = require('../controller/userController');

const router = express.Router();

router.route('/').get(getAllUser);
router.route('/signup').post(signUpUser);

module.exports = router;