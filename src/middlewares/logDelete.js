const path = require('path');
const fs = require('fs');

const logs = (req, res, next)=> {
    fs.appendFileSync(path.resolve(__dirname, '../logs/delete.txt'), `Se eliminó el producto con id: ${req.params.id}\n`);
    next();
}

module.exports = logs;