const express = require('express');
const router = express.Router();
const controller = require('./../controladores/usuarios');

router.post('', controller.crearUsuario);

router.put('/:id', controller.actUsuario);

router.get('', controller.listUsuarios);

router.get('/:id', controller.detUsuarios);

module.exports = router;