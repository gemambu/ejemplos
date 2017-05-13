"use strict";

// cargamos el driver
const mysql = require('mysql');

// Crear una conexion
const conn = mysql.createConnection({
    host: 'didimo.es',
    user: 'usuariocurso',
    password: 'us3r',
    database: 'cursonode'
});

// Establecer la conexion creada
conn.connect();

// lanzar consulta
conn.query('SELECT * FROM agentes', (err, rows, fields) => {
    if(err) {
        throw err;
        process.exit(1);
    }
    for(let i = 0; i < rows.length; i++){
        const agente = rows[i];
        console.log(agente.idagentes, agente.name ,agente.age);
    }    
});

conn.end();