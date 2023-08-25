const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null, path.resolve(__dirname, '../../public/images/products'));
    },
    filename: (req, file, cb)=> {
        cb(null, 'image-multer' + path.extname(file.originalname));
    }
});

const upload = multer({storage: storage});

module.exports = upload;