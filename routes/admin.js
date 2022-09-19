const express = require('express');

const path = require('path')

const router = express.Router();

router.get ('/add-products', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-products.html'))
  })
  
  router.post('/add-product', (req, res) => {
    console.log(req.body);
    res.redirect('/')
  })

module.exports = router