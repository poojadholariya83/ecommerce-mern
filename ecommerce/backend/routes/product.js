const express=require('express');
const { product, addProduct, singleProduct } = require('../controllers/product.controller');
const router = express.Router();


//task one see all the product
router.get('/products',product);

//task 2 add product
router.post("/add-product",addProduct);
router.get("/product/:id",singleProduct)

module.exports = router;