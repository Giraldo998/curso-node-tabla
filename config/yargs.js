
const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multipicar'
                })
                .option('l',{
                    alias:'listar',
                    type: 'boolean',
                    default:false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h',{
                    alias:'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'define el limite del multiplicador de nuestra multiplicacion'
                })
                .check((argv, options)=>{

                    if (isNaN(argv.b)) {
                        throw 'la base tiene quer ser un numero';
                    }
                    return true;
                })
                .argv;



console.log(argv);
console.log('base : yargs', argv.base);

module.exports = argv;