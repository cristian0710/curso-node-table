
const {crearArchivo} = require('./helpers/multiplicar');
const {argv} = require('./config/yargs');
const colors = require('colors');



// console.log(process.argv);

// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base] = arg3.split('=');
// console.log(base);

// const base = 56;

console.log(argv);

console.log('base: yargs', argv.b, ' ', argv.a, ' ', argv.h);

crearArchivo(argv.b, argv.a, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'.rainbow))
    .catch(err => console.log(err))


