const router = require('express').Router()
const controller = require('../controllers/mqtt')
const validator = require('../validators/publish-data')

router.get('/',(req, res) => {
    res.send("Mqtt Route...")
})

router.post('/publish-message', validator.publishValidation, controller.publishMessage)


module.exports = router