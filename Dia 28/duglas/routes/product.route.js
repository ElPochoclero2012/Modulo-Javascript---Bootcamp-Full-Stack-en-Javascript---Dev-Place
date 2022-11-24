const express = require ('express');
const router = express.Router();
const { getProducts, createProduct, getProductById, updateProduct, deleteProduct } = require ('../controllers/product.controller')

router.get('/product', getProducts);

router.get('/product/:id', getProductById);

router.post('/product', createProduct);

router.put('/product/:id', updateProduct);

router.delete('/product/:id', deleteProduct);

module.exports = router;