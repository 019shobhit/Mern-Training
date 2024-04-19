const productModel = require('../models/productsModel.js');

const getAllProducts = async (req, res) => {
    const { sort = 'price', page = 1, pageSize = 2,fields= '-info', ...q } = req.query;
    const sortStr = sort.split(',').join(' ');
    const fieldsStr = fields.split(',').join(' ');

    let query = productModel.find(q);
    query = query.sort(sortStr);

    const skip = pageSize * (page - 1);
    query = query.skip(skip).limit(pageSize);

    query = query.select(fieldsStr);

    const products = await query;


    res.json({
        status: products.length,
        results: 0,
        data: {
            products,
        }
    });
}

const addProduct = async (req, res) => {
    try {
        const { _id, ...data } = await productModel.create(req.body);   
        console.log(req.body);            //yha finction banaya h
        res.json({
            result: 1,
            status: 'success',
            data: {
                products: data,
            }
        });
    }
    catch (err) {
        res.status(403);
        console.log(err);
        res.json({
            status: 'fail',
            message: JSON.stringify(err),
        });
    }
}

const replaceProduct = async (req, res) => {
    try {
        const reqId = req.params.id;
        const data = { ...req.body, reqId };
        const result = await productModel.findOneAndReplace({ _id: reqId }, data);
        res.json({
            status: 'success',
            data: {
                product: data,
            }
        });
    }
    catch (err) {
        res.status(500);
        res.json({
            status: 'success',
            message: JSON.stringify(err),
        })
    }
}
module.exports = {
    getAllProducts,             //or yha use call kiya
    addProduct,
    replaceProduct
}