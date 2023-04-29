function crearUsuario(req, res) {
    res.send('usuario creado');
};

function actUsuario(req, res) {
    res.send('usuario actualizada corretamente');
};

function listUsuarios(req, res) {
    res.send('lista de usuarios');
};

function detUsuarios(req, res) {
    const id = req.params.id;
    res.send('detalles de la usuario' + id);
};

module.exports = {
    crearUsuario,
    actUsuario,
    listUsuarios,
    detUsuarios
};