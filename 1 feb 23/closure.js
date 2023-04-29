//const sumar = (a) => (b) => a + b;

function sumar(a) {
    a = a || 0;
    return function (b) {
        return a + b;
    }
}

//const resultado = sumar(5)(2);

const suma = sumar(5);

const r1 = suma(2); // 7
const r2 = suma(3); // 8

console.log(r1);
console.log(r2);