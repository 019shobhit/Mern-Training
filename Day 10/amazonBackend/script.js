const express = require("express");
const productRouter = require('./routes/productsRoutes.js');

const app = express();
const test = require('./models/productsModel.js');
const mongoose = require('mongoose');

app.use('/api/products', productRouter);

const url = 'mongodb+srv://019shobhit:shobhit2002@cluster0.maaiqk6.mongodb.net/amazon_backend?retryWrites=true&w=majority&appName=Cluster0'

const databaseUsername = '019shobhit';
const databasePassword = 'shobhit2002';
const databaseName = 'amazon_backend';

let dblink = url.replace('$_USERNAME_$', databaseUsername);
dblink = url.replace('$_PASSWORD_$', databasePassword);
dblink = url.replace('$_DB_NAME_$', databaseName);
console.log(dblink);
mongoose.connect(dblink)
    .then(
    () => console.log('............database connected...........')
    );

app.listen(1400,
    () => console.log('................App started..............')
);

