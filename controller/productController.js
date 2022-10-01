const fs = require('fs');
const path = require('path');
const Product = require('../model/product');

exports.getProduct = (req, res) => {
    Product.fetchAll((products) => {
        res.send(products);
    });
};

exports.postAddProduct = (req, res) => {
    const product = new Product(req.body);
    product.save();
    res.redirect('/');
};
