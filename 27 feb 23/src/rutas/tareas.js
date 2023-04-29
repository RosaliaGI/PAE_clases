const express = require('express');
const router = express.Router();
const controller = require('./../controladores/tareas');


router.post('', express.json(), controller.crearTarea);

router.put('/:id', express.json(), controller.actTarea);

router.get('', controller.listTarea);

router.get('/:id', controller.detTarea);


module.exports = router;