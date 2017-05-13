"use strict";

const calculadora = require('./calculadora');

calculadora.marca = 'Siemens';

console.log(calculadora.suma(6 , 3));
console.log(calculadora.resta(8 , 3));
console.log(calculadora.multiplica(2 , 3));

const otraCalc = require('./calculadora');
console.log(otraCalc.marca);
