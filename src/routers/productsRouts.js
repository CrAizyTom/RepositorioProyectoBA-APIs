const path = require('path');
const fs = require('fs');
const express = require('express');
const multer = require('multer');
const router = express.Router();
const productsController = require('../controllers/productsController');
const { File } = require('buffer');

const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null, path.resolve(__dirname, '../../public/images'));
    },
    filename: (req, file, cb)=> {
        cb(null, 'image-multer' + path.extname(file.originalname));
    }
});

const upload = multer({storage: storage});

const logs = (req, res, next)=> {
    console.log(req);
    fs.appendFileSync(path.resolve(__dirname, '../logs/logs.txt'), `Se ingreso a la ruta ${req.originalUrl}\n`);
    next();
}

router.get('/listar', logs, productsController.listar);
router.post('/crear', upload.any('image-multer'), productsController.crear);
router.get('/detalle', logs, productsController.detalle);
router.get('/detalle/:name', logs, productsController.name);

module.exports = router;