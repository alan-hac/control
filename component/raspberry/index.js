const router = require('express').Router();
const gpio = require('./gpio-component');

router.get('/', (_, res) => res.send(true));

router.get('/gpio', (_, res) => {
    res.send(gpio.getGPIO());
})

router.get('/on', (req, res) => {
    res.send(gpio.setPinOn(req.query))
});

router.get('/off', (req, res) => {
    res.send(gpio.setPinOff(req.query));
});

module.exports = router