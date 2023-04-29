const router = require('express').Router();
const rutasTareas = require('./tareas');
const rutasUsuarios = require('./usuarios');
const { auth } = require('./../middlewares');

// Opción 1
router.use('/tareas', auth, rutasTareas);
router.use('/usuarios', auth, rutasUsuarios);

//Opción 2
//router.use('', auth);
//router.use('/tareas', rutasTareas);
//router.use('/usuarios', rutasUsuarios);

module.exports = router;