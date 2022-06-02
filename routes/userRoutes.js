const express = require('express');
const { signUpUser } = require('../controller/authController');
const { getAllUser, removeUser } = require('../controller/userController');

const router = express.Router();

router.route('/').get(getAllUser);
router.route('/:id').delete(removeUser)
router.route('/signup').post(signUpUser);

module.exports = router;