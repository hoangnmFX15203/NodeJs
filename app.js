const express = require('express');
const app = express();
const fs = require('fs');
const port = 4000;
const cors = require('cors');
const { urlencoded } = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.post('/add-product', function (req, res) {
//     products.push(req.body);
//     res.redirect('/');
// });

app.use(productRoutes);

app.listen(port);
