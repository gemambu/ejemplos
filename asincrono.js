"use strict";

// funcion que escribe un texto en la consola tras dos segundos
console.log("Empiezo");
function escribetras2segundos(texto, callback){
    setTimeout(function(){
        console.log(texto);
        callback();
    }, 5000);
}

// bucle asincrono en paralelo
for(let i = 0; i < 5; i++){
    escribetras2segundos('texto ' + i, function(){
        if(i == 5){
            console.log('**FIN**');
        }        
    });
    // el codigo continua por aqui antes de que pasen 2 segundos
}


/*
// utilizamos la funcion
escribetras2segundos('texto1', function(){
    // y cuando termina, llamamos a la funcion de nuevo
    escribetras2segundos('texto2', function(){
    console.log('**FIN**');
    });
});

// utilizamos la función en bucle
escribetras2segundos('texto1', function(){
    // y cuando termina, llamamos a la funcion de nuevo
    escribetras2segundos('texto2', function(){
    console.log('**FIN**');
    });
});
*/







