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
// llamar a una función n veces en serie
function serie(n, fn,  callbackFinalizacion){
    if(n == 0){
        callbackFinalizacion();
        return;
    }
    n = n - 1;   
    fn('texto: ' + n, function() { // fn en este caso es escribeTras2segundos
        serie(n, fn, callbackFinalizacion);
    });    

}

// invocamos a la función helper
serie(5, escribetras2segundos, function(){
    // hemos terminado todas las iteraciones
    console.log('Fin!');
});

