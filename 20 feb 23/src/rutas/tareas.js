const express = require('express');
const router = express.Router();

//este es un middleware

router.post('', express.json(), function (req, res) {
    console.log(req.body);
    res.send('tarea creada');
});

router.put('/:id', function (req, res) {
    res.send('tarea actualizada corretamente');
});

router.get('', function (req, res) {
    //res.send('lista de tareas');

    //Usando handlebars
    const tareas = [
        { titulo: 'Tarea 1', status: 'nueva' },
        { titulo: 'Tarea 2', status: 'nueva' },
        { titulo: 'Tarea 3', status: 'nueva' },
        { titulo: 'Tarea 4', status: 'nueva' },
        { titulo: 'Tarea 5', status: 'nueva' },
        { titulo: 'Tarea 6', status: 'nueva' },
        { titulo: 'Tarea 7', status: 'nueva' },
    ]
    res.render('tareas', { tareas });
});

router.get('/:id', function (req, res) {
    const id = req.params.id;
    res.send('detalles de la tarea' + id);
});

module.exports = router;