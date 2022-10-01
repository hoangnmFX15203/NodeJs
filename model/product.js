const fs = require('fs');
const path = require('path');

module.exports = class Product {
    constructor(t) {
        this.title = t.title;
        this.imageURL = t.imageURL;
        this.price = t.price;
        this.description = t.description;
    }

    save() {
        const p = path.join(__dirname, 'data', 'products.json');
        fs.readFile(p, (err, data) => {
            let products = [];
            if (!err) {
                products = JSON.parse(data);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(callback) {
        const p = path.join(__dirname, 'data', 'products.json');
        fs.readFile(p, (err, data) => {
            if (err) {
                callback([]);
                console.log(err);
            }
            callback(JSON.parse(data));
        });
    }
};
