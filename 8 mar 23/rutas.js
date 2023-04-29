const path = require('path')
const express = require('express');
const { auth } = require('./src/middlewares');
// const auth = require('./src/middlewares').auth;   otra opción



function cargarHome(req, res) {
    //Crear endpoint
    // const paginando = req.query.paginando === 'false' ? false : true;
    console.log('API works');
    //res.send('api works for ' + req.usuario);

    //Response con archivo
    //const ruta = path.join(__dirname, 'src', 'views', 'index.html');
    //res.sendFile(ruta);


    res.render('home', {
        nombre: 'Rosalía Glez'
    });
}

module.exports = function (app) {
    // como se solicita, donde se solicita
    app.use('/assets', express.static(path.join(__dirname, 'assets')));

    // raiz
    app.get('/', auth, cargarHome);

    //app.get('/usuarios', middleware, function (req, res) {
    //    console.log(req.query);
    //    res.send('Lista de usuarios para: ' + req.usuario);
    //})

    app.get('*', function (req, res) {
        res.status(404).send('Página no encontrada');
    })

}