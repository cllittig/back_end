//# Express, frame work para aplicações web, ele é orientado à rotas.
//# Existem frame works minimalistas: mais simples e rapidos. E existem os      fullStack que são mais robustos.
  
/*
 *comando instalação express
 * npm install express --save
*/
// variavel abaixo. carregando o express. Como o express está na pasta node_modules, ele não precisa de ter o caminho endereçado, essa variavel recebe uma função que é o proprio express.
const express = require("express"); 
const app = express();//instancia do express, copia inteira do framwork. Variavel principal.

app.get("/",function(req, res)
    {
        res.send("Seja muito bem vindo!")//Parâmetro de resposta
    })

app.get("/sobre", function(req,res)
    {
        res.send("Minha pagina sobre a aplicação")
    })

app.get("/blog", function(req, res)//app.get("/XXX"). a sintaxe necessita da /
    {
        res.send("bem vindo ao meu blog")
    })

app.listen(8081, function()
    {
        console.log("função rodando na url http://localhost:8081")//função de callBack, ela serve para dizer que algo esta acontecendo no server. como essa.
    }); //essa função deve ser a ultima do código, ela abre o servidor