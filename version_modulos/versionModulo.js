const fs = require('fs');
const path = require('path');

function versionModulo(nombreModulo, callback){

    const fichero = path.join('./node_modules', nombreModulo, 'package.json');

    // Leemos contenido de un fichero package.json
    fs.readFile(fichero, 'utf-8', (err, data) => {
        if(err){
            // aqui no es necesario meter el dato porque el parametro es opcional siempre
            callback(err);
            return;
        }

        // ponemos try porque parse es sincrono: no tiene callback y se retorna
        // el dato con el return, esto es síncrono
        try{    
            // parseamos el contenido del fichero, convirtiendolo en un objeto
            var packageJson = JSON.parse(data);

        } catch(err){
            callback(err);
            return;
        }

        // obtenemos la versión
        const version = packageJson.version || 'version no definida';
        
        // Retornamos el dato
        // retornamos null en vez de err, porque antes ya hemos evaluado err y sabemos
        // que ya evalua falso. Por legibilidad de codigo, es mejor no poner err y dejar null
        callback(null, version);

    });
}

module.exports = versionModulo;