"use strict";

const fs = require('fs');
const async = require('async');
const versionModulo = require('./versionModulo');

function versionModulos(callback){
    // leer contenido de node_modules
    fs.readdir('./node_modules', (err, lista) => {
        if (err) {
            callback(err);
            return;
        }
        
        // est funcion la vamos a ejectuar con cada elemento de la lista de directorios
        function iterador(item, callbackIterador){

        // descartamos ficheros o carpetas que empiecen con punto
        if(item[0] === '.'){
            callbackIterador(null);
            return;
        }

        versionModulo(item, (err, version) => {
            if(err){
                callbackIterador(err);
                return;
            }

            // sacar nombre y version de cada modulo que encontremos
            callbackIterador(null, { nombre: item, version: version });

        });
    }

    // devolvemos la lista con la información
    async.concat(lista, iterador, callback);

    })
}

versionModulos((err, listaModulos) => {
    if(err){
        console.error('Hubo un error', err);
        return;
    }
    //console.log('Los modulos de este proyecto son: ', listaModulos);

    // recorremos listaModulos para mostrarlos en la consola
    // y como console.log no es asincrono, podemos hacer un bucle tradicional
    for(let i = 0; i < listaModulos.length; i++){
        console.log('El modulo ', listaModulos[i].nombre, 
        ' tiene la version: ', listaModulos[i].version);
    }

});