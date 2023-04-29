const express = require('express');
const router = express.Router();
const controller = require('./../controladores/tareas');


/**
 * @swagger
 * /tareas:
 *  post:
 *    description: crear una nueva tarea
 *    parameters: 
 *      - in: body
 *        name: titulo
 *        description: el titulo de la tarea
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: lista de tareas del usuario
 */
router.post('', express.json(), controller.crearTarea);


/**
 * @swagger
 * /tareas:
 *  put:
 *    description: actualizar una tarea
 *    parameters: 
 *      - in: body
 *        name: titulo
 *        description: el titulo de la tarea
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: actualiza el usuario
 */
router.put('/:id', express.json(), controller.actTarea);

router.get('', controller.listTarea);

router.get('/:id', controller.detTarea);


module.exports = router;