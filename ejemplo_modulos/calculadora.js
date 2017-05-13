"use strict";

console.log('Modulo calculadora inicializando...');
console.log('Modulo calculadora 100% loaded');

exports.suma = function (a, b){
    return a + b;
}

module.exports.resta = function (a, b) {
    return a - b;
}

function multiplica (a, b){
    return a*b;
}
// exports es un objeto vacio al que voy añadiendo cosas

//otra opcion
//module.exports = {suma: suma, resta:resta}; 

// también tenemos el alias exports. Si lo usamos, nos cargamos el propio alias
// exports = algo;

// la forma correcta seria:
// en este caso he añadido una nueva funcion, definida de otra forma (suma y resta ya están arriba)
exports.multiplica = multiplica;