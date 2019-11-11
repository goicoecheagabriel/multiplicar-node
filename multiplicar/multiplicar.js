const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise( (resolve, reject) => {

        if (!Number(base)) {
            reject('Base no es un número, por favor cambia la base por un valor numerico');
            return;
        }

        let info = '';
        info = '=====================\n'.green;
        info += `tabla de ${base}\n`.green;
        info += '=====================\n'.green;
        for(let i = 1; i<=limite; i++){
            info += `${base} * ${i} = ${base *i} \n`;
        }

        resolve(info);
    });
    
}

let crearArchivo = ( base, limite ) => {
    return new Promise((resolve, reject) =>{

        if (!Number(base)) {
            reject('No es un número, por favor cambia la base por un valor numerico');
            return;
        }
        let data ='';

        for(let i=1; i<=limite; i++){
            data+=`${base} * ${i} = ${base * i} \n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
            resolve(`tabla-${ base } - ${ limite }.txt`)
            
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}