const mongoose = require('mongoose');
const { stringify } = require('qs');

const productSchema = mongoose.Schema({
    title: stringify,
    price: Number,
});

const productModel = mongoose.model('products', productSchema);

const testProduct = new productModel({
    title: 'Titan watch',
    price: '6000',
});

testProduct.save().then((res)=>{
    console.log(res);
});
