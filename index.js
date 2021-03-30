const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./router')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, resp, next) => {
    resp.set('Access-Control-Allow-Origin', '*')
    next()
})

app.use('/api', router)

const server = app.listen(3000, () => console.log('A API está funcionando!'))

module.exports = server