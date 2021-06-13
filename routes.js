const express = require('express'); //importando o express
routes = express.Router(); //importando a aplicaçãp de rotas
const mongoose = require('mongoose') // Carregando o mongoose na pagina
require('./models/Usuario') //importando o model de usuario

const Usuario = mongoose.model('usuarios'); // Utilizando o model de forma externa


routes.get('/cadastro', (req, res) => {
    res.marko(require('./templates/form.marko'))
})

//Rota pra Acessar o Formulario
routes.get('/', (req, res) => {
    res.marko(require('./templates/index.marko'))
})

//Rota para tela de pagamentos

routes.get('/pagamentos', (req, res) => {
    res.marko(require('./templates/tela-pagamento.marko'));
})


//Rota para tela de produtos

routes.get('/produtos', (req, res) => {
    res.marko(require('./templates/produtos.marko'))
})


//Pegando os dados do Formulario e mandando pro banco de dados
routes.post('/registro', (req, res) => {
    const novoUsuario = {
        nome: req.body.nome,
        date: req.body.date,
        cpf: req.body.cpf,
        endereco: req.body.endereco,
        cidade: req.body.cidade,
        estado: req.body.estado,
        cep: req.body.cep,
        email: req.body.email,
        senha: req.body.senha
    }
    //Salvando o novo usuario e mandando feedback
    new Usuario(novoUsuario).save().then(() => {
        console.log('Salvo com sucesso')
    }).catch((err) => {
        console.log('Não foi possivel salvar o usuario'+err)
    });
})


//exportando o modulo
module.exports = routes;