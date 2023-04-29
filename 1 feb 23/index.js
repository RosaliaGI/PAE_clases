/*

class Persona{
    nombre; //es el this de persona

    constructor(nombre){ //este nombre es parámetro
        this.nombre = nombre;
    }

    saludar(){
        setTimeout(function(){
            console.log('Hola soy '+this.nombre);
        }.bind(this), 100);  //bind modifica el this en esta funcion, aquí estoy setting this como el this de esta funcion 
    }
}
*/

function foo(){
    console.log('foo');
}

function bar(){
    console.log('bar');
}

setTimeout(function(){
    bar();
}, 0);
foo();
// primero se ejecuta foo