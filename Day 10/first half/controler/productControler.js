
const fsPromises = require('fs/promises');

const getAllProducts =
    app.get('/api/products', async (req, res) => {
        const data = await fsPromises.readFile('./data.json', "utf8");
        const arr = JSON.parse(data).products;
        res.json({
            status: 'success',
            result: arr.length,
            data: {
                product: arr
            }
        });
    });
const addProducts =
    app.post('/api/products', async (req, res) => {
        const data = await fsPromises.readFile('./data.json', "utf8");
        const arr = JSON.parse(data).products;
        res.json({
            status: 'success',
            result: arr.length,
            data: {
                product: arr
            }
        });
    });
const replaceProducts =
    app.put('/api/products', async (req, res) => {
        const data = await fsPromises.readFile('./data.json', "utf8");
        const arr = JSON.parse(data).products;
        res.json({
            status: 'success',
            result: arr.length,
            data: {
                product: arr
            }
        });
    });
const deleteProducts =
    app.delete('/api/products', async (req, res) => {
        const data = await fsPromises.readFile('./data.json', "utf8");
        const arr = JSON.parse(data).products;
        res.json({
            status: 'success',
            result: arr.length,
            data: {
                product: arr
            }
        });
    });

module.exports = {
    getAllProducts,
    addProducts,
    replaceProducts,
    deleteProducts,
}