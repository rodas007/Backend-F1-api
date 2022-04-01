const express = require("express");
const router = express.Router();
const { isAuth } = require("../../middlewares/auth.middlewares");
const { uploadToCloudinary } = require("../../middlewares/file.middlewares")
const { upload } = require("../../middlewares/file.middlewares")


const { getAllDrivers, getByIdDriver, getByName, postDrivers, getByIdDelete, putByid,getMongoIdDriver } = require("../controllers/driver.controller");
//GET
router.get('/', getAllDrivers);
router.get('/:id', getByIdDriver);
router.get('/name/:givenName', getByName);
router.get('/id/:_id', getMongoIdDriver);

//POST


router.post("/", [ upload.single('picture'), uploadToCloudinary ], postDrivers);

//DELETE
router.delete('/:id', getByIdDelete);

//PUT
router.put('/:id',  putByid);


module.exports = router;