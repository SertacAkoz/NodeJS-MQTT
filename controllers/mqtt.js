const mqttClient = require('../connections/mqtt')
const {Publish} = require('../models/publish')

class Mqtt {
    
    asd = (req, res) => {
        
        res.send("asd")
    }
    
    publishMessage = (req ,res) => {

        const publishMessage = new Publish(req.body)

        mqttClient.publish(publishMessage.topic, JSON.stringify(publishMessage.data), { qos: 0, retain: false }, (error) => {
            if (error) {
                console.log(error)
                res.send(error)
            }
        })

        res.send("OK")
    }
}

// export default new Mqtt();
module.exports = new Mqtt()
// const controller = new Mqtt

