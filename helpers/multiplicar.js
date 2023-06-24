// vamos a requerir un paquete que ya viene en node para que la app sea mas ligera y solo cargemos lo que necesitamos
const fs = require("fs");
require('colors');

const crearArchivo = async (base, listar, hasta) => {
  try {
    let salida = '',
        consola = '';

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n `;
      consola += `${base} ${'x'.yellow} ${i} ${'='.blue} ${base * i}\n`;
    }

    if (listar) {
      console.log("==================".yellow);
      console.log(`   Tabla del: ${base}`);
      console.log("==================".yellow);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida); // grabaremos un archivo nuevo que contenga las tablas de multiplicar del numero que indiquemos

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

// para poder exportar nuestro archivo debemos hacerlo con module y enviarlo como objeto
module.exports = {
  crearArchivo, // apuntamos a la funcion crearArchivo
};
