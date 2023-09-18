const express = require("express");
const app = express();

app.get("/",function(req,res)
{
    res.send('funcionando');
});

app.get("/num/:n1/:n2",function(req,res)
{
    let n1 =req.params.n1;
    let n2 = req.params.n2;
    for(let i = n1 ;i < n2;i++)
    {
        var result = n2;
    };
    res.send(result);
});

app.listen(8081,function()
{
    console.log("server on in port 8081");
});