const path = require('path');
const fs = require('fs');

let rout = path.resolve(__dirname, '../data/products.json');
let jsonProduct = fs.readFileSync(rout);
let products = JSON.parse(jsonProduct);

const controller = {
    listar: (req, res)=> {
        res.json(products);
    },
    crear: (req, res)=> {
        let product = {};
       
        if (!req.body.name) {
            return res.json({mgs: 'El campo es necesario.'});
       };
       
        product.id = products.length + 1;
        product.name = req.body.name;
        product.description = req.body.description;
        product.price = req.body.price;
        product.image = req.body.image;
        products.push(product);
        
        let productsStringify = JSON.stringify(products, null, 4);
        fs.writeFileSync(rout, productsStringify);
        res.status(201).json(product)
        res.json(products);
    },
    detalle: (req, res)=> {
        let details = products.map(product => {
            return [product.name, product.description, product.price];
        });
        res.json(details);
    },
    name: (req, res)=> {
        let name = req.params.name;
        let product = products.filter(product => product.name == name);
        res.json(product);
    }
};

module.exports = controller;