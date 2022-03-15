
const express = require('express');
const dotenv = require("dotenv");
const {connect} = require('./app/config/db')
const escuderias = require("./app/api/routes/escuderias.routes")
const drivers = require("./app/api/routes/driver.route");

connect();
dotenv.config();


const PORT = process.env.PORT;
const server = express();


server.use('/', escuderias);
server.use("/drivers", drivers);












server.disable('x-powered-by');


server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});

