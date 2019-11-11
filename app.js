//requireds
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const colorsOpts = require('./config/colors').colors;
const {crearArchivo} = require('./multiplicar/multiplicar');
const {listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch( comando ){

        case 'listar':
            console.log('Listar');
            listarTabla( argv.base, argv.limite )
            .then(tabla => console.log( tabla ))
            .catch(e => console.log(e));
            break;
        
        case 'crear':
            console.log('crear');
            crearArchivo( argv.base, argv.limite )
            .then(archivo => console.log(`Archivo creado:`, colors.pito( archivo )))
            .catch(e => console.log(e));
        break;

        default:
        console.log('Comando no reconocido');
}
//  let base = '5';

 let argv2 = process.argv;
//  let parametro = argv[2];
//  let base = parametro.split('=')[1];
//  console.log(argv);


 

