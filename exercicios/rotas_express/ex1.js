const express = require('express');
const app = express();

app.get("/", function(req,res)
{
    res.send("soma 2 e 3: " + (2+3));
});

app.get("/mult", function(req,res)
{
    res.send("multiplicação 2 e 3: " + (2*3));
});

app.get("/div", function(req,res)
{
    res.send("divisão 2 e 3: " + (2/3));
});

app.get("/sub",function(req,res)
{
    res.send("a subtração de 3 e 2: " + (3-2));
});

app.get("/pot", function(req,res)
{
    res.send("a potenciação de 3 e 2: " + (3**2));
});

app.get("/res", function(req,res)
{
    res.send("resto da divisão de 3 e 2: " + (2%3));
});

app.listen(8081, function()
{
    console.log("SERVIDOR ON");
});