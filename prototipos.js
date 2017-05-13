"use strict";

// definimos una funcion constructora de objetos
function Persona(name){
    this.name = name;
}


// construir un objeto
const luis = new Persona('Luis');

// añadir propiedades al prototipo de las Personas
Persona.prototype.saluda = function(){
    console.log('Hola, soy ' , this.name);
}

Persona.prototype.despidete = function(){
    console.log('Me voy, recuerda mi nombre: ' , this.name);
}

// Ahora todas las personas creadas y las nuevas que se creen, podrán saludar y despedirse
luis.saluda();
luis.despidete();

const maria = new Persona('Maria');
maria.saluda();
maria.despidete();


// Herencia de persona ------------------------

function Agente(name){
    // quiero heredar el constructor de Persona
    Persona.call(this, name);
}

// heredamos sus propiedades y métodos
Agente.prototype = new Persona(''); 
// aqui da igual el nombre, xq en ete punto persona es un figurante, no se tiene en cuenta
// porque nunca se va a utilizar ete objeto para ejecutar métodos, solo sirve para proveer metodos y propiedades

const smith = new Agente('Smith');
smith.saluda();
smith.despidete();

// Herencia multiple ------------------------------

//Mixin superheroe
function Superheroe(){
    this.vuela = function(){
        console.log(this.name, ' vuela');
    }
    this.esquivaBalas = function(){
        console.log(this.name, 'esquiva balas');
    }
}

Object.assign(Agente.prototype, new Superheroe());
// copia todas las propiedades de Super heroe al prototipo de Agente

//smith.esquivaBalas();
//smith.vuela();

function Malvado(){
    this.risaMaligna = function(){
        console.log('MUAAHAHAHA');
    }
}

Object.assign(Agente.prototype, new Malvado());
smith.esquivaBalas();
smith.vuela();
smith.risaMaligna();

