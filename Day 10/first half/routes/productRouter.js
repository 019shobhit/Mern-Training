const express = require('express');
const productController = require('../controler/productControler.js');
// const userController = require('./controler/userControler.js');

const productRouter = express.Router;

productRouter.route('./')
    .get(productController.getAllProducts)
    .post(productController.addProducts);

    module.exports = productRouter;