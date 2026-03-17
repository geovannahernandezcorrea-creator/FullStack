const { Sequelize } = require ('sequelize');

const sequelize = new Sequelize('api_fullstack', 'root', 'senha-se-necessario',{
    host:'localhost',
    dialect:'mysql'
})

module.exports = sequelize