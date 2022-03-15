
const express = require('express');
require("dotenv").config();
require('./app/config/db').connect();
const escuderias = require("./app/api/routes/escuderias.routes")
const drivers = require("./app/api/routes/driver.route");

//connect();
//dotenv.config();


const PORT = process.env.PORT;
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: false }));


server.use('/escuderias', escuderias);
server.use("/drivers", drivers);




server.disable('x-powered-by');//para que no muestre que estamos usando node


server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});

