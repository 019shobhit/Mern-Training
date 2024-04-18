const productModel = require('../models/productsmodel');

const getAllProducts =async (req, res) => {
    const data = await productModel.find();
    console.log(data);
    console.log(req.url);
    res.json({
        status: 'success',
        results: 0,
        data: {
            products: [],
        }
    })
}
const addProduct = async()


module.exports = {
    getAllProducts
};