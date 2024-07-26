const express = require("express")
const app = express()

const PORT = 3000

app.listen(PORT, function() {
    console.log('Express hospedado na porta '+PORT)
})

app.get('/', (requisicao, resposta) => {
    resposta.send('Está funcionando')
})

