const mqttClient = require('../connections/mqtt')
const emitter = require('./event-emitter-base')
const {Publish} = require('../models/publish')

const mqttMessageEmitterListener = () => {
    emitter.on('mqttMessage',(data) => {
        const publishMessage = new Publish(data)
    
        // console.log(publishMessage);
    
        mqttClient.publish(publishMessage.topic, JSON.stringify(publishMessage.data), { qos: 0, retain: false }, (error) => {
            if (error) {
                console.log(error)
                res.send(error)
            }
            console.log(publishMessage);
        })
    })
}

module.exports = {mqttMessageEmitterListener}

