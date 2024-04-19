const express=require('express');
const productsController=require('../controlers/productsController.js')
const productRouter=express.Router();
productRouter.route('/')
.get(productsController.getAllProducts)
  .post(productsController.addProduct);

productRouter.route('/:id')
.put(productsController.replaceProduct)

  module.exports=productRouter;
