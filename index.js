
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
require("dotenv").config();
require('./app/config/db').connect();
require('./app/authentication/passport'); 
const passport = require('passport');

const escuderias = require("./app/api/routes/escuderias.routes")
const drivers = require("./app/api/routes/driver.route");


const userRoutes = require('./app/api/routes/user.routes');
const authRoutes = require('./app/api/routes/auth.routes');

const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: 'dvkne4kv7', 
  api_key: '793666758637819', 
  api_secret: 'p38DqNigwFPsKaMcOykJoixUr20' 
});

const PORT = process.env.PORT;
const server = express();

server.set("secretKey", process.env.KEY);
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(passport.initialize())


server.use('/', authRoutes);
server.use('/users', userRoutes);

server.use('/escuderias', escuderias);
server.use("/drivers", drivers);

server.use(logger('dev'));

server.use('*', (req, res, next) => {
  const error = new Error('Route not found');
  error.status = 404;
  next(error);
});

server.use((error, req, res, next) => {
  return res.status(error.status || 500).json(error.message || 'Unexpected error');
});

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

server.use(
  cors({  
origin: "*",
credentials: true,
  })
)






server.disable('x-powered-by');//para que no muestre que estamos usando node


server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});

