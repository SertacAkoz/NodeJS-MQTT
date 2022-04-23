const express = require('express')
const app = express()
const portExpress = 3000
const bodyParser = require('body-parser')
const fs = require('fs')

const mqttRoute = require('./routes/mqtt')

app.use(bodyParser.json())
app.use('/mqtt', mqttRoute)

app.get('/', (req, res) => {
    
    const welcomeObject = {
        server:'Working'
    }
    res.send(welcomeObject)
})

app.listen(portExpress, () => {
    console.log(`Example app listening on port ${portExpress}`)
})