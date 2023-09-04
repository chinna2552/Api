const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');


router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);

router.get('/', userController.getAllUsers);
router.get('/:id', userController.userById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);


module.exports = router;