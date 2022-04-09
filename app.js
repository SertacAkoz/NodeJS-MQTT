const express = require('express')
const app = express()
const portExpress = 3000
const bodyParser = require('body-parser')

const mqttRoute = require('./routes/mqtt')

app.use(bodyParser.json())
app.use('/mqtt', mqttRoute)

app.get('/', (req, res) => {
    
    res.send("myObject")
})

app.listen(portExpress, () => {
    console.log(`Example app listening on port ${portExpress}`)
})