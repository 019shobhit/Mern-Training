const express = require('express')
const productController = require('../controler/productControler.js');

const userRouter = express.Router;

userRouter.route('./')
.get(userController.getUser)
.post(userController.addUser)
.put(userController.replaceUser)
.delete(userController.deleteUser);

