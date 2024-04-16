const express = require('express');
// const fs=require('fs');
const fsPromises = require("fs/promises");
const app = express();

app.use(express.json());

app.get('/api/products', async (req, res) => {
    // const data=fs.readFileSync('./data.json',"utf8");
    const data = await fsPromises.readFile('./data.json', "utf8");
    const arr = JSON.parse(data).products;
    res.json({
        status: 'success',
        // results: arr.length,
        data: {
            products: arr,
        }
    });
});

app.post('/api/products', (req, res) => {
    const data = req.body;

    const db = fsPromises.readFile("./data.json", "utf8");
    const arr = JSON.parse(db);
    const len = arr.length;
    const newProduct = data;
    if (len == 0) {
        newProduct.id = 1;
    }
    else {
        newProduct.id = (arr[len - 1].id) + 1;
    }
    arr.push(newProduct);
    fsPromises.writeFile("./data.json", JSON.stringify(arr));

    res.json({
        status: 'success',
        results: 1,
        data: {
            newProduct: newProduct,
        }
    })
});

app.put('/api/products/:id', (req, res) => {
    console.log(req);
    res.send("work in progress");
    const data = req.body;
    console.log(data);
});
app.listen(1800);