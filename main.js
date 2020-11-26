const express = require('express') // Importando Express
const mongoose = require('mongoose') // Importando o Mongoose
const app = express(); // Criando aplicação express
const bodyParser = require('body-parser'); // Importando o body-parser
app.use(bodyParser.urlencoded()); // configurando o body-parser
app.use(bodyParser.json());
const routes = require('./routes') // Chamando o arquivo de rotas
app.use (routes) // Utilizando arquivos de rotas

//Conectando ao Banco de Dados MongoDB
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/matheus').then( () => {
    console.log('você consegui se conectar ao Banco de dados :D')
}).catch ( (err) => {
    console.log('Você não conseguiu se conectar ao bando de dados por causa do erro: '+err)
});

//Fim da conexão com o banco de dados

//CONFIGURANDO O MARKO
require('marko/node-require'); //Importando o Marko
var markoExpress = require('marko/express'); // 
app.use(markoExpress());

app.listen (3000, '0.0.0.0', () => {
    console.log('Seu servidor já está conectado a rede')
})
//Fim das importações e configurações
