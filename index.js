
const express = require('express');
require("dotenv").config();
require('./app/config/db').connect();
require('./app/authentication/passport'); 
const passport = require('passport');
const escuderias = require("./app/api/routes/escuderias.routes")
const drivers = require("./app/api/routes/driver.route");


const userRoutes = require('./app/api/routes/user.routes');
const authRoutes = require('./app/api/routes/auth.routes');




const PORT = process.env.PORT;
const server = express();

server.set("secretKey", "nodeRestApi");
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(passport.initialize())

server.use('/', authRoutes);
server.use('/users', userRoutes);
server.use('/escuderias', escuderias);
server.use("/drivers", drivers);

server.use('*', (req, res, next) => {
  const error = new Error('Route not found');
  error.status = 404;
  next(error);
});

server.use((error, req, res, next) => {
  return res.status(error.status || 500).json(error.message || 'Unexpected error');
});



server.disable('x-powered-by');//para que no muestre que estamos usando node


server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});

