const express = require('express');
const rutas = require('./rutas');
const routes = require('./src/rutas');
require('dotenv').config();  //se necesita para leer el .env y no regresa nada

const { engine } = require('express-handlebars');

const app = express();

const mongoUrl = process.env.MONGO_URL;
console.log(mongoUrl);

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

const port = process.env.PORT || 3000; //fallback 

app.use('', routes);

// y así puedo compartir datos, estoy enviando una función como parametro
rutas(app);

app.listen(port, function () {
    console.log('app is running in port ' + port)
});