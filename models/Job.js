const Sequelize = require('sequelize')
const db = require('../db/connection')

const Job = db.define('job', {
    titulo: {
        type: Sequelize.STRING,
    },
    descricao: {
        type: Sequelize.STRING,
    },
    salario: {
        type: Sequelize.STRING,
    },
    empresa: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    new_job: {
        type: Sequelize.INTEGER,
    }
})

// Exportar para acesso em outros módulos
module.exports = Job