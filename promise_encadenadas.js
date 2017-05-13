"use strict";

// funciones que devuelven promesas
function conArroz(plato){
    return new Promise((resolve, reject) => {
        resolve(plato + 'arroz');
    });
}

function conAjo(plato){
    return new Promise((resolve, reject) => {
        // resolve(plato + ' ajo');
        reject('horror, no hay ajo!');
    });
}

function con(plato, ingrediente){
    return new Promise((resolve, reject) => {
        resolve(plato + ' ' + ingrediente);
    });
}

// Encadenar promesas

const paella = 'paella con ';

conArroz(paella)
    .then((plato) => {
        console.log('Estado del plato: ', plato);
        return plato;
    })
    .then(conAjo) // conAjo recibe el plato que devolvió conArroz
    .then((plato) => {
        return con(plato, 'sal'); // devuelvo la promesa para el siguiente .then
    })
    .then((plato) =>{ // esta funcion recibe el plato que devolvio conAjo
        console.log(plato);
    })
    .catch(err => {
    console.log('imposible terminar el plato!' , err);
});