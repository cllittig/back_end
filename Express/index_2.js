const express = require('express');
const app = express();

app.get("/", function(req, res)
    {
        res.sendFile(__dirname + "/html/index.html") //envio de HTML, __dirname, retorna o diretorio raiz da aplicação
    });

app.get("/sobre", function(req, res)
    {
        res.sendFile(__dirname + "/html/sobre.html")
    })

//codar apenas acima disso
app.listen(8081, 
    function()
        {
            console.log('Server ON');
        });