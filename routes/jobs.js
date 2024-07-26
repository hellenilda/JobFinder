const express = require('express')
const router = express.Router()
const Job = require('../models/Job')

router.get('/test', (requisicao, resposta) => {
    resposta.send('Tudo certo')
})

// POST: Job
router.post('/add', (requisicao, resposta) => {
    let {titulo, salario, empresa, descricao, email, new_job} = requisicao.body
  
    // insert
    Job.create({
        titulo,
        descricao,
        salario,
        empresa,
        email,
        new_job
    })
    .then(() => resposta.redirect('/'))
    .catch(err => console.log(err))
})

module.exports = router