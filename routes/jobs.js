const express = require('express')
const router = express.Router()
const Job = require('../models/Job')

// adicionar job via post
router.post('/add', (requisicao, resposta) => {
    let {titulo, salario, empresa, descricao, email, new_job} = requisicao.body
    
})