const path = require('path')
const express = require('express');





function cargarHome(req, res) {
    //Crear endpoint
    // const paginando = req.query.paginando === 'false' ? false : true;
    console.log('API works');
    //res.send('api works for ' + req.usuario);

    //Response con archivo
    const ruta = path.join(__dirname, 'views', 'index.html');
    res.sendFile(ruta);
}

function middleware(req, res, next) {

    if (req.query.token === '123') {
        req.usuario = 'Rosalía';
        //console.log('pasé por aquí');
        next();
    } else
        res.status(401).send('usuario no autenticado');
}

module.exports = function (app) {
    // como se solicita, donde se solicita
    app.use('/assets', express.static(path.join(__dirname, 'assets')));

    // raiz
    app.get('/', middleware, cargarHome);

    app.get('/usuarios', middleware, function (req, res) {
        console.log(req.query);
        res.send('Lista de usuarios para: ' + req.usuario);
    })

    app.get('*', function (req, res) {
        res.status(404).send('Página no encontrada');
    })

}