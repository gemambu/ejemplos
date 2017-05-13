"use require";

// funcion que retorna una promesa
function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            //resolve();
            reject('fatal!');
        }, ms);
    });
}

async function main(){
    console.log('empiezo');
    // el catch final recoge tambien los errores sincronos
    //throw new Error('sdfsdfds');
    await sleep(2000); // el codigo se para aqui hasta que se completa la promesa ('anticallback')
    for(let i = 0 ; i < 5; i++){
        await sleep(1000);
        console.log('pasó un segundo');
    }
    console.log('terminado');
}

main().then(() => {})
.catch(err => {
    console.log('Hubo un error: ', err);
});





