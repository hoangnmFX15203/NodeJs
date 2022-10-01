const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const productController = require('../controller/productController');

router.get('/', productController.getProduct);

router.post('/add-product', productController.postAddProduct);

module.exports = router;
