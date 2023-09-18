const express = require('express');
const handlebars = require('express-handlebars');
const app = express();

// config
    //template engine
        app.engine('handlebars',handlebars.engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
app.listen(8081,function()
{
    console.log('ta funcionando');
});