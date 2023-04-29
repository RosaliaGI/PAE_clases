const jwt = require('jsonwebtoken');

const Usuario = require('./../modelos/usuario');

function actUsuario(req, res) {
    res.send('usuario actualizada corretamente');
};

function listUsuario(req, res) {
    Usuario.find({}) //las llaves especifícan que no hay filtros
        .then(response => {
            console.log('Respuesta: ', response)
            res.render('usuarios', { usuarios: response });
        })
        .catch(error => {
            res.status(400).send('Algo salió mal')
        });
};

function detUsuario(req, res) {
    const id = req.params.id;
    res.send('detalles de usuaio' + id);
};

function login(req, res) {
    Usuario.findOne({
        correo: req.body.correo,
        contraseña: req.body.contraseña
    }).then(response => {
        if (response) {
            // Si encontró el usuario
            const token = jwt.sign({
                id: response._id,
                nombre: response.nombre,
                correo: response.correo,
                role: response.role
            }, 'holamundo');
            res.send({token});
        } else {
            res.status(400).send('Usuario o contraseña incorrectos');
        }
    }).catch(error => {
        res.status(400).send('Algo salió mal');
    });
};

function registro(req, res) {
    Usuario.create({
        nombre: req.body.nombre,
        correo: req.body.correo,
        contraseña: req.body.contraseña,
        role: req.body.role,
        status: req.body.status
    }).then(() => {
        res.send();
    }).catch(error => {
        res.status(400).send(error);
    });
};

module.exports = {
    registro,
    actUsuario,
    listUsuario,
    detUsuario,
    login
};