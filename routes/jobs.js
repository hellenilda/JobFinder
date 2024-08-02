const express = require('express')
const router = express.Router()
const Job = require('../models/Job')

router.get('/test', (req, res) => {
    res.send('Tudo certo')
})

// POST: Job
router.post('/add', (req, res) => {
    let {titulo, salario, empresa, descricao, email, new_job} = req.body
  
    // insert
    Job.create({
        titulo,
        descricao,
        salario,
        empresa,
        email,
        new_job
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

module.exports = router