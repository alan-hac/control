'use strict'

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

rpio.init({gpiomem: true, mapping: 'physical',  close_on_exit: true,});     

const GpioComponent = {
    
    getGPIO() {
        let gpio = {}
        for (let i = 1; i < 41; i++ ) {
            try {
                gpio[i] = rpio.read(i);
            } catch (err) { 
                gpio[i] =  rpioReserved[i] || 'ERROR'
            }
        }
    
        return gpio;
    },

    setPinOn(params) {
        let pin = params.pin;
        rpio.write(pin, rpio.HIGH);
        return `Pin ${pin} setted to HIGH`;
    },

    setPinOff(params) {
        let pin = params.pin;
        rpio.write(pin, rpio.LOW);
        return `Pin ${pin} setted to LOW`;
    }
}

module.exports = GpioComponent;