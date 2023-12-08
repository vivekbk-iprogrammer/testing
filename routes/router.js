const express = require('express');
const userController =  require('../controller/userController');
const joiValidation = require('../middleware/joiValidation');
const router =  express.Router();


router.get('/',userController.readAll);
router.post('/add', joiValidation, userController.insert);
router.put('/delete',  userController.deleteUser);
router.put('/update', joiValidation, userController.updateUser);






module.exports =  router;