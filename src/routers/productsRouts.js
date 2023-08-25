const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const upload = require('../middlewares/multer');
const logRout = require('../middlewares/logRout');
const logCreate = require('../middlewares/logCreate');
const logUpdate = require('../middlewares/logUpdate');
const logDelete = require('../middlewares/logDelete');

router.get('/list', logRout, productsController.list);
router.get('/detail/:name', logRout, productsController.name);
router.post('/create', logCreate, upload.any('image-multer'), productsController.create);
router.patch('/modify/:id', logUpdate, productsController.modify);
router.put('/update/:id', logUpdate, productsController.update);
router.delete('/delete/:id', logDelete, productsController.delete);

module.exports = router;