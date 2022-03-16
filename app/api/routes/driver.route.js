const express = require("express");
const router = express.Router();
const { isAuth } = require("../../middlewares/auth.middlewares");

const { getAllDrivers, getByIdDriver, getByName, postDrivers, getByIdDelete,getByNamePut } = require("../controllers/driver.controller");
//GET
router.get('/', getAllDrivers);
router.get("/id/:id", getByIdDriver);
router.get('/name/:name',[isAuth], getByName);


//POST

router.post("/", postDrivers);


//DELETE
router.delete('/:id', getByIdDelete);

//PUT
router.put('/:id', getByNamePut);


module.exports = router;