const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/user',UserController.userRegister);
router.get('/login',UserController.userLogin);

module.exports = router;