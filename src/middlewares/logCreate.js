const path = require('path');
const fs = require('fs');

const logs = (req, res, next)=> {
    fs.appendFileSync(path.resolve(__dirname, '../logs/create.txt'), `Se creó el producto: ${req.body.name}\n`);
    next();
};

module.exports = logs;