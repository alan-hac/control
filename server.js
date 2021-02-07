const express = require("express");

const app = express();

app.use('/', require('./routers'));

app.listen(3000, () => console.log("Server started at port 3000"));