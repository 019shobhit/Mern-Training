const getAllProducts = (req, res) => {
    res.json({
        status: 'success',
        results: 0,
        data: {
            products: [],
        }
    })
}


module.exports = {
    getAllProducts
};