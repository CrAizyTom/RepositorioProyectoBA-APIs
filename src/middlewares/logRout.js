const path = require('path');
const fs = require('fs');

const logs = (req, res, next)=> {
    fs.appendFileSync(path.resolve(__dirname, '../logs/routs.txt'), `Se ingreso a la ruta ${req.originalUrl}\n`);
    next();
}

module.exports = logs;