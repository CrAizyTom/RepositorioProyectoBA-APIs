const path = require('path');
const fs = require('fs');

const logs = (req, res, next)=> {
    fs.appendFileSync(path.resolve(__dirname, '../logs/update.txt'), `Se modificó el producto: ${req.params.id} con la ruta ${req.originalUrl}\n`);
    next();
}

module.exports = logs;