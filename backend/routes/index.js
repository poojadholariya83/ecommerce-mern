const express= require('express');
const router= express.Router();
const userRoute= require('./user');
const productRoute= require('./product');
// const singleProduct= require('./product');

router.use('/user', userRoute);
router.use('/userproduct', productRoute);
// router.use('/user', singleProduct);

module.exports= router;