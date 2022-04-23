const mqttClient = require('../connections/mqtt')
const {Publish} = require('../models/publish')
// const EventEmitter = require('events')
// const emitter = new EventEmitter()
const emitter = require('../events/event-emitter-base')
const mqttMessageListener = require('../events/mqtt-message')

mqttMessageListener.mqttMessageEmitterListener()

class Mqtt {
    
    
    asd = (req, res) => {
        
        res.send("asd")
    }
    
    publishMessage = (req ,res) => {
        emitter.emit('mqttMessage',req.body)

        // const publishMessage = new Publish(req.body)
        
        // console.log(publishMessage);
        // mqttClient.publish(publishMessage.topic, JSON.stringify(publishMessage.data), { qos: 0, retain: false }, (error) => {
        //     if (error) {
        //         console.log(error)
        //         res.send(error)
        //     }
        // })

        res.send("OK")
    }
}

// export default new Mqtt();
module.exports = new Mqtt()
// const controller = new Mqtt

