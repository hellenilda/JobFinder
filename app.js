const express = require("express")
const app = express()
const db = require('./db/connection')
const bodyParser = require('body-parser')

const PORT = 3000

app.listen(PORT, function() {
    console.log('Express hospedado na porta '+PORT)
})

// body parser
app.use(bodyParser.urlencoded({ extended: false }))

// Conexão com o banco
db
    .authenticate()
    .then(() => {
        console.log('Conectou ao banco com sucesso')
    })
    .catch(err => {
        console.log('Ocorreu um erro ao conectar')
    })

// Rotas
app.get('/', (req, res) => {
    // __dirname = "D:\Meus arquivos\Algoritmos\Compass UOL\Cursos de JavaScript\Node.JS\"
    res.sendFile(__dirname + '/view/index.html')
})

// rotas do jobs
app.use('/jobs', require('./routes/jobs'))