"use strict";

// Creamos una funcion para usarla como contructor de objetos.
function Fruta(nombre){
    //usamos this para poner cosas al objeto que se creará
    this.setNombre = function(valor){
        nombre = valor;
    };
    this.getNombre = function(){
        return nombre;
    };        
}

// creamos un objeto con el constructor
const limon = new Fruta('Limon');
console.log(limon);
console.log(limon.getNombre());
limon.setNombre('naranja');
console.log(limon.getNombre());