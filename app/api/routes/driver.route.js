const express = require("express");
const router = express.Router();

const { getAllDrivers, getByIdDriver, getByName, postDrivers } = require("../controllers/driver.controller");

router.get('/', getAllDrivers);
router.get("/id/:id", getByIdDriver);
router.get('/name/:name', getByName);

router.post("/", postDrivers);

module.exports = router;