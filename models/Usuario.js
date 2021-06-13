const mongoose = require('mongoose');
const Schema = mongoose.Schema; //Utilizado para poupar tempo na hora de escrever

const Usuario = new Schema ({
    //Caso não houvesse a variavel lá teria de ser escrito assim "new mongoose.Schema"
    nome: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },

    cpf: {
        type: Number,
        required: true
    },

    endereco: {
        type: String,
        required: true
    },

    cidade: {
        type: String,
        required: true
    },

    estado: {
        type: String,
        required: true
    },

    cep: {
        type: Number,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    senha: {
        type: String,
        required: true
    }

})
//Exportando o model pra pode utilizar em outros momentos
mongoose.model('usuarios', Usuario)