const express = require('express');
const server = express();
const port = process.env.PORT || 3000;
const router = express.Router();

const products = require('./public/products.json');

server.listen(port, () =>{
    console.log(`Servidor en el puerto: ${port}`);
});

server.use(router);

router.get('/products', (req, res)=>{
    res.json(products.AllProducts);
});

router.get('/products/:id', (req,res)=>{
    const id = req.params.id;
    const selectedItemID =  products.AllProducts.find(ele => ele.id == id);
    res.json(selectedItemID);
});

router.get('/products/:name', (req,res)=>{
    const name = req.params.name;
    const selectedItemName =  products.AllProducts.find(ele => ele.name == name);
    res.json(selectedItemName);
});


