const express = require ('express');
const server = express();
const port = 3000;
const productRouter = require('./routes/product.route');
const userRouter = require('./routes/user.route');

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/store")
    .then(() => console.log("Conectado a mongoDB..."))
    .catch((err) => console.log(err));

server.use(express.json());
server.use(productRouter);
server.use(userRouter);

server.listen(port,() => {
    console.log("BD conectada...");
});