// desestructuramos el objeto que hemos recibido con require
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors')


console.clear();



//console.log(process.argv) // imprimimos en consola la liena de argumentos que son pasados cuando node se ejecuta
// const [, , arg3 = 'base=5'] = process.argv; //desestructuramos y extraemos el tercer argumento de nuestro arreglo de comandos 
// console.log(arg3);
// const [, base=5] = arg3.split('='); 
// console.log(base);

// const base = 4;
crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.rainbow))
    .catch(err => console.log(err));
