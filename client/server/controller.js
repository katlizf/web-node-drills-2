require('dotenv').config()
const Sequelize = require('sequelize')
const {CONNECTION_STRING} = process.env

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

exports.getAllInputs = (req, res) => {
    sequelize.query(`
        SELECT *
        FROM input;`)

        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log('get', err))
}

exports.createInput = (req, res) => {
    let {text} = req.body

    sequelize.query(`
        INSERT INTO input (text)
        VALUES ('${text}');`)

        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log('create', err))
    }
