"use strict";

// constructor de objetos
function Coche(ruedas){
    this.ruedas = ruedas;

    this.cuantasRuedas = function(){
        console.log('this: ', this);
        console.log('Tiene ', this.ruedas, ' ruedas');
    };
}

const todoterreno = new Coche(4);

// Corregimos el problema de perder el this al llamarse el metodo desde otro sitio
//setTimeout(todoterreno.cuantasRuedas.bind(todoterreno), 2000);

const autobus = new Coche(12);
autobus.cuantasRuedas.call(todoterreno);

