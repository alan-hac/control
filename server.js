const express = require("express");
const si = require("systeminformation");

const app = express();

app.get('/', (_, res) => res.sendFile(__dirname + "/app/index.html"));

app.get('/info', (_, res) => {
    return Promise.all([
        si.cpu(),
        si.cpuTemperature(),    
        si.mem(),
        si.fsSize(),
        si.osInfo()
    ]) 
});

app.listen(3000, () => console.log("Server started at port 3000"));