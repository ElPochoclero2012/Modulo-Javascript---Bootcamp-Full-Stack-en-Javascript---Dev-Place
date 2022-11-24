//cargamos un modulo http
var http = require("http");

//creacion del server http, y se define la escucha
http.createServer(function(request, response) {
    //definir el header http, el status http, el content
    response.writeHead(200, {
        'Content-Type': 'contentType/json' //'text/plain', 'contentType/xml'
    });
    // luego respondemos en el body
    response.end('Hola mundo!');
}).listen(8000);

//se escribe la url con acceso al server
console.log('url: http://127.0.0.1:8000/');


var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.send("otro hola mundo!");
});

app.listen(3000, function() {
    console.log('App de ejemplo, escuchando en el 3000');
});