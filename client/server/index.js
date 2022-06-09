require('dotenv').config()
const port = process.env.PORT || 3035
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const controller = require('./controller.js')

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))



app.get('/api/info', controller.getAllInputs)
app.post('/api/info', controller.createInput)


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})