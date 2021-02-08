const router = require('express').Router();
const rpio = require("rpio");
const rpioReserved = {
    1: "3.3V",
    2: "5V",
    4: "5V",
    6: "GND",
    9: "NONE",
    14: "GND",
    17: "GND",
    20: "GND",
    25: "NONE",
    30: "GND",
    34: "GND",
    39: "NONE" 
}

router.get('/', (_, res) => res.send(true));

router.get('/gpio', (_, res) => {
    res.send(getGPIO());
})

router.get('/on', (req, res) => {
    let pin = req.params.pin;
    rpio.write(pin, rpio.HIGH);
    res.send(`Pin ${pin} setted to HIGH`);
});

router.get('/off', (req, res) => {
    let pin = req.params.pin;
    rpio.write(pin, rpio.LOW);
    res.send(`Pin ${pin} setted to LOW`);
});

function getGPIO() {
    let gpio = {}

    for (let i = 1; i < 41; i++ ) {
        try { 
            let state = rpio.read(i);
            switch (state) {
                case 0:
                    gpio[i] = "OFF"
                    break;
                case 1:
                    gpio[i] = "ON"
                    break;
                default:
                    gpio[i] = "ERROR"    
            }
        } catch (err) { 
            gpio[i] =  rpioReserved[i]
        }
    }

    return gpio;

}