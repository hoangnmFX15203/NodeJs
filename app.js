const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const { urlencoded } = require('express');
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const users = [];

app.post('/', function (req, res) {
    users.push(req.body);
    res.redirect('/users');
});

app.get('/users', function (req, res, next) {
    return res.send(users);
});

app.listen(port);
