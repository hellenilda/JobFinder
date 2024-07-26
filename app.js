const express = require("express")
const app = express()
const db = require('./db/connection')
const bodyParser = require('body-parser')

const PORT = 3000

app.listen(PORT, function() {
    console.log('Express hospedado na porta '+PORT)
})

// body parser
app.use(bodyParser.urlencoded({extended: false}))

// Conecção com o banco
db
    .authenticate()
    .then(() => {
        console.log('Conectou ao banco com sucesso')
    })
    .catch(err => {
        console.log('Ocorreu um erro ao conectar')
    })

// Rotas
app.get('/', (requisicao, resposta) => {
    resposta.send('Está funcionando')
})
