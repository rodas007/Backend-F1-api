const express = require("express");
const router = express.Router();

const { getAllDrivers, getByIdDriver, getByName } = require("../controllers/driver.controller");

router.get('/', getAllDrivers);
router.get("/id/:id", getByIdDriver);
router.get('/name/:name', getByName);

module.exports = router;