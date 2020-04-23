
const mensaje = {
    demand: true,
    alias: 'm',
    desc: 'Mensaje a ser firmado.'
};
const hash = {
    demand: false,
    alias: 'h',
    desc: 'Hash a ser verificado.'
};


const argv = require('yargs')
    .command('firmar', 'Firmar un mensaje', {
        mensaje
    })
    .command('verificar', 'Verifica si el mensaje es autentico', {
        mensaje,
        hash
    })
    .help()
    .argv;

    module.exports = {
        argv
    }