"use strict";

// funcion que retorna una promesa
function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            //resolve();
            reject('fatal!');
        }, ms);
    });
}
console.log('empiezo');
const promise = sleep(5000);

promise.then(() => {
    console.log('termino');
}).catch(err => {
    console.log('termino con error: ', err);
});