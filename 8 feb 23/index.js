//const perro = require('./animal');
//const gato = require('./animal')

const Animal = require("./animal");

const perro = new Animal;
const gato = new Animal;

perro.nombre = 'Perro';
gato.nombre = 'Gato';

console.log(perro);
console.log(gato);