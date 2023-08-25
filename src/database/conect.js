const mongoose = require('mongoose');

module.exports = async ()=> {
    try{
        await mongoose.connect('mongodb://127.0.0.1/Quality_Hardware');
        console.log('Conectado a la DB');
    }catch(e){
        console.log(e);
    }
};