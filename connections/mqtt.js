const mqtt = require('mqtt')

// const host = 'host'
// const port = 'port'
const host = 'broker.emqx.io'
const port = '1883'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`

const connectUrl = `mqtt://${host}:${port}`
const client = mqtt.connect(connectUrl, {
    clientId,
    clean: true,
    connectTimeout: 4000,
    username: 'emqx',
    password: 'public',
    reconnectPeriod: 1000,
})

const topic = '/mqtt'

var jsonObject = {
    "Welcome": "Hi!"
}

var onlineUser = 0

client.on('connect', () => {
    console.log('Connected')
    onlineUser++
    console.log(`Online User --> ${onlineUser}`)
    client.subscribe(topic, () => {
        console.log(`Subscribe to topic '${topic}'`)
        client.publish(topic, JSON.stringify(jsonObject), { qos: 0, retain: false }, (error) => {
            if (error) {
                console.log(error)
            }
        })
    })
})
client.on('disconnect', () => {
    onlineUse--
    console.log(`Online User --> ${onlineUser}`)
})
client.on('message', (topic, payload) => {
    console.log('Received Message:', topic, "\n" + payload)
})

module.exports = client


