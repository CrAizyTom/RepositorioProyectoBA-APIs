const path = require('path');
const express = require('express');
const app = express();
const routsProducts = require('./routers/productsRouts');

app.listen(3000, ()=> {
    console.log('servidor escuchando en el puerto 3000');
});

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/products', routsProducts);

app.get('/', (req, res)=> {
    res.send('Página Principal');
});

app.use((req, res, next)=> {
    res.status(404).json('Error 404: Página no encontrada');
    next();
});