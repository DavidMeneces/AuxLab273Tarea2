const net = require('net');
process.stdout.write('Bienvenido al sistema Lab 273\nIngrese usuario y contraseña (usr/pass) \n');
process.stdin.on('data', (data) => {
    const respuesta = data.toString().trim();
    iniciar(respuesta);
});
function iniciar(peticion) {
    const client = new net.Socket();
    client.connect(8000, 'localhost', function() {
        client.write(peticion);

    });
    client.on('data', data => {
        cadena = data.toString();
        var div = cadena.split(" ");
        if(div[5] != 'o' && div[5] != 'incorrecta'){
            console.log('' + data);
            client.destroy();
        }
        else{
            console.log('' + data);
            console.log('Ingrese usuario y contraseña');
        }
    });

    client.on('close', () => {
        process.exit();
    });
}

