var net = require('net');
puerto = process.argv[2];
var server = net.createServer(function(connection) {
	connection.on('data', function(data){
        var us1 = ['Dan Israel','Copa Lupe','dcopalupe','123456'];
        var us2 = ['Jorge Andres','Alanoca Quino','jalanocaquino','1q2w3e4'];
        var us3 = ['Ana','Condori Quispe','acondoriquispe','54321'];
        cadena = data.toString();
        var div = cadena.split("/");
        if((us1[2]==div[0] && us1[3]==div[1]) || (us2[2]==div[0] && us2[3]==div[1]) || (us3[2]==div[0] && us3[3]==div[1])){
        	if(us1[2]==div[0]){
        		console.log('>cliente connectado : ' + data);
        		connection.write('>Bienvenido '+us1[0]+' '+us1[1]+' !!!');
        	}
        	else if(us2[2]==div[0]){
        		console.log('>cliente connectado : ' + data);
        		connection.write('>Bienvenido '+us2[0]+' '+us2[1]+' !!!');
        	}
        	else{
        		console.log('>cliente connectado : ' + data);
        		connection.write('>Bienvenido '+us3[0]+' '+us3[1]+' !!!');
        	}
        }
        else{
        	if((us1[2]!=div[0]) && (us2[2]!=div[0]) && (us3[2]!=div[0])){
        		connection.write('El usuario '+div[0]+' es incorrecto o no existe');
        	}
        	else{
        		connection.write('La contraseña para '+div[0]+' es incorrecta');
        	}
        }
    });

	connection.on('end', function() {
	});
});

server.listen(puerto, function() {
	console.log('servidor esta escuchando '+puerto);
});
