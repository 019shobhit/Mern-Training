const express = require('express')
const fsPromises = require('fs/promises');
const productRouter = require('./routers/productRouter.js');
const userRouter = require('./routers/iuserRouter.js');

const app = express();


app.use(express.json());

app.use((req, res, next) => {
    const time = new Date().toLocaleString();
    fsPromises.appendFile("./log.txt", req.url + '\t' + time + '\n');
    next();
});

app.use('/api/products', productRouter);
app.listen(1500);

// const productRouter = express.Router;
// const usertRouter = express.Router;

// app.use('/api/users', usertRouter);





// app.route('/api/products')
// .get(productController.getAllProducts)
// .post(productController.addProducts);

// app.route('/api/products/:id')
// .put(productController.getAllProducts)
// .delete(productController.addProducts);

// app.route('./api/user')
// .get(userController.getUser)
// .post(userController.addUser)
// .put(userController.replaceUser)
// .delete(userController.deleteUser);
