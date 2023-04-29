const express = require('express');
const router = express.Router();

router.post('', function(req, res){
    res.send('usuario creado');
});

router.put('/:id', function(req, res){
    res.send('usuario actualizada corretamente');
});

router.get('', function(req, res){
    res.send('lista de usuarios');
});

router.get('/:id', function(req, res){
    const id = req.params.id;
    res.send('detalles de la usuario' + id);
});

module.exports = router;