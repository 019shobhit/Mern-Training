const express = require("express");
const productsControllers = require('../controlers/productsControllers.js');

const productRouter = express.Router();

productRouter.route('/')
    .get(productsControllers.getAllProducts);

module.exports = productRouter;
