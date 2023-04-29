const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema({
    nombre: { type: String },
    contraseña: { type: String },
    correo: { type: String },
    role: { type: String },
    status: { type: String, default: 'new' }
});

module.exports = model('usuarios', usuarioSchema);