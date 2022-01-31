const { Router } = require("express");
const userController = require('../controller/userController');
const userRouter = Router();
const {withAuth} = require('../middleware/auth')
const {validateUserRegistrationContract,validateUserLoginContract} = require('../middleware/validate')
const {userRegistrationContract,userLoginContract} = require('../contract/userContract')

userRouter.post('/register',validateUserRegistrationContract(userRegistrationContract),userController.post.userRegistration);
userRouter.post('/login',validateUserLoginContract(userLoginContract), userController.post.userLogin);

module.exports = userRouter