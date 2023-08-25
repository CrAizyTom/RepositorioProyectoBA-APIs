const Product = require('../database/models/Product');

const controller = {
    list: async (req, res)=> {
        const products = await Product.find({})
        res.status(200).json(products);
    },
    name: async (req, res)=> {
        const name = req.params.name;
        const product = await Product.find({name: name});
        res.status(200).json(product);
    },
    create: async (req, res)=> {
        try{
            let product = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                img: req.files.filename
            };
            const productCreate = await Product.create(product);
            res.status(201).json(productCreate);
        }catch(error){
            res.status(500).json({message: 'Internal Server Error'});
        };
    },
    modify: async (req, res)=> {
            const productModify = await Product.findByIdAndUpdate(req.params.id, req.body);
            return res.status(200).json(productModify);
    },
    update: async (req, res)=> {
        const productUpdate = await Product.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).json(productUpdate);
    },
    delete: async (req, res)=> {
        const productDelete = await Product.findByIdAndDelete(req.params.id);
        return res.status(200).json(productDelete);
    }
};

module.exports = controller;