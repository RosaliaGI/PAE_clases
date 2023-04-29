const Tarea = require('./../modelos/tarea');

function crearTarea(req, res) {
    console.log(req.body);
    res.send('tarea creada');
};


function actTarea(req, res) {
    res.send('tarea actualizada corretamente');
};

function listTarea(req, res) {
    Tarea.buscar()
        .then(response => {
            res.render('tareas', { tareas: response });
        })
        .catch(error => {
            res.status(400).send('Algo salió mal')
        });
};

function detTarea(req, res) {
    const id = req.params.id;
    res.send('detalles de la tarea' + id);
};

module.exports = {
    crearTarea,
    actTarea,
    listTarea,
    detTarea
};