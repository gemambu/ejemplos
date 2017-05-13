"use strict";

// patron factory
function creaAgente(nombre){
    return {
        getNombre: function(){
            return nombre;
        },
        setNombre: function(valor){
            nombre = valor;
        },
        saluda: function(){
            console.log('Hola soy ', nombre);
        }
    }
}

const jones = creaAgente('Jones');
jones.saluda();

const brown = creaAgente('Brown');
brown.saluda();

// vemos que NO pierde el contexto aunque no se pongan los ().
// magia de los closures: crean constructores de los objetos que permiten que no perdamos el this
setTimeout(brown.saluda, 2000);