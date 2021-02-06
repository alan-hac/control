const rpio = require("rpio");
const LED = 29
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

rpio.open(LED, rpio.OUTPUT, rpio.LOW);

app.get('/gpio', (req, res) => {
    res.send(getGPIO());
})

app.get('/on', (req, res) => {
    rpio.write(LED, rpio.HIGH);
    res.send("On");
});

app.get('/off', (req, res) => {
    rpio.write(LED, rpio.LOW);
    res.send("Off");
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