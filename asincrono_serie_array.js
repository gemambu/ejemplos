"use strict";

// funcion que escribe un texto en la consola tras dos segundos
console.log("Empiezo");
function escribetras2segundos(texto, callback){
    setTimeout(function(){
        console.log(texto);
        callback();
    }, 2000);
}

// bucle asincrono en serie
// llamar a una función con cada elemento de un array
function serie(arr, fn,  callbackFinalizacion){
    if(arr.length == 0){
        callbackFinalizacion();
        return;
    } 
    fn('array con posición: ' + arr.shift(), function() { // fn en este caso es escribeTras2segundos
        serie(arr, fn, callbackFinalizacion);
    });    

}

// invocamos a la función helper
serie([1, 2, 3, 4, 5], escribetras2segundos, function(){
    // hemos terminado todas las iteraciones
    console.log('Fin!');
});


