var http = require('http'); // modulo padrão do node.js

http.createServer(function(req, res) // res, serve para enviar dados a quem estiver acessadno a aplicação
    {
        res.end("Hello world!");// end serve para o envio da mensagem
    }).listen(8081); // abre um server http, listen informa a porta de rede para abrir o servidor

console.log("O servidor funciona");
