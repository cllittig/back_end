const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const Post = require('./views//layouts/models/Post')
//config.
    //template engine handlebars.
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    //Body Parser
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());
    //conexão banco de dados.
    const sequelize = new Sequelize('postapp', 'root', '32130708', 
    {
        host: 'localhost',
        dialect: 'mysql'
    });
//rotas
    //rota inserção de dados usuario.
        app.get('/cad',function(req,res)
        {
            res.render('formulario'); // renderizando o arquivo formulario da pasta views
        });

    //rota envio de dados back-end
        app.post('/send', function(req,res) //se usar o metodo post no html, na rota express o metodo usado deve ser post tmb.
        {
            Post.create
            ({
                title: req.body.title,
                content: req.body.content
            }).then(function()
            {
                res.redirect('/');
            }).catch(function(erro)
            {
                res.send("erro" + erro);
            });
        });
        app.get('/', function(req,res)
        {
            Post.findAll().then(function(post)
            {
                console.log(post);
                res.render('home', {post: post});
                const bank = post
            });
        });

app.listen(8081, function()
{
    console.log("server on, url https://localhost:8081");
});