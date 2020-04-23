let fs = require("fs");
let { setPrivateKey, getPrivateKey, setPublicKey, getPublicKey, createSign, verifySign} = require("..");
const {
    argv
} = require('./config/yargs');

// 1. Leememos las llaves privadas y publicas del usuario.
let privateKey = fs.readFileSync(
    __dirname + "/example-key/pkcs8_rsa_private_key.pem", "utf-8"
);
let publicKey = fs.readFileSync(
    __dirname + "/example-key/rsa_public_key.pem", "utf-8"
);

console.log('Configurando la Llave privada');
setPrivateKey(privateKey);
console.log('Configurando la Llave pública');
setPublicKey(privateKey);
let public = getPublicKey();
let private = getPrivateKey();
console.log(public);
console.log(private);
console.log('Llaves configuradas.');

let comando = argv._[0];

switch (comando) {
    case 'firmar':
        let signature = createSign(argv.mensaje.toString());
        console.log('Su hash(sha256) firmado por su llave privada es:');
        console.log(signature);
        break;
    case 'verificar':
        let mensaje = argv.mensaje.toString();
        let hash = argv.hash.toString();
        if(verifySign(mensaje, hash)){
            console.log('El mensaje es autentico. Y ha sido firmado por: ');
            console.log(getPublicKey());
        }else{
            console.log('El mensaje ha sido modificado. No corresponde con el firmante.');
        }
        break;
    default:
        console.log('Comando no reconocido')
}



 



