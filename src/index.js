const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require ('cors');

mongoose.connect('mongodb+srv://allan:220995al@cluster0-ed9wk.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

app.use (cors())
app.use(express.json());
app.use(routes);

app.listen(3333);

//Métodos HTTP: GET, POST, PUT, PATCH e DELETE

//Tipos de parâmetros:

//Query Params: req.query (filtros, ordenação, paginação,...);
//Route Params: request.params (Identificar um recurso na alteração ou remoção);
//Body: request.body (Dados para criação ou alteração de um registro);

//MongoDB (Não-Relacional);