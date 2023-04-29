const express = require('express');
const rutas = require('./rutas');
const routes = require('./src/rutas');
const path = require('path');
const mongoose = require('mongoose')

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const swaggerConf = require('./swagger.config');

require('dotenv').config();  //se necesita para leer el .env y no regresa nada

const { engine } = require('express-handlebars');

const app = express();

const mongoUrl = process.env.MONGO_URL;
console.log(mongoUrl);

app.engine('handlebars', engine({
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}));
app.set('view engine', 'handlebars');
app.set('views', './src/views');

const port = process.env.PORT || 3001; //fallback 

// Swagger
const swaggerDocs = swaggerJsDoc(swaggerConf);
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocs));


app.use('', routes);

// y así puedo compartir datos, estoy enviando una función como parametro
rutas(app);

mongoose.connect(mongoUrl).then(() => {
    console.log('Se conectó correctamente a la base de datos');
    app.listen(port, function () {
        console.log('app is running in port ' + port)
    });
}).catch(err => {
    console.log('No se pudo conectar a la base de datos', err);
})

