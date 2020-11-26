const express = require('express'); //importando o express
routes = express.Router(); //importando a aplicaçãp de rotas
const mongoose = require('mongoose') // Carregando o mongoose na pagina
require('../models/Usuario') //importando o model de usuario

const Usuario = mongoose.model('usuarios'); // Utilizando o model de forma externa


routes.get('/cadastro', (req, res) => {
    res.marko(require('../templates/form.marko'))
})

routes.post('/registro', (req, res) => {
    const novoUsuario = {
        nome: req.body.nome,
        senha: req.body.senha
    }

    new Usuario(novoUsuario).save().then(() => {
        console.log('Salvo com sucesso')
    }).catch((err) => {
        console.log('Não foi possivel salvar o usuario')
    });
})







module.exports = routes;