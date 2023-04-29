const express = require('express');
const rutas = require('./rutas');

const app = express();

const port = 3000;

// y así puedo compartir datos, estoy enviando una función como parametro
rutas(app);

app.listen(port, function () {
    console.log('app is running in port ' + port)
});